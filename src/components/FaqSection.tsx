import React, { useState } from 'react';
import { FAQS_DATA } from '../data/siteData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'WordPress', 'Process & Pricing', 'SEO & Speed'];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#0B101D] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Clear, honest answers about our technical stack, pricing, timelines, and security policies.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., WordPress, PageSpeed, pricing, SEO)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-sm">
              No matching questions found. Have a specific question?{' '}
              <button
                onClick={onAskQuestion}
                className="text-cyan-400 font-bold hover:underline"
              >
                Ask our team directly
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
