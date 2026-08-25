import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/siteData';
import { ProjectCaseStudy } from '../types';
import { ArrowUpRight, Sparkles, TrendingUp, Zap, Filter, Eye, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectCaseStudy: (project: ProjectCaseStudy) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'WordPress', 'WooCommerce', 'Custom SaaS', 'Landing Page', 'UI/UX', 'Redesign'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-[#090D16] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span>Featured Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Selected Work & Proven Impact
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl">
              Real projects delivered for discerning clients. Explore the architecture, design choices, and conversion numbers behind each build.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => onSelectCaseStudy(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                    {project.year}
                  </span>
                </div>

                {/* Hover Action Pill */}
                <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-bold shadow-lg shadow-black">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Key Metric Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/60">
                        <div className="text-sm sm:text-base font-bold font-mono text-cyan-400">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-slate-400 font-sans truncate">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
