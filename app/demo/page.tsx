import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { DemoAnimation } from "@/components/public/demo-animation"
import { Button } from "@/components/ui/button"
import { Download, Chrome, CheckCircle, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Démo Interactive - Formly",
  description: "Essayez Formly en direct et découvrez comment automatiser vos formulaires d'assurance.",
}

const downloadFeatures = [
  { icon: Zap, text: "Installation en 30 secondes" },
  { icon: Shield, text: "100% sécurisé" },
  { icon: Clock, text: "Mises à jour automatiques" },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Démo interactive
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Découvrez Formly en action : voyez comment vos données sont synchronisées en temps réel sur plusieurs portails assureurs
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="demo" className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <DemoAnimation />
          </div>
        </section>

        {/* Download section */}
        <section id="download" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Télécharger l&apos;extension
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Disponible exclusivement sur Google Chrome. Installation rapide et gratuite.
              </p>
            </div>

            {/* Chrome download card */}
            <div className="max-w-lg mx-auto">
              <div className="rounded-3xl border border-border bg-card p-10 text-center transition-smooth hover:shadow-2xl hover:border-primary/30">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-8">
                  <Chrome className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Google Chrome</h3>
                <p className="text-muted-foreground mb-8">
                  Extension officielle disponible sur le Chrome Web Store
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {downloadFeatures.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <feature.icon className="h-4 w-4 text-primary" />
                      {feature.text}
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-base shadow-lg shadow-primary/25">
                  <Link href="#">
                    <Download className="mr-2 h-5 w-5" />
                    Installer pour Chrome
                  </Link>
                </Button>

                {/* Trust badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Gratuit
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Sans pub
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    RGPD
                  </div>
                </div>
              </div>
            </div>

            {/* Note about Firefox */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Note : L&apos;extension n&apos;est actuellement pas disponible sur Firefox ou d&apos;autres navigateurs.
            </p>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
