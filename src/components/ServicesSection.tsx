import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';
import { 
  Palette, 
  Code2, 
  Blocks, 
  ShoppingCart, 
  Target, 
  TrendingUp, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Palette: <Palette className="w-6 h-6" />,
      Code2: <Code2 className="w-6 h-6" />,
      Blocks: <Blocks className="w-6 h-6" />,
      ShoppingCart: <ShoppingCart className="w-6 h-6" />,
      Target: <Target className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      Zap: <Zap className="w-6 h-6" />,
      Sparkles: <Sparkles className="w-6 h-6" />,
      ShieldCheck: <ShieldCheck className="w-6 h-6" />,
      Cpu: <Cpu className="w-6 h-6" />,
      Layers: <Layers className="w-6 h-6" />,
      Smartphone: <Smartphone className="w-6 h-6" />,
    };
    return iconMap[iconName] || <Sparkles className="w-6 h-6" />;
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'development', label: 'Web & WordPress' },
    { id: 'marketing', label: 'SEO & Landing Pages' },
    { id: 'optimization', label: 'Speed & Security' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#0B101D]/70 overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Engineered For Speed, Precision & High Conversion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From bespoke WordPress architectures and WooCommerce e-commerce to conversion-focused landing pages, every service is delivered with zero bloat and mathematical rigor.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`service-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25 font-bold'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/30 backdrop-blur-sm"
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      Most Requested
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-indigo-600 transition-all duration-300 flex items-center justify-center mb-5">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Impact Metric */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>{service.metrics}</span>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 hover:underline"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-500">Fixed Scope</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
