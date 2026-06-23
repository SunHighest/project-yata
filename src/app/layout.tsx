import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Project YATA — Has Begun.",
  description:
    "Yielding Autonomous Thinking Assistant. An AI partner that guides, not replaces. 人が毎日自然に話しかけたくなるAIを創る。",
  keywords: [
    "YATA",
    "Yielding Autonomous Thinking Assistant",
    "AI",
    "AI partner",
    "voice AI",
    "SunHighest Electronics",
    "人工知能",
    "AIアシスタント",
  ],
  openGraph: {
    title: "Project YATA — Has Begun.",
    description:
      "Creating an AI that people naturally want to talk to every day. 人が毎日自然に話しかけたくなるAIを創る。",
    type: "website",
    siteName: "Project YATA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project YATA — Has Begun.",
    description:
      "Creating an AI that people naturally want to talk to every day.",
  },
  icons: {
    icon: [{ url: "/brand/yata-favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/yata-favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  )
}
