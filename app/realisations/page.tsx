import type { Metadata } from "next"
import { Nav } from "@/components/portfolio/nav"
import { Work } from "@/components/portfolio/work"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Trois projets livrés : un site et une application pour le crédit d'impôt recherche, un showroom automobile en 3D et une extension Chrome pour les courtiers.",
  alternates: { canonical: "/realisations" },
}

export default function RealisationsPage() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="contenu">
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
