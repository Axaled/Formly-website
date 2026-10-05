import Image from "next/image"
import { profile } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24 lg:pt-28" aria-labelledby="hero-title">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {profile.firstName} {profile.lastName} · {profile.role} · {profile.location}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1 id="hero-title" className="font-display mt-8 max-w-5xl text-balance text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
          J&apos;automatise ce qui fait perdre du temps aux PME, et je dessine les outils qui vont avec.
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:mt-14 lg:grid-cols-12">
        <Reveal delay={160} className="lg:col-span-5">
          <p className="max-w-md text-pretty text-lg leading-relaxed">
            Lecture de documents, assistants, saisie automatique, dossiers préparés par des agents. Des automatisations
            branchées sur vos outils, et des produits web conçus de l&apos;interface jusqu&apos;à la base de données.
          </p>
        </Reveal>
        <Reveal delay={220} className="lg:col-span-4 lg:col-start-7">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Cœur d&apos;activité</dt>
              <dd className="mt-1">
                <a href="#automatisations" className="pf-link">Automatisations IA pour PME</a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Également</dt>
              <dd className="mt-1">
                <a href="#realisations" className="pf-link">Développement web & design</a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Disponibilité</dt>
              <dd className="mt-1">{profile.availability}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Contact</dt>
              <dd className="mt-1">
                <a href={`mailto:${profile.email}`} className="pf-link break-all">{profile.email}</a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* Featured work */}
      <Reveal delay={260} className="mt-16 sm:mt-24">
        <a href="#projet-verrou" className="group block">
          <div className="overflow-hidden border border-border bg-card">
            <Image
              src="/work/verrou-app.webp"
              alt="Verrou : vue d'ensemble d'un exercice fiscal, avec les quatre étapes du dossier, le crédit estimé et la prochaine action."
              width={1600}
              height={1000}
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm">
            <span>
              <span className="font-medium">Verrou</span>
              <span className="text-muted-foreground"> · SaaS fiscal piloté par des agents IA, 2026</span>
            </span>
            <span className="pf-link text-muted-foreground group-hover:text-foreground">Lire l&apos;étude de cas ↓</span>
          </div>
        </a>
      </Reveal>
    </section>
  )
}
