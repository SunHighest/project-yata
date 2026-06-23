import { ImageResponse } from "next/og"

export const alt = "Project YATA — Has Begun."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {/* Left: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 80px 80px 100px",
            flex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              color: "#525252",
              fontSize: 15,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: 36,
              fontFamily: "sans-serif",
            }}
          >
            PROJECT YATA
          </div>

          {/* Headline */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 100,
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 44,
              fontFamily: "sans-serif",
            }}
          >
            Has Begun.
          </div>

          {/* English subtitle */}
          <div
            style={{
              color: "#737373",
              fontSize: 24,
              lineHeight: 1.6,
              marginBottom: 64,
              fontFamily: "sans-serif",
            }}
          >
            Creating an AI that people naturally want to talk to every day.
          </div>

          {/* Metadata footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#404040",
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.08em",
            }}
          >
            <span>v0.0.1</span>
            <span style={{ color: "#262626" }}>·</span>
            <span>2026.06.23</span>
            <span style={{ color: "#262626" }}>·</span>
            <span>SunHighest Electronics</span>
          </div>
        </div>

        {/* Right: YATA symbol watermark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            opacity: 0.06,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width={360}
            height={360}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              fill="white"
              d="M50,5 a11,11 0 0,1 11,11 a11,11 0 0,1 -11,11 a11,11 0 0,1 -11,-11 a11,11 0 0,1 11,-11 Z M50,12 a2.5,2.5 0 0,1 2.5,2.5 a2.5,2.5 0 0,1 -2.5,2.5 a2.5,2.5 0 0,1 -2.5,-2.5 a2.5,2.5 0 0,1 2.5,-2.5 Z"
            />
            <ellipse cx="50" cy="50" rx="17" ry="21" fill="white" />
            <path fill="white" d="M33,46 C22,40 8,41 5,47 C3,53 16,58 33,52 Z" />
            <path fill="white" d="M67,46 C78,40 92,41 95,47 C97,53 84,58 67,52 Z" />
            <line x1="43" y1="69" x2="36" y2="89" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="36" y1="89" x2="27" y2="95" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="89" x2="44" y2="95" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="71" x2="50" y2="91" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="91" x2="43" y2="97" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="91" x2="57" y2="97" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="57" y1="69" x2="64" y2="89" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="64" y1="89" x2="56" y2="95" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="64" y1="89" x2="73" y2="95" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  )
}
