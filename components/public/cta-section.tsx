"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react"
import { useScrollAnimation, getStaggerDelay } from "@/hooks/use-scroll-animation"

const trustPoints = [
  { icon: Shield, text: "Données sécurisées RGPD" },
  { icon: Clock, text: "Installation en 30 secondes" },
  { icon: CheckCircle, text: "50+ assureurs compatibles" },
]

export function CTASection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Essai gratuit
          </div>

          {/* Headline */}
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Prêt à gagner 85% de temps sur vos saisies ?
          </h2>

          {/* Subheadline */}
          <p className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Rejoignez plus de 500 cabinets de courtage qui utilisent déjà Formly pour automatiser 
            leurs formulaires d&apos;assurance.
          </p>

          {/* CTAs */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5">
              <Link href="/demo">
                <Download className="mr-2 h-5 w-5" />
                Télécharger gratuitement
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 h-14 text-base border-2 transition-all hover:-translate-y-0.5">
              <Link href="/demo#demo">
                Voir la démo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust points */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {trustPoints.map((point, index) => (
              <div 
                key={point.text} 
                className="flex items-center gap-2 text-muted-foreground"
                style={{ transitionDelay: getStaggerDelay(index + 4, 100) }}
              >
                <point.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
