import Link from "next/link"
import { projects } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function ProjectsTeaser() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="realisations-title">
      <SectionHeading
        id="realisations-title"
        index="03"
        eyebrow="Réalisations"
        title={
          <>
            Trois exemples de ce que ça <em>donne</em>.
          </>
        }
        description="Des projets livrés, avec le problème de départ, ce qui a été construit et ce que l'on peut en mesurer."
      />
      <ol className="mt-12 border-t border-foreground">
        {projects.map((p, i) => (
          <Reveal key={p.id} as="li" delay={i * 70} className="border-b border-border">
            <Link
              href={`/realisations#projet-${p.id}`}
              className="group grid gap-2 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="font-display text-2xl leading-tight sm:text-3xl">{p.name}</span>
                <span className="mt-1 block text-pretty text-muted-foreground">{p.summary}</span>
              </span>
              <span className="pf-link text-sm text-muted-foreground group-hover:text-foreground">Lire →</span>
            </Link>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={240} className="mt-8">
        <Link href="/realisations" className="pf-link text-sm">
          Toutes les réalisations en détail →
        </Link>
      </Reveal>
    </section>
  )
}
