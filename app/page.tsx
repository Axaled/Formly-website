import type { Metadata } from "next"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Automations } from "@/components/portfolio/automations"
import { Process } from "@/components/portfolio/process"
import { ProjectsTeaser } from "@/components/portfolio/projects-teaser"
import { About } from "@/components/portfolio/about"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export const metadata: Metadata = { alternates: { canonical: "/" } }

export default function HomePage() {
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
        <Hero />
        <Automations />
        <Process />
        <ProjectsTeaser />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
