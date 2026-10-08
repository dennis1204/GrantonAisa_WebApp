import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  symbolOnly?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = 'light',
  size = 'md',
  showText = true,
  symbolOnly = false,
  className = '',
}: BrandLogoProps) {
  // Size dimensions
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-18 h-18',
  }[size];

  const primaryTextSize = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl sm:text-2xl font-black tracking-tight',
    lg: 'text-2xl sm:text-3xl font-black tracking-tight',
    xl: 'text-3xl sm:text-4xl font-black tracking-tight',
  }[size];

  const subTextSize = {
    sm: 'text-[9px] tracking-wider font-semibold',
    md: 'text-[10px] sm:text-[11px] tracking-widest font-bold',
    lg: 'text-xs tracking-widest font-bold',
    xl: 'text-sm tracking-widest font-bold',
  }[size];

  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subTextColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem (Granton Asia Gold Emblem) */}
      <div className={`relative shrink-0 ${iconDimensions} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`goldGradMain_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="30%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            <linearGradient id={`goldGradSec_${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="40%" stopColor="#EAB308" />
              <stop offset="85%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <linearGradient id={`goldGradAccent_${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <radialGradient id={`glow_${variant}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="50" cy="50" r="46" fill={`url(#glow_${variant})`} />

          {/* Outer Ring Accent */}
          <circle 
            cx="50" 
            cy="50" 
            r="44" 
            fill="none" 
            stroke={`url(#goldGradSec_${variant})`} 
            strokeWidth="1.5" 
            opacity="0.3" 
            strokeDasharray="4 2"
          />

          {/* Dynamic Interlocking Curves (G flow & infinite wealth gathering) */}
          <path
            d="M50,10 C69.3,10 85,25.7 85,45 C85,59.8 75.8,72.5 62.8,77.6 C56.5,80 49.8,80 43.5,78 C30.5,73.8 20.8,62.7 18.5,49.2 C17.5,43.2 18.4,37 21.2,31.5 C22.5,28.8 26.5,30.2 25.3,32.9 C23.1,37.7 22.3,43.1 23.2,48.4 C25.2,60.3 33.7,70.1 45.1,73.7 C50.6,75.5 56.5,75.5 62,73.4 C73.2,68.9 81,57.8 81,45 C81,27.88 67.12,14 50,14 C36.8,14 25.4,22.2 21.2,34.5 C20.4,36.9 16.8,35.7 17.6,33.2 C22.4,19.6 35.2,10 50,10 Z"
            fill={`url(#goldGradMain_${variant})`}
          />

          {/* Inner Complementary Swirl Ribbon */}
          <path
            d="M50,21 C63.25,21 74,31.75 74,45 C74,55.2 67.6,63.9 58.6,67.3 C54.2,69 49.5,69 45.1,67.6 C36.3,64.8 29.8,57.2 28.2,48 C27.5,44 28.2,39.8 30.1,36.1 C31.1,34.1 28.2,32.5 27.2,34.5 C25,38.8 24.1,43.8 25,48.5 C26.9,59.2 34.5,68 44.8,71.3 C50,73 55.5,73 60.7,71 C71.2,67 78,56.8 78,45 C78,29.54 65.46,17 50,17 C38.2,17 28,24.3 24.2,35.2 C23.1,38.3 18.5,36.6 19.6,33.5 C24,20.8 36,11.5 50,11.5"
            fill={`url(#goldGradSec_${variant})`}
          />

          {/* Core Geometry (Wealth aperture / Diamond spark) */}
          <path
            d="M50,30 C58.28,30 65,36.72 65,45 C65,53.28 58.28,60 50,60 C41.72,60 35,53.28 35,45 C35,36.72 41.72,30 50,30 Z M50,34 C43.92,34 39,38.92 39,45 C39,51.08 43.92,56 50,56 C56.08,56 61,51.08 61,45 C61,38.92 56.08,34 50,34 Z"
            fill={`url(#goldGradAccent_${variant})`}
          />

          {/* Golden Center Diamond */}
          <polygon
            points="50,39 55,45 50,51 45,45"
            fill={`url(#goldGradMain_${variant})`}
          />
        </svg>
      </div>

      {/* Typography Section */}
      {showText && !symbolOnly && (
        <div className="flex flex-col leading-none">
          <span className={`${primaryTextSize} ${textColor} transition-colors tracking-tight font-black`}>
            盈滙亞洲有限公司
          </span>
          <span className={`${subTextSize} ${subTextColor} uppercase tracking-[0.2em] mt-1 font-bold`}>
            Granton Asia Limited
          </span>
        </div>
      )}
    </div>
  );
}
export default BrandLogo;
