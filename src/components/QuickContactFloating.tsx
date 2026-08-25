import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface QuickContactFloatingProps {
  onOpenContact: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenContact }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clean phone number for WhatsApp link
  const cleanPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" id="floating-actions">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-xl shadow-black/50 transition-all duration-200 hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct WhatsApp Action Button */}
      <a
        href={`https://wa.me/${cleanPhone}?text=Hello%20RealWebArts%20Team,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 fill-black" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
};
