import { profile } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Projet d'automatisation")}`
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-14 px-5 pb-28 pt-8 sm:px-8 sm:pb-36" aria-labelledby="contact-title">
      <Reveal className="border-t border-foreground pt-5">
        <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="text-foreground">05</span>
          <span>Contact</span>
        </div>
        <h2 id="contact-title" className="font-display mt-6 max-w-4xl text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
          Dites-moi ce qui vous prend du temps. On regarde ensemble ce qui peut être <em>automatisé</em>.
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Un premier échange de trente minutes, sans engagement, pour cadrer le besoin et estimer ce que ça rapporte.
        </p>
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <a
          href={mailto}
          className="pf-link font-display inline-block break-all text-2xl leading-tight sm:text-4xl lg:text-5xl"
        >
          {profile.email}
        </a>
        <p className="mt-5 text-sm text-muted-foreground">
          Ou sur{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pf-link text-foreground">
            GitHub
          </a>
          , où le code du showroom est public.
        </p>
      </Reveal>
    </section>
  )
}
