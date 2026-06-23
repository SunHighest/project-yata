"use client"

import { motion } from "framer-motion"

const phases = [
  {
    phase: "Phase 1",
    title: "Voice AI Partner",
    titleJa: "音声によるAIパートナー",
    description:
      "声で話しかけるだけで、YATAが思考を整理し、最適な答えを導く。",
    status: "current",
  },
  {
    phase: "Phase 2",
    title: "Visual When Needed",
    titleJa: "必要な時だけ画面で説明するAI",
    description: "音声を主軸に、必要な瞬間だけ視覚的な情報を補完する。",
    status: "future",
  },
  {
    phase: "Phase 3",
    title: "Work Assistant",
    titleJa: "PC操作や仕事を支援するAI",
    description:
      "YATAが日常業務を自律的にサポートし、人間は本質的な仕事に集中できる。",
    status: "future",
  },
  {
    phase: "Phase 4",
    title: "Physical Integration",
    titleJa: "Physical AIとの連携",
    description:
      "デジタルの枠を超え、現実空間でYATAと共に行動する未来へ。",
    status: "future",
  },
]

export function Vision() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neutral-600 text-xs tracking-[0.4em] uppercase mb-20"
        >
          Vision
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl md:text-3xl font-light leading-relaxed mb-20 max-w-2xl"
        >
          人が毎日自然に会話したくなる
          <br />
          AI相棒を目指して。
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-900">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0a0a0a] p-10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-neutral-600 text-xs tracking-widest">
                  {phase.phase}
                </p>
                {phase.status === "current" && (
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                    </span>
                    <span className="text-blue-400 text-[10px] tracking-widest">
                      NOW
                    </span>
                  </div>
                )}
              </div>
              <h3
                className={`text-lg font-medium ${
                  phase.status === "current"
                    ? "text-white"
                    : "text-neutral-400"
                }`}
              >
                {phase.title}
              </h3>
              <p className="text-neutral-600 text-sm">{phase.titleJa}</p>
              <p className="text-neutral-500 text-sm leading-relaxed mt-1">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
