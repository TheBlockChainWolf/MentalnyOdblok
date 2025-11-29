"use client"

import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import ModulesDetailedSection from "@/components/modules-detailed-section"
import TrustBadgesSection from "@/components/trust-badges-section"
import FinalCtaSection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import CookieConsentBanner from "@/components/cookie-consent-banner"
import UrgentHeader from "@/components/urgent-header"
import StickyMobileFooter from "@/components/sticky-mobile-footer"

export default function Home() {
  return (
    <>
      <UrgentHeader />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ModulesDetailedSection />
        <TrustBadgesSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieConsentBanner />
      <StickyMobileFooter />
    </>
  )
}
