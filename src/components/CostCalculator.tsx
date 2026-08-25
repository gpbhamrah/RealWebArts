import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Zap,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface CostCalculatorProps {
  onProceedToContact: (projectDetails: {
    service: string;
    budget: string;
    timeline: string;
    details: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onProceedToContact }) => {
  const [projectType, setProjectType] = useState<'corporate' | 'ecommerce' | 'landing' | 'webapp' | 'redesign'>('corporate');
  const [pageCount, setPageCount] = useState<number>(8);
  const [cmsType, setCmsType] = useState<'wordpress' | 'react' | 'custom'>('wordpress');
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');
  const [addons, setAddons] = useState<string[]>(['seo', 'speed']);

  const toggleAddon = (addonKey: string) => {
    if (addons.includes(addonKey)) {
      setAddons(addons.filter((a) => a !== addonKey));
    } else {
      setAddons([...addons, addonKey]);
    }
  };

  // Pricing formula
  const basePrices = {
    corporate: 1400,
    ecommerce: 2200,
    landing: 850,
    webapp: 3200,
    redesign: 1200,
  };

  const pageCost = Math.max(0, pageCount - 5) * 80;
  
  const cmsMultipliers = {
    wordpress: 1.0,
    react: 1.25,
    custom: 1.4,
  };

  const addonPrices: Record<string, number> = {
    seo: 350,
    speed: 250,
    maintenance: 450,
    multilang: 300,
  };

  const addonsTotal = addons.reduce((sum, key) => sum + (addonPrices[key] || 0), 0);
  const rawTotal = (basePrices[projectType] + pageCost) * cmsMultipliers[cmsType] + addonsTotal;
  const finalPrice = timeline === 'rush' ? Math.round(rawTotal * 1.2) : Math.round(rawTotal);

  const estimatedWeeks = {
    landing: timeline === 'rush' ? '1 - 2 weeks' : '2 - 3 weeks',
    corporate: timeline === 'rush' ? '2 - 3 weeks' : '3 - 4 weeks',
    redesign: timeline === 'rush' ? '2 - 3 weeks' : '3 - 4 weeks',
    ecommerce: timeline === 'rush' ? '3 - 4 weeks' : '4 - 6 weeks',
    webapp: timeline === 'rush' ? '4 - 5 weeks' : '6 - 8 weeks',
  }[projectType];

  const handleApplyEstimate = () => {
    const typeLabel = {
      corporate: 'Bespoke Corporate Website',
      ecommerce: 'Custom WooCommerce / E-Commerce',
      landing: 'High-Converting Landing Page',
      webapp: 'Custom Web Application / SaaS',
      redesign: 'Website Redesign & Modernization',
    }[projectType];

    const details = `Estimated ${pageCount} pages, ${cmsType.toUpperCase()} architecture, Addons: ${addons.join(', ')}. Target delivery: ${estimatedWeeks}`;

    onProceedToContact({
      service: typeLabel,
      budget: `$${finalPrice.toLocaleString()} USD (Estimated)`,
      timeline: timeline === 'rush' ? 'Urgent / Priority' : 'Standard 3-5 Weeks',
      details,
    });
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 relative bg-[#090D16] overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-600/10 to-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Transparent Pricing. Zero Surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Configure your technical scope, features, and timeline to generate an instant estimate calibrated with RealWebArts production standards.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Configuration Form */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'corporate', label: 'Corporate Website', sub: 'Brands & Services' },
                  { id: 'ecommerce', label: 'E-Commerce / Woo', sub: 'Online Store' },
                  { id: 'landing', label: 'Landing Page', sub: 'Lead Capture & PPC' },
                  { id: 'redesign', label: 'Website Redesign', sub: 'Speed & UX Overhaul' },
                  { id: 'webapp', label: 'Custom Web App', sub: 'SaaS & Portals' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      projectType === type.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-heading">{type.label}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{type.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Page Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  2. Approximate Page Count
                </label>
                <span className="text-sm font-bold font-mono text-cyan-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-500 border border-slate-800"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>1 Page (Single Page)</span>
                <span>15 Pages</span>
                <span>30+ Pages</span>
              </div>
            </div>

            {/* 3. Technology / CMS Stack */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                3. Technology & Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'wordpress', title: 'Custom WordPress', desc: 'Custom Gutenberg & ACF (Zero Bloat)' },
                  { id: 'react', title: 'React 19 / Vite', desc: 'Headless Single-Page Architecture' },
                  { id: 'custom', title: 'Full-Stack Bespoke', desc: 'Node.js, PostgreSQL & Custom APIs' },
                ].map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setCmsType(tech.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cmsType === tech.id
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-heading font-semibold">{tech.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{tech.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Included Addons */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                4. High-Growth Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'seo', title: 'Technical Schema.org SEO', price: '+$350', desc: 'Rich Snippets & Google Indexing' },
                  { id: 'speed', title: '99+ PageSpeed Guarantee', price: '+$250', desc: 'Sub-0.5s Edge Caching' },
                  { id: 'maintenance', title: '1-Year WAF & Maintenance', price: '+$450', desc: 'Daily Cloud Backups & Updates' },
                  { id: 'multilang', title: 'Multi-Language / Currency', price: '+$300', desc: 'Global Geo-Routing' },
                ].map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'bg-slate-950 border-cyan-500/50 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                        isChecked ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-slate-700'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold font-heading text-slate-200">{addon.title}</span>
                          <span className="text-xs font-mono text-cyan-400">{addon.price}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{addon.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. Timeline Preference */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                5. Delivery Timeline
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTimeline('standard')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    timeline === 'standard'
                      ? 'bg-slate-950 border-cyan-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-heading">Standard Sprint</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Regular Pace</div>
                </button>
                <button
                  onClick={() => setTimeline('rush')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    timeline === 'rush'
                      ? 'bg-slate-950 border-amber-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-heading flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Priority Rush (+20%)</span>
                  </div>
                  <div className="text-[10px] text-amber-400 font-mono">Fast-Track Delivery</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Estimate Summary Sticky Card */}
          <div className="lg:col-span-5 sticky top-28 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                Investment Estimate
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold">
                100% Fixed Price
              </span>
            </div>

            {/* Price Output */}
            <div>
              <div className="text-xs text-slate-400 font-mono">Estimated Ballpark Investment:</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-1 flex items-baseline gap-2">
                <span>${finalPrice.toLocaleString()}</span>
                <span className="text-sm font-normal text-slate-400 font-sans">USD</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Subject to exact requirements & custom API specs.
              </p>
            </div>

            {/* Highlights Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Delivery:</span>
                <span className="font-mono font-bold text-white">{estimatedWeeks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Milestone Structure:</span>
                <span className="font-mono text-cyan-300">40% / 30% / 30%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Post-Launch Support:</span>
                <span className="font-mono text-emerald-300">30 Days Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">PageSpeed Guarantee:</span>
                <span className="font-mono text-cyan-400">95+ Score</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleApplyEstimate}
              id="apply-calculator-estimate-btn"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Lock In Estimate & Send Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <span className="text-[11px] text-slate-400 font-mono">
                Direct inquiries handled via <strong className="text-slate-200">{COMPANY_INFO.email}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
