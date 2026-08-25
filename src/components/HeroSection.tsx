import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Laptop, 
  Tablet, 
  Smartphone, 
  CheckCircle2, 
  Star,
  Play,
  Layers,
  Code2,
  Cpu,
  Eye
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { NavigationPage } from '../types';

interface HeroSectionProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenEstimator: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenEstimator }) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [activeScreenTab, setActiveScreenTab] = useState<'ecommerce' | 'saas' | 'agency'>('saas');

  return (
    <section 
      id="hero-section" 
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden radial-grid"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>RealWebArts Redesign 2.0</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Award-Winning Web Craft & WordPress</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
            We Engineer Websites That <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Command Authority & Convert
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Bespoke web design, custom WordPress architectures, and high-conversion UI/UX engineered to load in under <strong className="text-cyan-300 font-semibold">0.5 seconds</strong> and maximize your digital ROI.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto">
          <button
            onClick={() => onNavigate('contact')}
            id="hero-start-project-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('portfolio')}
            id="hero-view-work-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
          >
            <Eye className="w-5 h-5 text-slate-400" />
            <span>View Case Studies</span>
          </button>
        </div>

        {/* Proof Pill Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-14">
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-heading">0.4s Median</div>
              <div className="text-xs text-slate-400">Page Load Time</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-heading">450+ Sites</div>
              <div className="text-xs text-slate-400">Launched Worldwide</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-heading">99+ Lighthouse</div>
              <div className="text-xs text-slate-400">Core Web Vitals</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-heading">4.9 / 5.0</div>
              <div className="text-xs text-slate-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Interactive Device Showcase Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Device Switcher Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-slate-400 px-3 hidden sm:inline">Interactive Preview:</span>
              <button
                onClick={() => setDeviceMode('desktop')}
                id="device-btn-desktop"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Desktop (16")</span>
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                id="device-btn-tablet"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet (iPad)</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                id="device-btn-mobile"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (iPhone)</span>
              </button>
            </div>

            {/* Template Archetype Switcher */}
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setActiveScreenTab('saas')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeScreenTab === 'saas' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                FinTech SaaS
              </button>
              <button
                onClick={() => setActiveScreenTab('ecommerce')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeScreenTab === 'ecommerce' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                WooCommerce
              </button>
              <button
                onClick={() => setActiveScreenTab('agency')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeScreenTab === 'agency' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Modern Portfolio
              </button>
            </div>
          </div>

          {/* Device Frame Display */}
          <div className="relative mx-auto transition-all duration-500 ease-out flex justify-center">
            {/* Desktop MacBook Pro Frame */}
            {deviceMode === 'desktop' && (
              <div className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 shadow-2xl shadow-cyan-950/40 p-2 sm:p-3 overflow-hidden">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900 rounded-t-xl border-b border-slate-800 text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                    <span className="text-emerald-400">🔒 https://</span>
                    <span>realwebarts.com/showcase/{activeScreenTab}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">99 Lighthouse</span>
                  </div>
                </div>

                {/* Rendered Live Screen Content */}
                <div className="rounded-b-xl overflow-hidden bg-slate-900 p-4 sm:p-6 border border-slate-800/80">
                  {activeScreenTab === 'saas' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/60 border border-indigo-500/30">
                        <div>
                          <div className="text-xs uppercase font-mono tracking-widest text-cyan-400">RealWebArts Enterprise Architecture</div>
                          <div className="text-lg sm:text-xl font-bold text-white font-heading mt-1">Nexus Global Asset Analytics</div>
                          <p className="text-xs text-slate-300 mt-1 max-w-xl">Sub-second data visualization with real-time portfolio rebalancing and automated KYC.</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/40">
                            +265% Leads
                          </span>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/40">
                            0.38s LCP
                          </span>
                        </div>
                      </div>

                      {/* Mockup Dashboard Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                          <div className="text-xs text-slate-400">Total Portfolio Value</div>
                          <div className="text-xl font-bold text-white font-mono mt-1">$48,290,000</div>
                          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +18.4% this quarter
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                          <div className="text-xs text-slate-400">Conversion Velocity</div>
                          <div className="text-xl font-bold text-cyan-300 font-mono mt-1">11.4%</div>
                          <div className="text-[11px] text-cyan-400 mt-1">Institutional Investor Signups</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                          <div className="text-xs text-slate-400">SEO Keyword Rank #1</div>
                          <div className="text-xl font-bold text-indigo-300 font-mono mt-1">24 Keywords</div>
                          <div className="text-[11px] text-indigo-400 mt-1">Top-3 SERP Positions</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreenTab === 'ecommerce' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-amber-950/40 border border-amber-500/30 flex justify-between items-center">
                        <div>
                          <span className="text-xs uppercase font-mono tracking-widest text-amber-400">Custom WooCommerce Storefront</span>
                          <h4 className="text-lg font-bold text-white font-heading mt-0.5">Aurora Artisanal Brews & Subscriptions</h4>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                          $1.4M Q1 Revenue
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400">Cart Abandonment</div>
                          <div className="text-base font-bold text-emerald-400">Reduced by 48%</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400">Checkout Speed</div>
                          <div className="text-base font-bold text-cyan-400">1-Click Apple Pay</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400">Mobile Speed</div>
                          <div className="text-base font-bold text-indigo-400">0.42s Render</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400">Customer Rating</div>
                          <div className="text-base font-bold text-amber-400">4.9 / 5.0 (820+ revs)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreenTab === 'agency' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-500/30 flex justify-between items-center">
                        <div>
                          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">Editorial Architectural Portfolio</span>
                          <h4 className="text-lg font-bold text-white font-heading mt-0.5">Vertex Studio International</h4>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
                          Awwwards Nominee
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                        <span>Obsessive Typography • Mathematical Step Ratios • AVIF Progressive High-Res Imagery</span>
                        <span className="text-emerald-400 font-mono font-bold">+190% Inbound RFPs</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tablet Frame */}
            {deviceMode === 'tablet' && (
              <div className="w-[580px] max-w-full rounded-3xl bg-slate-950 border-4 border-slate-700 shadow-2xl p-4">
                <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-3" />
                <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="text-sm font-bold text-white">Tablet Responsive View (768px)</div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">100% Fluid Grid</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    All RealWebArts interfaces adapt cleanly with custom tablet breakpoints, thumb-reachable action bars, and optimized image density.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-cyan-300">
                      ⚡ 0.4s Fast Mobile TTFB
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-emerald-300">
                      ✓ WCAG 2.1 AA Compliant
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile iPhone Frame */}
            {deviceMode === 'mobile' && (
              <div className="w-[320px] rounded-[40px] bg-slate-950 border-4 border-slate-700 shadow-2xl p-3">
                {/* Dynamic Island */}
                <div className="w-24 h-5 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500/80 mr-2" />
                </div>
                <div className="rounded-[28px] bg-slate-900 p-4 border border-slate-800 space-y-3 text-center">
                  <div className="text-xs font-bold text-white">Mobile-First Perfection</div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    48px+ tap targets, no layout shifts (0 CLS), and instant thumb navigation.
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                    100% Mobile PageSpeed
                  </div>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2 rounded-lg bg-cyan-500 text-black text-xs font-bold"
                  >
                    Tap to Call / Inquire
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
