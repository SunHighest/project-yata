"use client"

import { motion } from "framer-motion"
import { YataSymbol } from "./brand/YataSymbol"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)",
      }}
    >
      <div className="flex items-center gap-2.5 text-white select-none">
        <YataSymbol size={20} className="text-white" />
        <span className="text-sm font-medium tracking-[0.25em] uppercase">
          YATA
        </span>
      </div>
      <span className="text-neutral-600 text-xs tracking-widest font-mono">
        v0.0.2
      </span>
    </motion.header>
  )
}
