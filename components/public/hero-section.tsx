"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Clock, MousePointerClick, Sparkles, CheckCircle } from "lucide-react"
import { useScrollAnimation, getStaggerDelay } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "85%", label: "de temps gagné", icon: Clock },
  { value: "1 clic", label: "pour remplir", icon: MousePointerClick },
  { value: "50+", label: "assureurs compatibles", icon: Sparkles },
]

const benefits = [
  "Enregistrez vos clients une seule fois",
  "Remplissage automatique sur tous les portails",
  "Configuration initiale avec chaque assureur",
]

export function HeroSection() {
  const [statsRef, statsVisible] = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge - animate in */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Extension Chrome</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Pré-remplissez vos formulaires{" "}
            <span className="text-primary">en un clic</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Formly automatise la saisie des formulaires de tarification sur les portails assureurs. 
            Créez un profil client une seule fois, utilisez-le partout.
          </p>

          {/* Benefits list */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                className="flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2"
                style={{ animationDelay: getStaggerDelay(index, 50) }}
              >
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
              <Link href="https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Télécharger pour Chrome
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 h-14 text-base border-2 transition-all hover:-translate-y-0.5">
              <Link href="/demo#demo">
                Voir la démo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>


        </div>

        {/* Stats - with scroll animation */}
        <div 
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-28"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-700 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 group ${
                statsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: getStaggerDelay(index, 150) }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <stat.icon className="mx-auto h-10 w-10 text-primary mb-4" />
              <div className="text-5xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-2 text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
