import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/siteData';
import { Star, CheckCircle, Quote, Sparkles, Filter } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [platformFilter, setPlatformFilter] = useState<'All' | 'Google' | 'Clutch'>('All');

  const filteredReviews = platformFilter === 'All'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.platform === platformFilter);

  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#0B101D]/90 overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              What Founders & Leaders Say About RealWebArts
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl">
              We judge our success exclusively by the measurable revenue, conversion acceleration, and brand pride we deliver to our clients.
            </p>
          </div>

          {/* Platform Filter Buttons */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-full border border-slate-800">
            {(['All', 'Google', 'Clutch'] as const).map((platform) => (
              <button
                key={platform}
                id={`review-filter-${platform.toLowerCase()}`}
                onClick={() => setPlatformFilter(platform)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  platformFilter === platform
                    ? 'bg-amber-500 text-black shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {platform === 'All' ? 'All Reviews (5.0★)' : `${platform} Verified`}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Platform Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {review.platform} Review
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.content}"
                </p>

                {/* Project Tag */}
                <div className="mt-4 inline-block px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-cyan-300">
                  Project: {review.projectType}
                </div>
              </div>

              {/* Client Avatar & Role */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-white font-heading">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {review.role}, <span className="text-slate-300 font-medium">{review.company}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Verified Engagement • {review.date}
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
