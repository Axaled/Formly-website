"use client"

import { CheckCircle } from "lucide-react"
import { useScrollAnimation, getStaggerDelay } from "@/hooks/use-scroll-animation"

const compatibleInsurers = [
  "AXA", "Allianz", "MAIF", "MAAF", "Groupama", 
  "MMA", "Generali", "Aviva", "SwissLife", "AG2R",
  "Covéa", "Macif", "Matmut", "GMF", "Pacifica"
]

export function FeaturesSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Compatible insurers - Main focus */}
        <div 
          ref={sectionRef}
          className={`rounded-3xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 lg:p-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Compatibilité</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Compatible avec plus de 50 assureurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Formly fonctionne avec les principaux portails assureurs du marché français
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {compatibleInsurers.map((insurer, index) => (
              <div
                key={insurer}
                className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: getStaggerDelay(index, 50) }}
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                {insurer}
              </div>
            ))}
            <div 
              className={`inline-flex items-center gap-2 rounded-full border border-dashed border-primary/50 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: getStaggerDelay(compatibleInsurers.length, 50) }}
            >
              + 35 autres
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
