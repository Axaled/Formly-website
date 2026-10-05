import Image from "next/image"
import { Check } from "lucide-react"
import { BrowserFrame } from "./browser-frame"

/* ---------- Verrou: real screenshots in a browser frame ---------- */
export function VerrouVisual() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <BrowserFrame url="verrou · étape 4 · vérifier et déposer">
        <Image
          src="/work/verrou-depot.webp"
          alt="Interface Verrou, étape 4 : le CERFA 2069-A-SD, l'annexe, les dossiers justificatifs par projet et le mémoire technique, prêts à télécharger."
          width={1600}
          height={1000}
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </BrowserFrame>
      <BrowserFrame url="verrou · estimateur" className="hidden lg:block">
        <Image
          src="/work/verrou-landing.webp"
          alt="Page d'accueil de Verrou avec l'estimateur gratuit du crédit d'impôt recherche."
          width={1600}
          height={1000}
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 420px, 100vw"
        />
      </BrowserFrame>
    </div>
  )
}

/* ---------- Showroom: stylised 3D stage with colour cycling ---------- */
const swatches = [
  { name: "Noir obsidienne", color: "oklch(0.2 0.01 285)", delay: "0s" },
  { name: "Rouge hyacinthe", color: "oklch(0.55 0.2 25)", delay: "3s" },
  { name: "Argent high-tech", color: "oklch(0.78 0.02 285)", delay: "6s" },
]

