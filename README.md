# Project YATA v0.0.1

さくらインターネット レンタルサーバー向け静的サイト公開手順。

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
# .env.production を編集して NEXT_PUBLIC_SITE_URL を設定
```

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.sakura.ne.jp
```

設定後に `npm run build` を実行すると、正しいURLで `sitemap.xml` と `robots.txt` が生成されます。

---

## さくらインターネットへのデプロイ（手動）

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

---

## 技術スタック

- Next.js 16 (Static Export)
- React 19
- Tailwind CSS v4
- Framer Motion
- TypeScript

## ディレクトリ構成（主要部分）

```
project-yata/
├── src/
│   ├── app/          # App Router
│   └── components/   # UIコンポーネント
├── public/           # 静的アセット（画像・SVGなど）
├── out/              # ビルド出力（git管理外）
└── .github/
    └── workflows/
        └── deploy.yml
```
