# デプロイ手順

Project YATA をさくらインターネット レンタルサーバーへ静的サイトとして公開する手順です。

---

## ビルド

```bash
npm install
npm run build
```

`out/` フォルダに静的ファイルが生成されます。

### 本番URLの設定

`robots.txt` と `sitemap.xml` 内のURLを正しくするため、ビルド前に環境変数を設定してください。

`.env.production.example` をコピーして `.env.production` を作成し、実際のURLを入力します。

```bash
cp .env.production.example .env.production
```

`.env.production` を編集して本番URLを設定します。

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.sakura.ne.jp
```

設定後に `npm run build` を実行すると、正しいURLで `sitemap.xml` と `robots.txt` が生成されます。

---

## さくらインターネットへのデプロイ（手動 FTP）

1. [さくらのコントロールパネル](https://secure.sakura.ad.jp/rs/cp/) にログイン
2. **FTPクライアント**（FileZilla 等）で接続
   - ホスト: `xxxxxxxx.sakura.ne.jp`（契約時に案内されるFTPホスト）
   - ユーザー名: さくらのユーザー名
   - パスワード: さくらのパスワード
   - ポート: `21`（FTP）または `22`（SFTP）
3. サーバー上の公開ディレクトリ（`www/` または `public_html/`）へ移動
4. ローカルの `out/` フォルダの中身を**すべてアップロード**

> `out/` フォルダ自体ではなく、その中のファイル・フォルダをアップロードしてください。

---

## GitHub Actions による自動デプロイ

`.github/workflows/deploy.yml` が用意されています。

`main` ブランチへのプッシュ時に自動ビルド・デプロイが実行されます。

### GitHub Secrets の設定

リポジトリの **Settings → Secrets and variables → Actions** で以下を登録してください。

| Secret名 | 値 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.sakura.ne.jp` |
| `FTP_SERVER` | さくらのFTPホスト名（例: `xxxxxxxx.sakura.ne.jp`） |
| `FTP_USERNAME` | さくらのFTPユーザー名 |
| `FTP_PASSWORD` | さくらのFTPパスワード |
| `FTP_SERVER_DIR` | アップロード先のサーバーディレクトリ（例: `www/` または `www/yata/`） |

### ワークフローの流れ

```
main ブランチへの push
  └─ npm ci
  └─ npm run build  (NEXT_PUBLIC_SITE_URL を注入)
  └─ out/ を FTP でさくらサーバーへアップロード
```

---

## ビルド出力（out/）の内容

`npm run build` で生成される主なファイルです。

```
out/
├── index.html              # トップページ
├── robots.txt              # クローラー制御
├── sitemap.xml             # サイトマップ
├── opengraph-image         # OGP画像（SNSシェア用）
├── _next/
│   └── static/
│       ├── chunks/         # JavaScript バンドル
│       └── media/          # Webフォント（Inter）
├── brand/                  # SVGアセット
└── images/                 # 画像ファイル
```

---

## 関連ファイル

| ファイル | 役割 |
|---|---|
| `next.config.ts` | `output: "export"` で Static Export を有効化 |
| `.env.production.example` | 環境変数テンプレート |
| `.github/workflows/deploy.yml` | GitHub Actions ワークフロー |
