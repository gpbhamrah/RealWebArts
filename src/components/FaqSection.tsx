import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FAQS_DATA } from '../data/siteData';
import { ChevronDown, HelpCircle, Search, Sparkles, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const categories = ['All', 'General', 'WordPress', 'Process & Pricing', 'SEO & Speed'];

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#0B101D] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
          <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Clear, transparent answers about our technical stack, custom WordPress development, project pricing, and speed optimization.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., WordPress, PageSpeed, pricing, SEO, timeline)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`faq-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-sm shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border transition-colors duration-200 ${
                      isOpen
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800 group-hover:text-slate-300'
                    }`}>
                      {faq.category}
                    </span>
                    <span className={`text-sm sm:text-base font-bold font-heading transition-colors duration-200 ${
                      isOpen ? 'text-cyan-300' : 'text-white group-hover:text-cyan-200'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.25,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-200 ${
                      isOpen
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-400 group-hover:text-white group-hover:border-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-content-${faq.id}`}
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: 'auto', opacity: 1 }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.32,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Have a custom inquiry?{' '}
              <button
                onClick={onAskQuestion}
                className="text-cyan-400 font-bold hover:underline ml-1 inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5 inline" />
                <span>Ask our team directly</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              We provide free technical scoping, architectural consultations, and website speed audits.
            </p>
          </div>
          <button
            onClick={onAskQuestion}
            id="faq-contact-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-black font-bold text-xs sm:text-sm hover:bg-cyan-400 shadow-md shadow-cyan-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Speak With a Developer</span>
          </button>
        </div>
      </div>
    </section>
  );
};
