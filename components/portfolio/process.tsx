import { process } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Process() {
  return (
    <section id="methode" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="methode-title">
      <SectionHeading
        index="03"
        eyebrow="Méthode"
        title={
          <>
            Petit, concret, mesurable. <em>Puis on élargit.</em>
          </>
        }
        description="Pas de projet de six mois avant de voir un résultat. On commence par un flux qui tourne sur vos vraies données, on mesure, on étend."
      />
      <ol className="mt-14 grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
        {process.map((s, i) => (
          <Reveal
            key={s.step}
            as="li"
            delay={i * 80}
            className="border-b border-border py-6 sm:pr-8 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(n+2)]:pl-8"
          >
            <div className="flex items-baseline justify-between font-mono text-xs">
              <span>{s.step}</span>
              <span className="uppercase tracking-[0.14em] text-muted-foreground">{s.duration}</span>
            </div>
            <h3 className="font-display mt-10 text-3xl leading-none">{s.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
