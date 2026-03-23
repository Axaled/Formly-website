import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Chrome, UserPlus, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Documentation - Formly",
  description: "Documentation complète pour utiliser Formly.",
}

const guides = [
  {
    icon: Chrome,
    title: "Guide de démarrage",
    description: "Installez l'extension et créez votre premier profil client en moins de 5 minutes.",
    steps: [
      <Link key="step-1" href="https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-primary/30">Téléchargez l&apos;extension depuis le Chrome Web Store</Link>,
      "Connectez-vous avec vos identifiants Formly",
      "Créez votre premier profil client",
      "Rendez-vous sur un portail assureur et cliquez sur 'Remplir'",
    ],
  },
  {
    icon: UserPlus,
    title: "Gestion des profils",
    description: "Apprenez à créer, modifier et organiser vos profils clients efficacement.",
    steps: [
      "Accédez à l'Extranet Formly",
      "Cliquez sur 'Nouveau profil'",
      "Remplissez les informations du client",
      "Enregistrez et utilisez le profil sur n'importe quel portail",
    ],
  },
  {
    icon: FileText,
    title: "Utilisation quotidienne",
    description: "Découvrez comment utiliser Formly au quotidien pour maximiser votre productivité.",
    steps: [
      "Sélectionnez le profil client dans l'extension",
      "Naviguez vers le formulaire de l'assureur",
      "Cliquez sur le bouton Formly pour remplir automatiquement",
      "Vérifiez les données et soumettez le formulaire",
    ],
  },
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Documentation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Tout ce que vous devez savoir pour tirer le meilleur parti de Formly
              </p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-12">
              {guides.map((guide, index) => (
                <div key={guide.title} className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <guide.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                          Guide {index + 1}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3">{guide.title}</h2>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="rounded-xl bg-secondary/50 p-6">
                        <h3 className="font-semibold text-foreground mb-4">Étapes</h3>
                        <ol className="space-y-3">
                          {guide.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                                {stepIndex + 1}
                              </span>
                              <span className="text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Prêt à commencer ?</h2>
              <p className="text-muted-foreground mb-8">
                Téléchargez l&apos;extension et commencez à gagner du temps dès aujourd&apos;hui.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 h-14 px-8">
                <Link href="https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr" target="_blank" rel="noopener noreferrer">
                  Télécharger l&apos;extension
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
