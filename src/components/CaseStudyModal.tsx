import React from 'react';
import { ProjectCaseStudy } from '../types';
import { X, CheckCircle2, ArrowRight, Zap, Shield, Sparkles, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartProject: (projectCategory: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-950/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-case-study-modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Overlay */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full overflow-hidden bg-slate-950">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Delivered in {project.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                {project.title}
              </h2>
              <p className="text-sm font-semibold text-slate-300">
                Client: {project.client}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  {res.metric}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              Executive Overview
            </h4>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30">
              <h4 className="text-sm font-bold text-rose-300 font-heading mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
              <h4 className="text-sm font-bold text-emerald-300 font-heading mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The RealWebArts Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technology Architecture */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technology Stack & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Want similar business outcomes for your brand?
            </div>

            <button
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
