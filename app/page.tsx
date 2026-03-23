import { PublicHeader } from "@/components/public/header"
import { PublicFooter } from "@/components/public/footer"
import { HeroSection } from "@/components/public/hero-section"
import { HowItWorksSection } from "@/components/public/how-it-works-section"
import { FeaturesSection } from "@/components/public/features-section"
import { TestimonialsSection } from "@/components/public/testimonials-section"
import { CTASection } from "@/components/public/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <PublicFooter />
    </div>
  )
}
