#!/usr/bin/env python3
"""
Project YATA — ローカルデプロイスクリプト
Usage: npm run deploy

必要事項:
  .env.deploy ファイルを作成して FTP 認証情報を記入する
  (.env.deploy.example を参照)
"""

import ftplib
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "out"


def load_env(path):
    config = {}
    with open(path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, _, v = line.partition("=")
                config[k.strip()] = v.strip().strip('"').strip("'")
    return config


def step_build(env_config):
    print("[1/3] Building...")
    env = os.environ.copy()
    for k, v in env_config.items():
        env[k] = v
    r = subprocess.run(["npm", "run", "build"], cwd=ROOT, env=env)
    if r.returncode != 0:
        print("Build failed.")
        sys.exit(1)
    print("[1/3] Build complete.\n")


def ftp_delete_dir(ftp, path):
    """FTPサーバー上のディレクトリを再帰的に削除する。"""
    entries = []
    try:
        ftp.retrlines(f"LIST {path}", entries.append)
    except (ftplib.error_perm, ftplib.error_temp):
        return  # 存在しない場合はスキップ

    for entry in entries:
        parts = entry.split(None, 8)
        if len(parts) < 9:
            continue
        name = parts[8]
        if name in (".", ".."):
            continue
        child = f"{path}/{name}"
        is_dir = entry[0] == "d"
        if is_dir:
            ftp_delete_dir(ftp, child)
        else:
            try:
                ftp.delete(child)
            except ftplib.error_perm:
                pass

    try:
        ftp.rmd(path)
    except ftplib.error_perm:
        pass


def ftp_upload(ftp, local_path, remote_path):
    """ローカルのファイル/ディレクトリをFTPサーバーへ再帰的にアップロードする。"""
    local = Path(local_path)

    if local.is_file():
        with open(local, "rb") as f:
            ftp.storbinary(f"STOR {remote_path}", f)
        print(f"  ✓ {remote_path}")
        return

    # ディレクトリ作成（すでに存在してもエラーにしない）
    try:
        ftp.mkd(remote_path)
    except ftplib.error_perm:
        pass

    for child in sorted(local.iterdir()):
        ftp_upload(ftp, child, f"{remote_path}/{child.name}")


def step_deploy(config):
    host = config["FTP_HOST"]
    user = config["FTP_USER"]
    password = config["FTP_PASSWORD"]
    remote_dir = config["FTP_REMOTE_DIR"].rstrip("/")
    use_tls = config.get("FTP_TLS", "false").lower() == "true"

    print(f"[2/3] Connecting to {host}...")
    if use_tls:
        ftp = ftplib.FTP_TLS()
        ftp.connect(host, 21, timeout=60)
        ftp.login(user, password)
        ftp.prot_p()
    else:
        ftp = ftplib.FTP()
        ftp.connect(host, 21, timeout=60)
        ftp.login(user, password)
    ftp.set_pasv(True)
    print(f"[2/3] Connected. Remote: {remote_dir}\n")

    # _next/ を先に削除（旧チャンクとの混在を防ぐ）
    next_remote = f"{remote_dir}/_next"
    print(f"Deleting {next_remote} ...")
    ftp_delete_dir(ftp, next_remote)
    print(f"Deleted {next_remote}\n")

    # out/ の中身を全てアップロード
    print("[3/3] Uploading...")
    for child in sorted(OUT_DIR.iterdir()):
        ftp_upload(ftp, child, f"{remote_dir}/{child.name}")

    ftp.quit()
    print("\nDeploy complete!")


if __name__ == "__main__":
    # .env.deploy 読み込み
    env_deploy = ROOT / ".env.deploy"
    if not env_deploy.exists():
        print("Error: .env.deploy が見つかりません。")
        print(".env.deploy.example をコピーして認証情報を記入してください。")
        sys.exit(1)
    config = load_env(env_deploy)

    required_keys = ["FTP_HOST", "FTP_USER", "FTP_PASSWORD", "FTP_REMOTE_DIR"]
    missing = [k for k in required_keys if not config.get(k)]
    if missing:
        print(f"Error: .env.deploy に以下のキーが不足しています: {', '.join(missing)}")
        sys.exit(1)

    # .env.production の環境変数もビルドに渡す
    env_prod = ROOT / ".env.production"
    prod_config = load_env(env_prod) if env_prod.exists() else {}

    step_build(prod_config)
    step_deploy(config)
