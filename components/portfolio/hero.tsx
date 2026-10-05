import { hero, profile } from "@/lib/portfolio"
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
        <h1 id="hero-title" className="font-display mt-8 max-w-4xl text-balance text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
          {hero.title}
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed sm:text-xl">{hero.lede}</p>
      </Reveal>

      <Reveal delay={220} className="mt-12 border-t border-border pt-8 sm:mt-16">
        <dl className="grid gap-8 sm:grid-cols-3">
          {hero.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{f.label}</dt>
              <dd className="mt-2 text-pretty leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
