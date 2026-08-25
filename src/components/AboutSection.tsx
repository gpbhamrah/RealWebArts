import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Target, 
  HeartHandshake, 
  Code2, 
  Layers, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle2,
  Cpu
} from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const values = [
    {
      title: 'Zero Technical Bloat',
      desc: 'We write clean, modular, hand-crafted code without 50+ messy plugins or clumsy visual builders that slow down your website.',
      icon: Code2,
    },
    {
      title: 'Obsessive Conversion Focus',
      desc: 'Beautiful aesthetics are empty if they do not convert. We architect visual hierarchies and micro-copy calibrated for maximum lead generation.',
      icon: Target,
    },
    {
      title: 'Sub-Second Speed Standard',
      desc: 'We treat page speed as a critical business feature. Every build is optimized for 95+ Core Web Vitals on Google Lighthouse.',
      icon: Zap,
    },
    {
      title: 'Direct Senior Communication',
      desc: 'No endless layers of account managers. You collaborate directly with senior design and full-stack engineering specialists.',
      icon: HeartHandshake,
    },
  ];

  const milestones = [
    { year: '2017', title: 'Agency Genesis', desc: 'Founded with a clear mission: delivering enterprise-quality custom web engineering without inflated agency markup.' },
    { year: '2019', title: 'WordPress & WooCommerce Mastery', desc: 'Developed custom Gutenberg block frameworks and high-volume e-commerce checkout systems.' },
    { year: '2022', title: 'Global Footprint Expansion', desc: 'Crossed 300+ successful client deployments spanning North America, Europe, UAE, and APAC.' },
    { year: '2026', title: 'RealWebArts 2.0 Redesign', desc: 'Pioneering next-gen React, headless WordPress, AI integration, and sub-0.5s Core Web Vitals dominance.' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#090D16] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind RealWebArts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Digital Craftsmanship Meets Engineering Rigor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            For over {COMPANY_INFO.experienceYears} years, RealWebArts has designed, built, and accelerated digital presences for ambitious businesses worldwide.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-snug">
              We Don't Just Build Websites. We Build High-Yield Digital Assets.
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              RealWebArts was founded on a simple truth: most business websites are either aesthetically outdated, dangerously slow, or burdened with brittle plugin dependencies. 
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              We bridge the gap between creative Awwwards-caliber visual design and robust backend engineering. Whether crafting custom WordPress systems with ACF Pro or engineering modern single-page applications, we ensure your brand looks prestigious and converts relentlessly.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-cyan-400">Custom</div>
                <div className="text-xs text-slate-400 mt-1">WordPress & Code</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-emerald-400">&lt; 1.0s</div>
                <div className="text-xs text-slate-400 mt-1">Speed Focused</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Responsive Design</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-amber-400">Direct</div>
                <div className="text-xs text-slate-400 mt-1">Developer Access</div>
              </div>
            </div>
          </div>

          {/* Right Agency Proof Box */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Official Headquarters & Global Delivery
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 transition-colors font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cyan-300 transition-colors font-mono">
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400">Core Architecture Principles:</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                  Custom ACF Blocks
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-emerald-300 border border-slate-800">
                  Sub-0.5s LCP
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                  100% Responsive
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-amber-300 border border-slate-800">
                  Schema.org JSON-LD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Values Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white font-heading text-center mb-10">
            Our Core Engineering Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/70 border border-slate-800 p-8">
          <h3 className="text-xl font-bold text-white font-heading text-center mb-8">
            Our Journey & Milestone Timeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {m.year}
                </span>
                <h5 className="text-sm font-bold text-white font-heading pt-2">{m.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
