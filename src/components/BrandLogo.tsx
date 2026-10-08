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
             <img src="../../public/logo.png" alt="Granton Asia Logo" className="w-10 h-10 mr-3" />
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
