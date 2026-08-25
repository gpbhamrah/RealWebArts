import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { 
  Compass, 
  Layout, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentStepData = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#0B101D] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>Precision Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            How We Build World-Class Websites
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A transparent, battle-tested 6-stage engineering process designed to eliminate guesswork, respect your timeline, and guarantee measurable business ROI.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_STEPS.map((step) => {
            const isActive = activeStep === step.step;
            return (
              <button
                key={step.step}
                id={`process-step-btn-${step.step}`}
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/20 scale-[1.03]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{step.step}
                  </span>
                  <div className={`${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <div className={`text-xs font-bold font-heading truncate ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {step.phase}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{step.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                  0{currentStepData.step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    {currentStepData.phase}
                  </span>
                  <div className="text-xs font-mono text-slate-400">
                    Estimated Time: {currentStepData.duration}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {currentStepData.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>

              {/* Progress bar */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                  <span>Process Completion</span>
                  <span>{Math.round((currentStepData.step / 6) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${(currentStepData.step / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Deliverables Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Tangible Deliverables & Milestones:
              </div>

              <ul className="space-y-3">
                {currentStepData.keyOutputs.map((output, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{output}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onStartProject}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:scale-[1.01] transition-transform"
                >
                  <span>Begin Step 1 With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
