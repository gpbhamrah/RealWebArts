import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const RealWebArtsLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showTagline = false 
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`} id="realwebarts-logo">
      {/* Precision Geometric SVG Emblem */}
      <div className={`relative ${iconDimensions} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-md group-hover:blur-lg transition-all duration-300 opacity-80" />
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-sm"
        >
          {/* Rounded background shield */}
          <rect width="48" height="48" rx="12" fill="url(#rwa-bg-grad)" />
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" stroke="url(#rwa-border-grad)" strokeOpacity="0.6" />
          
          {/* Dynamic Geometric "R" & Art Ribbon */}
          <path 
            d="M14 13C14 11.8954 14.8954 11 16 11H25.5C29.6421 11 33 14.3579 33 18.5C33 22.3168 30.1478 25.4668 26.4674 25.9389L34.2 36.2C34.6293 36.7724 34.2205 37.5833 33.5042 37.5833H28.8C28.2435 37.5833 27.7214 37.3197 27.3944 36.8719L20.8 27.8H19.5V36.5C19.5 37.1075 19.0075 37.6 18.4 37.6H15.1C14.4925 37.6 14 37.1075 14 36.5V13Z" 
            fill="url(#rwa-r-grad)" 
          />
          <path 
            d="M19.5 16.5V22.5H25C26.6569 22.5 28 21.1569 28 19.5C28 17.8431 26.6569 16.5 25 16.5H19.5Z" 
            fill="#090D16" 
          />
          
          {/* Glowing Digital Cyan Node */}
          <circle cx="34" cy="14" r="3" fill="#06B6D4" />
          <circle cx="34" cy="14" r="3" fill="#06B6D4" className="animate-ping opacity-60" />

          {/* Gradients */}
          <defs>
            <linearGradient id="rwa-bg-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1220" />
              <stop offset="1" stopColor="#111B2E" />
            </linearGradient>
            <linearGradient id="rwa-border-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="rwa-r-grad" x1="14" y1="11" x2="35" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.6" stopColor="#60A5FA" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight leading-none ${textSizes} font-heading flex items-center`}>
          <span className="text-white">Real</span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent ml-0.5">
            WebArts
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 inline-block animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mt-0.5">
            Digital Engineering & Design
          </span>
        )}
      </div>
    </div>
  );
};
