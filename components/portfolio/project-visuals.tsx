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

/* ---------- Showroom: real captures of the deployed app ---------- */
export function ShowroomVisual() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <BrowserFrame url="axaled.github.io/Car-showroom">
        <Image
          src="/work/showroom-main.webp"
          alt="Showroom Mercedes 3D : une EQS argent de profil sur la scène sombre, avec l'assistant conversationnel et ses raccourcis à droite."
          width={1440}
          height={900}
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 680px, 100vw"
        />
      </BrowserFrame>
      <BrowserFrame url="vue intérieure">
          <Image
            src="/work/showroom-interior.webp"
            alt="Vue intérieure de l'EQS : volant, écran Hyperscreen et écrans arrière, depuis la banquette."
            width={1440}
            height={900}
            className="block h-auto w-full"
            sizes="(min-width: 1024px) 420px, 100vw"
          />
      </BrowserFrame>
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

const FORMLY_STORE_URL = "https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr"

export function FormlyVisual() {
  return (
    <a
      href={FORMLY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Formly sur le Chrome Web Store"
      className="group relative block"
    >
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
      <span className="pf-link absolute bottom-0 right-0 hidden text-sm text-muted-foreground group-hover:text-foreground lg:inline">
        Installer depuis le Chrome Web Store ↗
      </span>
    </a>
  )
}
