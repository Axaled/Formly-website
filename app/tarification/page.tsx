import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { Button } from "@/components/ui/button"
import { Construction, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Tarification - Formly",
  description: "Découvrez nos offres et tarifs pour Formly.",
}

export default function TarificationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1 flex items-center justify-center">
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* Icon */}
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
                <Construction className="h-10 w-10 text-primary" />
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Page en construction
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Notre grille tarifaire est en cours de finalisation. Contactez-nous dès maintenant
                pour obtenir un devis personnalisé adapté à la taille de votre cabinet.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-lg shadow-primary/25">
                  <Link href="mailto:contact@formly.fr">
                    <Mail className="mr-2 h-5 w-5" />
                    Nous contacter
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="px-8 h-14 text-base border-2">
                  <Link href="/demo">
                    Voir la démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Info box */}
              <div className="mt-12 rounded-2xl border border-border bg-secondary/30 p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">En attendant</h3>
                <p className="text-muted-foreground text-sm">
                  Vous pouvez <Link href="https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">télécharger l&apos;extension</Link> et commencer à l&apos;utiliser.
                  Nous vous contacterons pour discuter des options qui correspondent le mieux à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
