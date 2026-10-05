import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf8f3",
          color: "#2b2622",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 128,
          lineHeight: 1,
        }}
      >
        A<span style={{ color: "#c2562a" }}>.</span>
      </div>
    ),
    size
  )
}
