import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"

export const metadata = {
  title: "Mentions légales - Formly",
  description: "Mentions légales de Formly.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Éditeur du site</h2>
            <p>
              Formly SAS<br />
              Capital social : 10 000 euros<br />
              RCS Paris B 123 456 789<br />
              Siège social : 123 Avenue de la République, 75011 Paris<br />
              Téléphone : 01 23 45 67 89<br />
              Email : contact@formly.fr
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Directeur de la publication</h2>
            <p>
              [Nom du directeur de publication]<br />
              Président de Formly SAS
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur le site Formly (textes, images, logos, vidéos, etc.) 
              sont protégés par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite 
              sans autorisation préalable.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
              d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. 
              Pour exercer ce droit, contactez-nous à privacy@formly.fr.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
