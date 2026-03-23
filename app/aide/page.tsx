import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { Button } from "@/components/ui/button"
import { Download, Settings, Users, Shield, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Centre d'aide - Formly",
  description: "Trouvez des réponses à vos questions sur Formly.",
}

const categories = [
  {
    icon: Download,
    title: "Installation",
    description: "Comment installer et configurer l'extension Formly",
    articles: [
      "Comment installer l'extension Chrome",
      "Configurer mon compte après l'installation",
      "Mettre à jour l'extension",
    ],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Paramètres et personnalisation de votre espace",
    articles: [
      "Créer mon premier profil client",
      "Importer des données existantes",
      "Personnaliser les champs",
    ],
  },
  {
    icon: Users,
    title: "Gestion d'équipe",
    description: "Gérer les utilisateurs de votre cabinet",
    articles: [
      "Inviter un collaborateur",
      "Gérer les droits d'accès",
      "Transférer un profil client",
    ],
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Protection des données et conformité",
    articles: [
      "Comment vos données sont protégées",
      "Exporter mes données",
      "Supprimer mon compte",
    ],
  },
]

const faqs = [
  {
    question: "L'extension fonctionne-t-elle sur Firefox ?",
    answer: "Non, actuellement l'extension Formly n'est disponible que sur Google Chrome. Nous travaillons sur une version pour d'autres navigateurs.",
  },
  {
    question: "Comment ajouter un nouvel assureur ?",
    answer: "Vous n'avez rien à faire ! Une fois Formly configuré avec un portail assureur, il fonctionne automatiquement. Si un assureur n'est pas supporté, contactez-nous.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui, toutes les données sont chiffrées de bout en bout et stockées en France. Nous sommes conformes au RGPD.",
  },
  {
    question: "Puis-je utiliser Formly sur plusieurs ordinateurs ?",
    answer: "Oui, vous pouvez installer l'extension sur autant d'ordinateurs que vous le souhaitez avec votre compte.",
  },
]

export default function AidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Centre d&apos;aide
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Trouvez rapidement des réponses à vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-smooth hover:border-primary/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Link href="#" className="text-sm text-primary hover:underline">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-secondary/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Questions fréquentes</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-muted-foreground pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-primary/5 border border-primary/20 p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vous ne trouvez pas la réponse ?</h2>
              <p className="text-muted-foreground mb-8">
                Notre équipe support est disponible pour vous aider du lundi au vendredi, de 9h à 18h.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactez-nous
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
