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

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
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
              <Link href="/demo">
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

          {/* Trust indicator - simplified, no avatars */}
          <div className="mt-10 flex items-center justify-center gap-3 text-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-4 w-4 text-primary fill-primary" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">+500 cabinets</span> nous font confiance
            </span>
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
