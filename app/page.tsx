import { HeroSection } from "@/components/home/hero-section"
import { ValuePillars } from "@/components/home/value-pillars"
import { SiteFeaturesShowcase } from "@/components/site-features-showcase"
import { HowItWorksSection } from "@/components/home/how-it-works"
import { PricingSnapshot } from "@/components/home/pricing-snapshot"
import { CTASection } from "@/components/home/cta-section"
import { InlineContactForm } from "@/components/inline-contact-form"
import { FAQBanner } from "@/components/faq-banner"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <div className="w-full">
        <ValuePillars />
        <SiteFeaturesShowcase />
        <HowItWorksSection />
        <PricingSnapshot />
        <CTASection />
        <InlineContactForm />
      </div>
      <FAQBanner />
    </div>
  )
}
