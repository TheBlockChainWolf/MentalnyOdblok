"use client"

import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import BenefitsSection from "@/components/benefits-section"
import FinalCtaSection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import CookieConsentBanner from "@/components/cookie-consent-banner"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieConsentBanner />
    </>
  )
}
