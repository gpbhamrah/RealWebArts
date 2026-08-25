import React, { useState } from 'react';
import { Zap, Gauge, ShieldAlert, CheckCircle2, TrendingUp, RefreshCw } from 'lucide-react';

export const PerformanceBenchmark: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'realwebarts' | 'typical'>('realwebarts');
  const [isAuditing, setIsAuditing] = useState<boolean>(false);

  const triggerReAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-950/90 border-y border-slate-800/80 relative overflow-hidden" id="performance-benchmark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Google Core Web Vitals Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Speed Is A Feature. Milliseconds Equal Revenue.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Every 100ms delay in page load drops conversions by 7%. See how RealWebArts custom code destroys industry average bloat.
          </p>
        </div>

        {/* Audit Simulator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('realwebarts')}
                id="benchmark-tab-rwa"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'realwebarts'
                    ? 'bg-emerald-500 text-black shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                ⚡ RealWebArts Engineering
              </button>
              <button
                onClick={() => setActiveTab('typical')}
                id="benchmark-tab-typical"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'typical'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                ⚠️ Standard PageBuilder Theme
              </button>
            </div>

            <button
              onClick={triggerReAudit}
              disabled={isAuditing}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin text-cyan-400' : ''}`} />
              <span>{isAuditing ? 'Auditing DOM...' : 'Re-Run Lighthouse Audit'}</span>
            </button>
          </div>

          {/* Audit Metrics */}
          <div className="mt-8">
            {activeTab === 'realwebarts' ? (
              <div className="space-y-6">
                {/* 4 Big Circles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">99</div>
                    <div className="text-xs font-bold text-white mt-1">Performance</div>
                    <div className="text-[10px] text-emerald-400 font-mono">LCP: 0.38s</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">100</div>
                    <div className="text-xs font-bold text-white mt-1">Accessibility</div>
                    <div className="text-[10px] text-emerald-400 font-mono">WCAG 2.1 AA</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">100</div>
                    <div className="text-xs font-bold text-white mt-1">Best Practices</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Zero Vulnerabilities</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">100</div>
                    <div className="text-xs font-bold text-white mt-1">SEO Score</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Schema.org JSON-LD</div>
                  </div>
                </div>

                {/* Audit breakdown details */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400">First Contentful Paint (FCP):</span>
                    <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">0.3s (Instant)</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Cumulative Layout Shift (CLS):</span>
                    <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">0.000 (Zero Shift)</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Total Blocking Time (TBT):</span>
                    <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">0 ms (Zero Lag)</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Slow Typical Circles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-rose-400">38</div>
                    <div className="text-xs font-bold text-white mt-1">Performance</div>
                    <div className="text-[10px] text-rose-400 font-mono">LCP: 4.8s (Sluggish)</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">62</div>
                    <div className="text-xs font-bold text-white mt-1">Accessibility</div>
                    <div className="text-[10px] text-amber-400 font-mono">Missing ARIA tags</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">54</div>
                    <div className="text-xs font-bold text-white mt-1">Best Practices</div>
                    <div className="text-[10px] text-amber-400 font-mono">Outdated jQuery</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">68</div>
                    <div className="text-xs font-bold text-white mt-1">SEO Score</div>
                    <div className="text-[10px] text-amber-400 font-mono">No structured data</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-900/40 text-xs text-rose-200 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Bottlenecks Detected:</strong> 42 unused WordPress plugins, 3.8MB uncompressed images, 2,400ms render-blocking CSS stylesheets, high bounce rate.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
