"use client"

import { useState } from "react"
import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Contactez-nous
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Une question ? Une demande de démo ? Notre équipe est là pour vous aider.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form & info */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">contact@formly.fr</p>
                      <p className="text-muted-foreground">support@formly.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Téléphone</h3>
                      <p className="text-muted-foreground">01 23 45 67 89</p>
                      <p className="text-sm text-muted-foreground">Du lundi au vendredi, 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">123 Avenue de la République</p>
                      <p className="text-muted-foreground">75011 Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="rounded-2xl border border-border bg-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message envoyé</h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          Prénom
                        </label>
                        <Input id="firstName" required placeholder="Jean" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Nom
                        </label>
                        <Input id="lastName" required placeholder="Dupont" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" required placeholder="jean.dupont@cabinet.fr" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Cabinet
                      </label>
                      <Input id="company" placeholder="Nom de votre cabinet" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Comment pouvons-nous vous aider ?"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 shadow-lg shadow-primary/25">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
