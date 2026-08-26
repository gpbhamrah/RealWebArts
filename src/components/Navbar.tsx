import React, { useState, useEffect } from 'react';
import { RealWebArtsLogo } from './RealWebArtsLogo';
import { NavigationPage } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  Calculator, 
  Sparkles,
  ChevronDown,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

interface NavbarProps {
  activePage: NavigationPage;
  setActivePage: (page: NavigationPage) => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenEstimator,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: NavigationPage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      setActivePage('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mobileNavItems: { id: NavigationPage; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About RealWebArts' },
    { id: 'reviews', label: 'Client Reviews', badge: '5.0★' },
    { id: 'estimator', label: 'Cost Estimator' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090D16]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3.5' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl"
          aria-label="RealWebArts Home"
          id="nav-logo-btn"
        >
          <RealWebArtsLogo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          <button
            id="nav-link-home"
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activePage === 'home' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </button>

          <button
            id="nav-link-services"
            onClick={() => handleNavClick('services')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activePage === 'services' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Services
          </button>

          <button
            id="nav-link-portfolio"
            onClick={() => handleNavClick('portfolio')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              activePage === 'portfolio' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>Work</span>
          </button>

          <button
            id="nav-link-process"
            onClick={() => handleNavClick('process')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activePage === 'process' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Process
          </button>

          {/* About dropdown with Reviews */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              id="nav-link-about-dropdown"
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                activePage === 'about' || activePage === 'reviews'
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>About</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-2xl bg-slate-900/95 border border-slate-800 p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                <button
                  id="nav-dropdown-about"
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                    activePage === 'about' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>About RealWebArts</span>
                </button>
                <button
                  id="nav-dropdown-reviews"
                  onClick={() => handleNavClick('reviews')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                    activePage === 'reviews' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>Client Reviews</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">5.0★</span>
                </button>
              </div>
            )}
          </div>

          <button
            id="nav-link-estimator"
            onClick={() => handleNavClick('estimator')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              activePage === 'estimator' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>Cost Estimator</span>
          </button>

          <button
            id="nav-link-faq"
            onClick={() => handleNavClick('faq')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activePage === 'faq' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            FAQ
          </button>

          <button
            id="nav-link-contact"
            onClick={() => handleNavClick('contact')}
            className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activePage === 'contact' 
                ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA / Direct Contact */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Phone Call Link */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            id="nav-phone-call"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-slate-800"
          >
            <div className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{COMPANY_INFO.formattedPhone}</span>
          </a>

          {/* Instant Project Inquiry CTA Button (Desktop & Tablet) */}
          <button
            onClick={handleStartProject}
            id="nav-get-quote-btn"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Start Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Quick Start Project (Mobile view) */}
          <button
            onClick={handleStartProject}
            id="nav-mobile-start-project-btn"
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/25 active:scale-95 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Project</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#090D16]/98 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-2">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs uppercase font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Us: {COMPANY_INFO.formattedPhone}</span>
              </a>

              <button
                onClick={handleStartProject}
                id="mobile-drawer-start-project-btn"
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
