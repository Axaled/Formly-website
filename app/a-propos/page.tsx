import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { Users, Target, Shield, Zap } from "lucide-react"

export const metadata = {
  title: "À propos - Formly",
  description: "Découvrez l'équipe derrière Formly et notre mission d'aider les courtiers en assurance.",
}

const values = [
  {
    icon: Zap,
    title: "Efficacité",
    description: "Nous croyons que les courtiers méritent des outils qui leur font gagner du temps, pas qui leur en font perdre.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "La protection des données de vos clients est notre priorité absolue. Conformité RGPD garantie.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Nous travaillons main dans la main avec nos utilisateurs pour améliorer continuellement notre solution.",
  },
  {
    icon: Target,
    title: "Simplicité",
    description: "Une interface intuitive qui ne nécessite aucune formation. Installez et commencez immédiatement.",
  },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Notre mission : simplifier le quotidien des courtiers
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Formly est né d&apos;un constat simple : les courtiers en assurance passent trop de temps 
                à ressaisir les mêmes informations sur différents portails. Nous avons décidé de changer ça.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">Notre histoire</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Fondé par des passionnés de technologie et des experts du secteur de l&apos;assurance, 
                  Formly combine le meilleur des deux mondes pour créer une solution vraiment adaptée 
                  aux besoins des courtiers.
                </p>
                <p>
                  Après avoir passé des mois à observer le travail quotidien des cabinets de courtage, 
                  nous avons identifié un problème majeur : la saisie répétitive des données clients 
                  sur les portails assureurs.
                </p>
                <p>
                  Aujourd&apos;hui, Formly accompagne les cabinets de courtage pour gagner en moyenne 85% de temps 
                  sur leurs saisies de formulaires. Et ce n&apos;est que le début.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nos valeurs</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ce qui guide notre travail au quotidien
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
