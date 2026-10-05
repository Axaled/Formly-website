import { ImageResponse } from "next/og"
import { profile } from "@/lib/portfolio"

export const alt = `${profile.firstName} — Automatisations IA & développement web pour les PME`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#faf8f3",
          color: "#2b2622",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2, textTransform: "uppercase", color: "#6b625a" }}>
          <span>
            {profile.firstName} · {profile.role}
          </span>
          <span>{profile.location}</span>
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 1000 }}>
          J&apos;automatise ce qui fait perdre du temps aux PME, et je dessine les outils qui vont avec.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #2b2622", paddingTop: 24, fontSize: 26 }}>
          <span>Automatisations IA · Développement web & design</span>
          <span style={{ color: "#c2562a" }}>{profile.email}</span>
        </div>
      </div>
    ),
    size
  )
}
