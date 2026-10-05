import { automations } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Automations() {
  return (
    <section id="automatisations" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="automatisations-title">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              id="automatisations-title"
              index="01"
              eyebrow="Ce que j'automatise"
              title={
                <>
                  Des tâches ennuyeuses, <em>bien faites</em>, sans surveillance permanente.
                </>
              }
              description="Chaque ligne est une automatisation que j'ai déjà mise en place, avec le projet où elle tourne. Elles se combinent : un document lu met à jour un outil, qui prévient la bonne personne."
            />
            <Reveal delay={120} className="mt-8 text-sm leading-relaxed text-muted-foreground">
              <p>Avec les outils que vous avez déjà : votre messagerie, votre CRM, vos fichiers, vos portails métier.</p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-12 border-t border-foreground lg:col-span-7 lg:mt-0">
          {automations.map((a, i) => (
            <Reveal key={a.id} as="li" delay={Math.min(i, 3) * 60} className="group border-b border-border py-7 sm:py-8">
              <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl leading-tight sm:text-[1.75rem]">{a.title}</h3>
                  <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">{a.description}</p>
                  <dl className="mt-4 grid gap-1 text-sm sm:grid-cols-[6rem_1fr]">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Livré dans</dt>
                    <dd>
                      <span className="text-foreground">{a.usedIn}</span>
                      <span className="text-muted-foreground"> — {a.proof}</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
