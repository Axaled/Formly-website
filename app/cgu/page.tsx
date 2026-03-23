import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"

export const metadata = {
  title: "Conditions Générales d'Utilisation - Formly",
  description: "Conditions générales d'utilisation de Formly.",
}

export default function CGUPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Conditions Générales d&apos;Utilisation</h1>
          
          <div className="prose prose-lg text-muted-foreground">
            <p className="lead">
              Les présentes conditions générales régissent l&apos;utilisation des services Formly. 
              En utilisant nos services, vous acceptez ces conditions.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 1 - Objet</h2>
            <p>
              Les présentes conditions ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation 
              des services Formly proposés aux professionnels du courtage en assurance.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 2 - Accès aux services</h2>
            <p>
              L&apos;accès aux services Formly nécessite une inscription préalable. L&apos;utilisateur s&apos;engage 
              à fournir des informations exactes et à maintenir la confidentialité de ses identifiants.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 3 - Description des services</h2>
            <p>
              Formly propose une extension navigateur permettant le pré-remplissage automatique 
              des formulaires sur les portails des compagnies d&apos;assurance partenaires.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 4 - Responsabilités</h2>
            <p>
              L&apos;utilisateur est responsable de l&apos;exactitude des données qu&apos;il saisit dans Formly. 
              Formly ne peut être tenu responsable des erreurs liées à des données incorrectes.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 5 - Propriété intellectuelle</h2>
            <p>
              Tous les éléments de Formly (logiciel, design, contenus) sont la propriété exclusive 
              de Formly SAS et sont protégés par le droit de la propriété intellectuelle.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 6 - Résiliation</h2>
            <p>
              L&apos;utilisateur peut résilier son abonnement à tout moment. Formly se réserve le droit 
              de suspendre ou résilier un compte en cas de non-respect des présentes conditions.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Article 7 - Droit applicable</h2>
            <p>
              Les présentes conditions sont soumises au droit français. Tout litige sera porté 
              devant les tribunaux compétents de Paris.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
