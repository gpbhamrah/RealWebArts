import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedBy } from './components/TrustedBy';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PerformanceBenchmark } from './components/PerformanceBenchmark';
import { CostCalculator } from './components/CostCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SeoLegalModal } from './components/SeoLegalModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { NavigationPage, ProjectCaseStudy } from './types';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/siteData';

export default function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'sitemap' | null>(null);

  // Pre-filled contact form state
  const [contactPrefill, setContactPrefill] = useState<{
    service: string;
    budget: string;
    timeline: string;
    message: string;
  }>({
    service: 'Website Design & UI/UX',
    budget: '$1,500 - $3,000',
    timeline: 'Within 1 Month',
    message: '',
  });

  const handleNavigate = (page: NavigationPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      service: serviceTitle,
      message: `I would like to request a detailed proposal for ${serviceTitle}.`,
    }));
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedFromEstimator = (estimate: {
    service: string;
    budget: string;
    timeline: string;
    details: string;
  }) => {
    setContactPrefill({
      service: estimate.service,
      budget: estimate.budget,
      timeline: estimate.timeline,
      message: `Estimator Scope: ${estimate.details}`,
    });
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCaseStudyStart = (category: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      service: category,
      message: `I reviewed your ${category} case study and want to build a similar high-performance solution.`,
    }));
    setSelectedCaseStudy(null);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500 selection:text-black flex flex-col font-sans">
      {/* Sticky Glass Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenEstimator={() => handleNavigate('estimator')}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Full Home Experience or Individual Focused Page Views */}
        {activePage === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenEstimator={() => handleNavigate('estimator')}
            />
            <TrustedBy />
            <ServicesSection onSelectService={handleSelectService} />
            <PerformanceBenchmark />
            <PortfolioSection onSelectCaseStudy={setSelectedCaseStudy} />
            <ProcessSection onStartProject={() => handleNavigate('contact')} />
            <CostCalculator onProceedToContact={handleProceedFromEstimator} />
            <TestimonialsSection />
            <AboutSection onStartProject={() => handleNavigate('contact')} />
            <FaqSection onAskQuestion={() => handleNavigate('contact')} />
            <ContactSection
              initialService={contactPrefill.service}
              initialBudget={contactPrefill.budget}
              initialTimeline={contactPrefill.timeline}
              initialMessage={contactPrefill.message}
            />
          </>
        )}

        {activePage === 'services' && (
          <div className="pt-24">
            <ServicesSection onSelectService={handleSelectService} />
            <PerformanceBenchmark />
            <CostCalculator onProceedToContact={handleProceedFromEstimator} />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="pt-24">
            <PortfolioSection onSelectCaseStudy={setSelectedCaseStudy} />
            <TestimonialsSection />
          </div>
        )}

        {activePage === 'process' && (
          <div className="pt-24">
            <ProcessSection onStartProject={() => handleNavigate('contact')} />
            <PerformanceBenchmark />
          </div>
        )}

        {activePage === 'estimator' && (
          <div className="pt-24">
            <CostCalculator onProceedToContact={handleProceedFromEstimator} />
            <FaqSection onAskQuestion={() => handleNavigate('contact')} />
          </div>
        )}

        {activePage === 'reviews' && (
          <div className="pt-24">
            <TestimonialsSection />
            <TrustedBy />
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-24">
            <AboutSection onStartProject={() => handleNavigate('contact')} />
            <TrustedBy />
          </div>
        )}

        {activePage === 'faq' && (
          <div className="pt-24">
            <FaqSection onAskQuestion={() => handleNavigate('contact')} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-24">
            <ContactSection
              initialService={contactPrefill.service}
              initialBudget={contactPrefill.budget}
              initialTimeline={contactPrefill.timeline}
              initialMessage={contactPrefill.message}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={setLegalModalType}
      />

      {/* Floating WhatsApp & Call Widget + Back-to-Top */}
      <QuickContactFloating onOpenContact={() => handleNavigate('contact')} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={handleCaseStudyStart}
      />

      {/* Legal & XML Sitemap Modal */}
      <SeoLegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
