import React, { useState } from 'react';
import { RealWebArtsLogo } from './RealWebArtsLogo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { NavigationPage } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'sitemap') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 sm:pt-20 pb-12 relative overflow-hidden" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <RealWebArtsLogo size="md" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="space-y-2 text-xs text-slate-400 font-mono pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cyan-300 transition-colors">
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="RealWebArts Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="RealWebArts LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="RealWebArts GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="RealWebArts Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Agency' },
                { id: 'services', label: 'All Services' },
                { id: 'portfolio', label: 'Selected Work' },
                { id: 'process', label: 'Our Process' },
                { id: 'estimator', label: 'Cost Calculator' },
                { id: 'reviews', label: 'Client Reviews' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id as NavigationPage);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Insights (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Technical Insights
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our monthly memo on Core Web Vitals, conversion design frameworks, and high-performance WordPress.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You're on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Strictly zero spam. Unsubscribe anytime.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Built with precision.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('sitemap')}
              className="hover:text-slate-300 transition-colors"
            >
              Sitemap.xml
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
