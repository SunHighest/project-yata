# Project YATA

**Yielding Autonomous Thinking Assistant**

> 人が毎日自然に話しかけたくなるAIを創る。  
> Creating an AI that people naturally want to talk to every day.

by [SunHighest Electronics](https://github.com/SunHighestElectronics)

---

## What is Project YATA?

Project YATA は、人間を置き換えるAIを作るプロジェクトではありません。

人がより良く考え、学び、創造し、行動するための「相棒」を創る研究開発プロジェクトです。

音声を中心に、必要なときだけ視覚的な情報を提示し、人とAIが自然に協力できる体験を実現します。

Project YATA は、一時的な流行ではなく、10年後・20年後も価値を持つAIパートナーを目指して開発を続けます。

---

## Mission

> **Technology should feel natural.**  
> **AI should feel like a trusted partner.**

**Principles**

1. 人間が目的を決める。
2. AIは最適な方法を提案する。
3. AIは人間の思考を奪わず、能力を拡張する。
4. シンプルさを最優先する。
5. AIに任せられることはAIに任せる。
6. 人間は創造と決断に集中する。

---

## Vision

人が毎日自然に会話したくなるAI相棒を目指して。

| Phase | Title | 内容 |
|---|---|---|
| Phase 1 | Voice AI Partner | 声で話しかけるだけで、YATAが思考を整理し、最適な答えを導く。|
| Phase 2 | Visual When Needed | 音声を主軸に、必要な瞬間だけ視覚的な情報を補完する。|
| Phase 3 | Work Assistant | YATAが日常業務を自律的にサポートし、人間は本質的な仕事に集中できる。|
| Phase 4 | Physical Integration | デジタルの枠を超え、現実空間でYATAと共に行動する未来へ。|

---

## Roadmap

| Version | Milestone | Status |
|---|---|---|
| v0.0.1 | Project Started — ビジョンと哲学の公開 | ✓ Shipped (2026.06) |
| v0.0.2 | Voice Foundation — 日本語STT基盤の構築 | ✓ Shipped (2026.06) |
| v0.1.0 | Voice Prototype — YATAとの最初の音声対話 | In Progress |
| v0.2.0 | First Conversation — 日常タスクをYATAと共に | Upcoming |

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router / Static Export) |
| UI | React 19 + Tailwind CSS v4 |
| Animation | Framer Motion |
| Language | TypeScript |
| Hosting | さくらインターネット レンタルサーバー |

---

## Directory Structure

```
project-yata/
├── src/
│   ├── app/                   # App Router (layout, page, OGP, sitemap)
│   └── components/
│       ├── brand/             # YATAシンボル SVG
│       ├── sections/          # Hero, Mission, Vision, Roadmap, News
│       ├── Header.tsx
│       └── Footer.tsx
├── public/
│   ├── brand/                 # SVGアセット（favicon, wordmark 等）
│   └── images/                # 画像ファイル
├── docs/
│   └── DEPLOY.md              # デプロイ手順
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions (FTP自動デプロイ)
├── next.config.ts
└── PROJECT.md                 # プロジェクト設計書（AI向け）
```

---

## Getting Started

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
# → http://localhost:3000

# 本番ビルド（out/ フォルダに静的ファイルを生成）
npm run build

# Lintの実行
npm run lint
```

---

デプロイ手順は [docs/DEPLOY.md](docs/DEPLOY.md) を参照してください。
