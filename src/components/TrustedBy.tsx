import React from 'react';
import { Award, CheckCircle, Shield, Star, Zap, Globe, Sparkles } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const badges = [
    { title: 'Awwwards Nominee', subtitle: 'Digital Craft & UX', icon: Award },
    { title: 'Google Partner', subtitle: 'Core Web Vitals & SEO', icon: Zap },
    { title: 'Clutch 4.9/5', subtitle: 'Top Web Agency', icon: Star },
    { title: 'WordPress Certified', subtitle: 'ACF & Custom Core', icon: CheckCircle },
    { title: 'WooCommerce Expert', subtitle: 'High-Volume Funnels', icon: Shield },
    { title: 'Cloudflare Edge', subtitle: 'Enterprise Security', icon: Globe },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/60 relative overflow-hidden" id="trusted-by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">
            Trusted by fast-growing startups, global enterprises, and industry leaders
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-200 mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-200 font-heading group-hover:text-white">
                  {badge.title}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {badge.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
