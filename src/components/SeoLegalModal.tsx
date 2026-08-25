import React, { useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { X, ShieldCheck, FileText, Globe, CheckCircle2 } from 'lucide-react';

interface SeoLegalModalProps {
  type: 'terms' | 'privacy' | 'sitemap' | null;
  onClose: () => void;
}

export const SeoLegalModal: React.FC<SeoLegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const titles = {
    terms: 'Terms of Service',
    privacy: 'Privacy Policy & Data Protection',
    sitemap: 'Sitemap.xml & Structured Data Architecture',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="seo-legal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              {type === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {type === 'terms' && <FileText className="w-5 h-5" />}
              {type === 'sitemap' && <Globe className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="seo-legal-title" className="text-xl font-bold text-white font-heading">
                {titles[type]}
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {COMPANY_INFO.legalName} • Last updated 2026
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>{COMPANY_INFO.name}</strong>, accessible from <code className="text-cyan-300 font-mono">https://realwebarts.com/</code>, your privacy is of utmost priority. This document outlines how we handle and protect information collected through our website and project discovery communications.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">1. Information Collection & Usage</h4>
              <p>
                We only collect information that you explicitly submit through our contact forms, project estimators, or direct email inquiries (such as your name, email address, company name, and technical project requirements). We use this information strictly to assess technical scope, generate accurate proposals, and communicate during active client engagements.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">2. Zero Third-Party Selling</h4>
              <p>
                We never sell, rent, or monetize client data. All proprietary project concepts, intellectual property, and credentials shared with {COMPANY_INFO.name} are safeguarded under confidentiality standards.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">3. Direct Contact</h4>
              <p>
                For privacy inquiries or data removal requests, contact our data protection team directly at <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 underline font-mono">{COMPANY_INFO.email}</a>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Welcome to <strong>{COMPANY_INFO.name}</strong>. By accessing our services or requesting project deliverables, you agree to comply with our standard client engagement terms.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">1. Project Milestones & Intellectual Property</h4>
              <p>
                Upon final milestone settlement, 100% of all custom design assets, source code repositories, and website deliverables become the exclusive intellectual property of the client.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">2. 95+ PageSpeed & Quality Guarantee</h4>
              <p>
                {COMPANY_INFO.name} guarantees that all custom web builds adhere to agreed-upon Core Web Vitals performance benchmarks and clean code standards.
              </p>
              <h4 className="text-sm font-bold text-white font-heading pt-2">3. Post-Launch Support & Warranty</h4>
              <p>
                All new custom websites include a complimentary 30-day post-launch technical warranty covering bug fixes and minor styling adjustments.
              </p>
            </>
          )}

          {type === 'sitemap' && (
            <div className="space-y-4">
              <p>
                RealWebArts XML Sitemap structure optimized for search engine crawlability and canonical indexing:
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="text-cyan-400 font-bold">&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/&lt;/loc&gt;&lt;priority&gt;1.0&lt;/priority&gt;&lt;/url&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/services&lt;/loc&gt;&lt;priority&gt;0.9&lt;/priority&gt;&lt;/url&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/portfolio&lt;/loc&gt;&lt;priority&gt;0.9&lt;/priority&gt;&lt;/url&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/estimator&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/about&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;</div>
                <div className="pl-4 text-emerald-400">&lt;url&gt;&lt;loc&gt;https://realwebarts.com/contact&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;</div>
                {SERVICES_DATA.slice(0, 5).map((s) => (
                  <div key={s.id} className="pl-4 text-slate-400">
                    &lt;url&gt;&lt;loc&gt;https://realwebarts.com/services/{s.id}&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;
                  </div>
                ))}
                <div className="text-cyan-400 font-bold">&lt;/urlset&gt;</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
