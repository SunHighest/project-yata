"use client"

import { motion } from "framer-motion"

const principles = [
  "人間が目的を決める。",
  "AIは最適な方法を提案する。",
  "AIは人間の思考を奪わず、能力を拡張する。",
  "シンプルさを最優先する。",
  "AIに任せられることはAIに任せる。",
  "人間は創造と決断に集中する。",
]

export function Mission() {
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
          Mission
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 max-w-3xl"
        >
          <p className="text-white text-3xl md:text-4xl font-light leading-[1.5] mb-3">
            Technology should feel natural.
          </p>
          <p className="text-neutral-400 text-3xl md:text-4xl font-light leading-[1.5]">
            AI should feel like a trusted partner.
          </p>
        </motion.blockquote>

        <div className="border-t border-neutral-900 pt-16">
          <p className="text-neutral-700 text-xs tracking-widest uppercase mb-10">
            Principles
          </p>
          <ul className="space-y-5 max-w-2xl">
            {principles.map((principle, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-baseline gap-5"
              >
                <span className="text-neutral-700 text-xs font-mono shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-300 text-base">{principle}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
