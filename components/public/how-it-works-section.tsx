"use client"

import { ClipboardList, MousePointerClick, Sparkles, ArrowRight, Settings } from "lucide-react"
import { useScrollAnimation, getStaggerDelay } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Enregistrez-vous une fois",
    description: "Nous configurons Formly avec chaque portail assureur. Une fois fait, ça fonctionne automatiquement pour tous vos clients.",
    icon: Settings,
    details: ["Configuration initiale par nos équipes", "Compatible avec 50+ portails", "Aucune maintenance requise"],
  },
  {
    number: "02", 
    title: "Créez vos profils clients",
    description: "Saisissez les informations de vos clients sur l'Extranet Formly. Toutes les données sont centralisées et sécurisées.",
    icon: ClipboardList,
    details: ["État civil complet", "Véhicule et permis", "Antécédents et bonus", "Besoins spécifiques"],
  },
  {
    number: "03",
    title: "Remplissage magique",
    description: "Sur n'importe quel portail assureur, activez l'extension et laissez Formly remplir tous les champs automatiquement.",
    icon: Sparkles,
    details: ["Extension Chrome simple", "Détection automatique", "Gain de temps de 85%", "Zéro erreur de saisie"],
  },
]

export function HowItWorksSection() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>()
  const [stepsRef, stepsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Comment ça marche</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simple. Rapide. Efficace.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un processus en trois étapes pour automatiser toutes vos saisies
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connection line */}
          <div className={`absolute top-24 left-1/2 -translate-x-1/2 hidden lg:block transition-all duration-1000 ${
            stepsVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-border to-border" />
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="h-px w-48 bg-border" />
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="h-px w-48 bg-gradient-to-r from-border via-border to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group transition-all duration-700 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: getStaggerDelay(index, 200) }}
              >
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg group-hover:shadow-primary/25">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
