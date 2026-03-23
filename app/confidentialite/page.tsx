import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"

export const metadata = {
  title: "Politique de confidentialité - Formly",
  description: "Politique de confidentialité et protection des données de Formly.",
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg text-muted-foreground">
            <p className="lead">
              Chez Formly, la protection de vos données personnelles est une priorité. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Données collectées</h2>
            <p>
              Nous collectons les données que vous nous fournissez lors de l&apos;inscription :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Nom du cabinet</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul>
              <li>Vous fournir nos services</li>
              <li>Vous contacter concernant votre compte</li>
              <li>Améliorer nos services</li>
              <li>Vous envoyer des informations importantes (avec votre consentement)</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Protection des données</h2>
            <p>
              Toutes les données sont chiffrées en transit (SSL/TLS) et au repos. 
              Nos serveurs sont hébergés en Europe et conformes aux normes les plus strictes de sécurité.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Vos droits</h2>
            <p>
              Conformément au RGPD, vous avez le droit de :
            </p>
            <ul>
              <li>Accéder à vos données</li>
              <li>Rectifier vos données</li>
              <li>Supprimer vos données</li>
              <li>Exporter vos données</li>
              <li>Retirer votre consentement</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
            <p>
              Pour toute question relative à vos données personnelles, contactez notre DPO à privacy@formly.fr.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
