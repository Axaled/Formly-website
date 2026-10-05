import { projects } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { FormlyVisual, ShowroomVisual, VerrouVisual } from "./project-visuals"

const visuals = {
  verrou: VerrouVisual,
  showroom: ShowroomVisual,
  formly: FormlyVisual,
}

export function Work() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="realisations-title">
      <SectionHeading
        index="02"
        eyebrow="Développement web & design"
        title={
          <>
            Trois produits, du premier croquis à la <em>mise en ligne</em>.
          </>
        }
        description="Un SaaS fiscal piloté par des agents, un showroom 3D et une extension Chrome. Trois contextes, la même exigence sur l'interface et la fiabilité."
      />

      <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-36">
        {projects.map((p, i) => {
          const Visual = visuals[p.id]
          return (
            <article key={p.id} id={`projet-${p.id}`} className="scroll-mt-20" aria-labelledby={`projet-${p.id}-title`}>
              <Reveal>
                <Visual />
              </Reveal>

              <div className="mt-8 grid gap-8 border-t border-border pt-6 lg:grid-cols-12 lg:gap-10">
                <Reveal delay={60} className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="text-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.kicker}</span>
                    <span className="ml-auto">{p.year}</span>
                  </div>
                  <h3 id={`projet-${p.id}-title`} className="font-display mt-4 text-4xl leading-none sm:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-pretty text-lg leading-snug">{p.summary}</p>
                  {p.links.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                      {p.links.map((l) => (
                        <li key={l.href}>
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="pf-link">
                            {l.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>

                <Reveal delay={120} className="lg:col-span-4">
                  <dl className="space-y-5 text-sm leading-relaxed">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Le problème</dt>
                      <dd className="mt-1.5">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Ce que j&apos;ai construit</dt>
                      <dd className="mt-1.5">{p.solution}</dd>
                    </div>
                  </dl>
                </Reveal>

                <Reveal delay={180} className="lg:col-span-4">
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">En chiffres et en faits</h4>
                  <ul className="mt-1.5 divide-y divide-border border-b border-border text-sm">
                    {p.facts.map((f) => (
                      <li key={f} className="py-2.5 leading-snug">{f}</li>
                    ))}
                  </ul>
                  <h4 className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Technologies</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.stack.join(", ")}.</p>
                </Reveal>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
