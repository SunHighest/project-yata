"use client"

import { motion } from "framer-motion"

const news = [
  {
    date: "2026.06.27",
    version: "v0.0.2",
    tag: "Sprint",
    title: "YATA — 耳を持った。",
    subtitle: "Sprint 2 Complete — Voice Foundation Established",
    body: "YATAが、初めて言葉を聴いた。\n\nSprint 2において、Faster-Whisperを採用したSTT基盤を構築しました。OSSを優先し、クラウドAPIに依存しないLocal Firstの設計のもと、日本語音声認識に成功。端末の中で静かに、正確に、言葉を受け取る力をYATAは手に入れました。\n\n声で語りかけるAI相棒への旅は、まず「聴くこと」から始まります。",
  },
  {
    date: "2026.06.23",
    version: "v0.0.1",
    tag: "Milestone",
    title: "Project YATA — Has Begun.",
    subtitle: "Project Launch — Vision and Philosophy Published",
    body: "Project YATAのスタートを宣言します。YATAは、人が毎日自然に話しかけたくなるAI相棒を目指す長期研究開発プロジェクトです。完成を目指さず、毎週何かを公開しながら、共に進化し続けます。",
  },
]

export function News() {
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
          News
        </motion.p>

        <div className="max-w-2xl">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="pb-12 border-b border-neutral-900"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-neutral-600 text-xs font-mono">
                  {item.date}
                </span>
                <span className="text-neutral-700 text-xs font-mono">
                  {item.version}
                </span>
                <span className="text-blue-400 text-[10px] tracking-wider border border-blue-900 px-2 py-0.5 rounded-sm">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-white text-2xl font-light mb-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-neutral-600 text-xs tracking-wider mb-4">
                  {item.subtitle}
                </p>
              )}
              <p className="text-neutral-400 text-sm leading-[1.8] whitespace-pre-line">
                {item.body}
              </p>
            </motion.article>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-10 text-neutral-700 text-sm"
          >
            More updates coming soon.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
