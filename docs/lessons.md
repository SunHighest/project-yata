# lessons.md — 失敗から学んだ教訓

Sprint 2 デプロイ作業（2026.06）で発生した問題と教訓を記録する。
同じ失敗を繰り返さないための参照ドキュメント。

---

## 教訓 1：さくらインターネットへの自動デプロイは制約が多い

### 発生した問題
GitHub Actions からさくらインターネットへの自動デプロイを3方式試みて全て失敗した。

| 試行 | 方式 | エラー | 根本原因 |
|---|---|---|---|
| 1回目 | FTP (ポート21) | `Server sent FIN packet unexpectedly` | GitHub Actions の IP をさくらが遮断 |
| 2回目 | FTPS (ポート21, TLS) | `Server sent FIN packet unexpectedly` | 同上 |
| 3回目 | SFTP + lftp + sshpass | `GetPass() failed — assume anonymous login` | lftp が子プロセスに `SSHPASS` 環境変数を渡せなかった |
| 4回目 | SFTP + paramiko (パスワード) | `AuthenticationException: Authentication failed` | さくらは SSH パスワード認証を**禁止**している |

### 教訓
- さくらインターネットは GitHub Actions の IP 帯域からの FTP/FTPS 接続を遮断する
- さくらの SSH（ポート22）はパスワード認証不可。**公開鍵認証が必要**
- 自動デプロイを実現するには、さくらコントロールパネルで SSH 公開鍵を登録し、GitHub Secrets に秘密鍵を追加する必要がある
- 未解決のまま方式を変えて繰り返すのではなく、早期に根本制約を特定すべきだった

### 残課題
自動デプロイを再開する際は以下を実施する:
1. `ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/sakura_deploy -N ""`
2. さくらコントロールパネル → SSH設定 → 公開鍵を登録
3. GitHub Secrets に `SSH_PRIVATE_KEY`（秘密鍵の全文）を追加
4. [.github/scripts/deploy.py](.github/scripts/deploy.py) をパスワード認証から鍵認証に変更

---

## 教訓 2：静的サイトの手動アップロードは _next/ を先に削除する

### 発生した問題
`npm run build` 後に `out/` を手動アップロードしたが、サイトが真っ黒になった。
エラー: `Failed to load resource: the server responded with a status of 404` (`2__dsaa22zdre.js`)

### 原因
Next.js の静的エクスポートはビルドごとにチャンクファイルのハッシュが変わる。
旧ビルドのチャンクファイルがサーバーに残った状態で新ビルドをアップロードすると、
HTML が参照するチャンク名と、サーバーに存在するファイルが一致しなくなる。

### 教訓
- **手動アップロード前に必ずサーバーの `_next/` フォルダを削除する**
- 上書きアップロードではなく、削除 → 全アップロードの順序を守る
- Framer Motion の SSR 実装により、JS が読み込まれない場合はページ全体が `opacity: 0` のまま（黒画面）になる。JSチャンクの欠落は即座に黒画面につながる

### 手順（手動デプロイ）
```
1. npm run build
2. FTPクライアントでさくらに接続
3. サーバーの _next/ フォルダを削除
4. out/ の中身をすべてアップロード
```

---

## 教訓 3：「成功の確認」なしに完了報告をしない

### 発生した問題
GitHub Actions のワークフロー変更を push した後、実行結果を確認せずに「完了した」と報告してしまった回があった。

### 教訓
- CI/CD の push 後は必ず Actions の実行結果を確認してから完了報告をする
- 確認できない場合は「push しました。結果を教えてください」と明示する
- ビルドの成功とデプロイの成功は別物として報告する

---

## 教訓 4：同じ方式の失敗を繰り返さない

### 教訓
- 同じアプローチで 2回失敗したら、根本原因を確定させてから次の手を打つ
- 「試してみる」を繰り返すことはオーナーの時間を無駄にする
- 制約が不明な場合は調査結果を先に報告し、方針をオーナーに確認してから実行する
