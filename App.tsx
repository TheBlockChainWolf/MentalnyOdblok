import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ProblemCards from './components/ProblemCards';
import AgitationSection from './components/AgitationSection';
import VideoSection from './components/VideoSection';
import ModulesGrid from './components/ModulesGrid';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-yellow selection:text-black">
      <TopBar />
      <main className="flex flex-col gap-8 md:gap-16">
        <Hero />
        <ProblemCards />
        <AgitationSection />
        <VideoSection />
        <ModulesGrid />
        <HowItWorks />
        <PricingSection />
      </main>
      <Footer 
        onOpenTerms={() => setIsTermsOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />
    </div>
  );
};

export default App;