export function ShowroomVisual() {
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden border border-border bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,oklch(0.25_0.02_80/0.35),transparent_70%),linear-gradient(to_bottom,oklch(0.12_0.005_285),oklch(0.08_0.005_285))] "
      role="img"
      aria-label="Showroom 3D stylisé : une berline Mercedes dont la couleur change sur un sol en marbre réfléchissant, avec un assistant conversationnel."
    >

      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.22 0.005 285)" />
            <stop offset="1" stopColor="oklch(0.06 0.005 285)" />
          </linearGradient>
          <linearGradient id="reflect" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.14" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="spot" cx="0.5" cy="0" r="0.8">
            <stop offset="0" stopColor="white" stopOpacity="0.22" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* floor */}
        <rect x="0" y="186" width="400" height="114" fill="url(#floor)" />
        <ellipse cx="200" cy="188" rx="170" ry="4" fill="oklch(0.8 0.1 85)" opacity="0.2" />
        <rect x="0" y="0" width="400" height="200" fill="url(#spot)" />

        {/* car body */}
        <g transform="translate(52 96)">
          <path
            className="pf-paint"
            d="M6 78 C 6 70 10 66 20 64 L 58 58 C 78 40 100 28 130 24 C 160 20 196 20 226 28 C 246 34 262 44 276 56 L 288 62 C 294 64 296 70 296 76 L 296 84 C 296 88 293 90 289 90 L 13 90 C 9 90 6 88 6 84 Z"
          />
          <path
            d="M66 58 C 84 42 104 32 132 29 C 160 26 192 27 220 34 C 236 38 250 46 262 56 Z"
            fill="oklch(0.28 0.02 240)"
          />
          <path d="M 74 57 L 132 30 L 136 56 Z" fill="oklch(0.42 0.03 240)" opacity="0.5" />
          <path d="M 142 30 L 146 55 L 250 55 C 240 46 226 38 210 34 Z" fill="oklch(0.42 0.03 240)" opacity="0.5" />
          <path d="M 20 70 L 284 70" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M 64 60 C 110 46 180 42 258 56" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
          <path d="M 270 60 C 280 62 288 66 292 72" stroke="oklch(0.95 0.02 90)" strokeWidth="2.5" fill="none" opacity="0.9" />
          <path d="M 10 72 C 14 70 18 69 24 68" stroke="oklch(0.62 0.2 25)" strokeWidth="2.5" fill="none" opacity="0.9" />
          <circle cx="70" cy="90" r="19" fill="oklch(0.08 0 0)" />
          <circle cx="70" cy="90" r="10" fill="oklch(0.3 0.005 285)" />
          <circle cx="70" cy="90" r="3" fill="oklch(0.6 0.005 285)" />
          <circle cx="234" cy="90" r="19" fill="oklch(0.08 0 0)" />
          <circle cx="234" cy="90" r="10" fill="oklch(0.3 0.005 285)" />
          <circle cx="234" cy="90" r="3" fill="oklch(0.6 0.005 285)" />
        </g>
        {/* reflection */}
        <g transform="translate(52 282) scale(1 -1)" opacity="0.3">
          <path
            className="pf-paint"
            d="M6 78 C 6 70 10 66 20 64 L 58 58 C 78 40 100 28 130 24 C 160 20 196 20 226 28 C 246 34 262 44 276 56 L 288 62 C 294 64 296 70 296 76 L 296 84 C 296 88 293 90 289 90 L 13 90 C 9 90 6 88 6 84 Z"
          />
          <circle cx="70" cy="90" r="19" fill="oklch(0.08 0 0)" />
          <circle cx="234" cy="90" r="19" fill="oklch(0.08 0 0)" />
        </g>
        <rect x="0" y="186" width="400" height="114" fill="url(#reflect)" />
      </svg>

      {/* swatches */}
      <div className="absolute left-4 top-4 flex flex-col gap-2 sm:left-5 sm:top-5">
        {swatches.map((s) => (
          <span key={s.name} className="flex items-center gap-2">
            <span
              className="pf-swatch h-5 w-5 rounded-full border border-white/30 text-white"
              style={{ background: s.color, "--swatch-delay": s.delay } as React.CSSProperties}
            />
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
              {s.name}
            </span>
          </span>
        ))}
      </div>

      {/* model toggle */}
      <div className="absolute right-4 top-4 flex rounded-full border border-white/15 bg-white/5 p-1 font-mono text-[10px] backdrop-blur sm:right-5 sm:top-5">
        <span className="rounded-full bg-white/90 px-3 py-1 font-semibold text-black">EQS</span>
        <span className="px-3 py-1 text-white/70">EQE</span>
      </div>

      {/* assistant */}
      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/[0.07] p-3 backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Assistant</span>
          <span className="text-white/90">Passage en rouge hyacinthe. Vue intérieure ?</span>
        </div>
        <div className="mt-2 flex gap-1.5 overflow-hidden">
          {["Intérieur", "Extérieur", "Couleurs", "EQE"].map((c) => (
            <span key={c} className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/70">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Formly: a portal form filling itself in ---------- */
const fields = [
  { label: "Nom de l'assuré", value: "Martin Dupont", delay: "0s" },
  { label: "Date de naissance", value: "14/03/1986", delay: "0.5s" },
  { label: "Montant du prêt", value: "245 000 €", delay: "1s" },
  { label: "Durée", value: "240 mois", delay: "1.5s" },
  { label: "Quotité", value: "100 %", delay: "2s" },
]

export function FormlyVisual() {
  return (
    <div className="relative">
      <BrowserFrame url="portail-assureur.fr/tarification/emprunteur" className="lg:w-[78%]">
        <div
          className="relative space-y-3 bg-[oklch(0.97_0.003_285)] p-5 text-[oklch(0.25_0.02_250)] sm:p-6"
          role="img"
          aria-label="Formulaire d'un portail assureur dont les champs se remplissent automatiquement, avec le panneau de l'extension Formly."
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold">Tarification emprunteur</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.5_0.02_250)]">
              Étape 2 / 4
            </span>
          </div>
          {fields.map((f) => (
            <div key={f.label} style={{ "--fill-delay": f.delay } as React.CSSProperties}>
              <div className="mb-1 text-[11px] font-medium text-[oklch(0.45_0.02_250)]">{f.label}</div>
              <div className="relative flex h-9 items-center rounded-md border border-[oklch(0.88_0.005_250)] bg-white px-3 text-sm">
                <span className="pf-fill inline-block overflow-hidden whitespace-nowrap">{f.value}</span>
                <Check
                  className="pf-check absolute right-2.5 h-4 w-4 text-[oklch(0.65_0.18_145)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </BrowserFrame>

      {/* extension popup */}
      <div className="mt-4 w-full border border-border bg-background p-4 sm:w-72 lg:absolute lg:right-0 lg:top-10 lg:mt-0 lg:w-[19%]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center bg-[oklch(0.65_0.18_145)] text-xs font-bold text-white">
            F
          </span>
          <span className="text-sm font-semibold">Formly</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-[oklch(0.65_0.18_145)]" />
        </div>
        <div className="mt-3 border border-border bg-card px-3 py-2 text-xs">
          <div className="font-medium">Martin Dupont</div>
          <div className="text-muted-foreground">Prêt immobilier · 245 000 €</div>
        </div>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="mt-3 h-9 w-full bg-[oklch(0.65_0.18_145)] text-xs font-semibold text-white"
        >
          Remplir le formulaire
        </button>
      </div>
    </div>
  )
}
