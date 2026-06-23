"use client"

import { motion } from "framer-motion"
import { YataSymbol } from "@/components/brand/YataSymbol"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 text-center overflow-hidden">
      {/* Brand symbol — ambient watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 3.0 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <YataSymbol size={520} className="text-white opacity-[0.028]" />
      </motion.div>

      {/* Content */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-neutral-500 text-xs tracking-[0.45em] uppercase mb-6 relative"
      >
        Project YATA
      </motion.p>

      <motion.h1
        {...fadeUp(0.5)}
        className="text-[clamp(3.5rem,10vw,7rem)] font-light text-white leading-[1.05] tracking-tight mb-8 relative"
      >
        Has Begun.
      </motion.h1>

      <motion.p
        {...fadeUp(0.7)}
        className="text-neutral-600 text-xs tracking-[0.3em] font-mono mb-16 relative"
      >
        2026.06.23
      </motion.p>

      <motion.div {...fadeUp(0.9)} className="space-y-2 relative">
        <p className="text-neutral-300 text-base leading-relaxed">
          人が毎日自然に話しかけたくなるAIを創る。
        </p>
        <p className="text-neutral-600 text-sm">
          Creating an AI that people naturally want to talk to every day.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.0 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-neutral-700 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-700 to-transparent" />
      </motion.div>
    </section>
  )
}
