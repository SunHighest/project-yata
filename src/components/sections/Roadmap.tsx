"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    version: "v0.0.1",
    title: "Project Started",
    titleJa: "プロジェクト始動",
    description:
      "Project YATAのスタートを世界へ宣言。ビジョンと哲学を公開する。",
    date: "2026.06",
    status: "done",
  },
  {
    version: "v0.0.2",
    title: "Voice Foundation",
    titleJa: "音声認識基盤の構築",
    description:
      "Faster-Whisperを採用した日本語STT基盤を構築。OSS First・Local Firstの設計でAPIに依存しない音声認識を実現。YATAが初めて耳を持った。",
    date: "2026.06",
    status: "done",
  },
  {
    version: "v0.1.0",
    title: "Voice Prototype",
    titleJa: "音声プロトタイプ",
    description: "YATAとの最初の音声対話を実現する。",
    date: "TBD",
    status: "in_progress",
  },
  {
    version: "v0.2.0",
    title: "First Conversation",
    titleJa: "はじめての会話",
    description: "日常的なタスクをYATAと共に処理できる状態へ。",
    date: "TBD",
    status: "upcoming",
  },
]

export function Roadmap() {
  return (
    <section className="py-20 md:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neutral-600 text-xs tracking-[0.4em] uppercase mb-12 md:mb-20"
        >
          Roadmap
        </motion.p>

        <div className="max-w-2xl">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-8 pb-12 relative"
            >
              <div className="flex flex-col items-center pt-1.5 shrink-0">
                <div
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    milestone.status === "done"
                      ? "bg-blue-400"
                      : milestone.status === "in_progress"
                      ? "border-2 border-blue-500 bg-transparent"
                      : "bg-neutral-800 border border-neutral-700"
                  }`}
                />
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-900 mt-2" />
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-neutral-600 text-xs font-mono">
                    {milestone.version}
                  </span>
                  <span className="text-neutral-700 text-xs">
                    {milestone.date}
                  </span>
                  {milestone.status === "done" && (
                    <span className="text-blue-400 text-xs">✓ Shipped</span>
                  )}
                  {milestone.status === "in_progress" && (
                    <span className="text-blue-500 text-xs">In Progress</span>
                  )}
                </div>
                <h3
                  className={`text-lg font-medium mb-1 ${
                    milestone.status === "done"
                      ? "text-white"
                      : milestone.status === "in_progress"
                      ? "text-white"
                      : "text-neutral-500"
                  }`}
                >
                  {milestone.title}
                </h3>
                <p className="text-neutral-600 text-xs mb-2">
                  {milestone.titleJa}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
