import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-14 px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/images/sunhighest-logo.png"
            alt="SunHighest Electronics"
            width={100}
            height={41}
            className=""
          />
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-neutral-600 text-xs font-mono">
            Project YATA v0.0.2
          </p>
          <p className="text-neutral-600 text-xs">
            © 2026 SunHighest Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
