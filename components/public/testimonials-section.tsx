"use client"

import { Star } from "lucide-react"
import { useScrollAnimation, getStaggerDelay } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    content: "Formly a transformé notre façon de travailler. On économise facilement 2 heures par jour sur les saisies répétitives.",
    author: "Marie Lefort",
    role: "Dirigeante",
    company: "Cabinet Lefort Assurances",
    rating: 5,
  },
  {
    content: "L'installation a pris 2 minutes. Dès le premier jour, mes collaborateurs ont adopté l'outil. Le gain de temps est impressionnant.",
    author: "Philippe Martin",
    role: "Gérant",
    company: "Martin & Associés",
    rating: 5,
  },
  {
    content: "Enfin une solution qui comprend notre métier. Plus d'erreurs de saisie, plus de copier-coller. C'est magique.",
    author: "Sophie Durand",
    role: "Courtier",
    company: "Durand Conseil",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>()
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Témoignages</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez ce que disent nos utilisateurs de Formly
          </p>
        </div>

        {/* Testimonials grid */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: getStaggerDelay(index, 150) }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
