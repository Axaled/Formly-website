import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Automations } from "@/components/portfolio/automations"
import { Work } from "@/components/portfolio/work"
import { Process } from "@/components/portfolio/process"
import { About } from "@/components/portfolio/about"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function HomePage() {
  return (
    <div data-portfolio className="relative min-h-screen overflow-x-clip">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="contenu">
        <Hero />
        <Automations />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
