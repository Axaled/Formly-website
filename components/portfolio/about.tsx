import { about, profile, stack } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="a-propos-title">
      <SectionHeading index="04" eyebrow="À propos" title={<>{profile.firstName} {profile.lastName}, {profile.role.toLowerCase()}.</>} />
      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <Reveal delay={100} className="space-y-5 text-pretty text-lg leading-relaxed lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={160} className="lg:col-span-4 lg:col-start-9">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Outils du quotidien</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{stack.join(", ")}.</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Où</dt>
              <dd className="mt-2">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Ailleurs</dt>
              <dd className="mt-2 flex flex-wrap gap-x-5">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pf-link">GitHub ↗</a>
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="pf-link">LinkedIn ↗</a>
                ) : null}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
