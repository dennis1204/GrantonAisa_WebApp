import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-950">
      {/* Hong Kong Victoria Harbour Background (維港樓景全景背景) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2400&q=85"
          alt="Hong Kong Victoria Harbour Skyline and Skyscrapers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered cinematic overlays to preserve text contrast and elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        
        {/* Ambient emerald & teal financial glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[65%] h-[65%] rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[5%] -left-[10%] w-[45%] h-[45%] rounded-full bg-teal-800/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Headline & CTAs */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] mb-6 drop-shadow-sm">
            {t.hero.titlePart1}
            <span className="text-emerald-400 ml-1.5">{t.hero.titleHighlight}</span>
            {t.hero.titlePart2}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#apply" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-emerald-600 text-white text-base font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40 hover:shadow-emerald-700/50 hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-emerald-600/30 cursor-pointer"
            >
              {t.hero.applyNow}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a 
              href="#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900/90 backdrop-blur-sm text-white text-base font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {t.common.navServices}
            </a>
          </div>
          
          <div className="mt-8 inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/25 rounded-xl backdrop-blur-xs">
            <p className="text-xs sm:text-sm font-semibold text-amber-300/95">
              {t.hero.warning}
            </p>
          </div>
        </div>
        
        {/* Right Victoria Harbour Featured Skyline Visual */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="aspect-4/3 rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1600&q=85" 
              alt="Hong Kong Victoria Harbour Buildings and Financial District" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
            
            {/* Location Tag */}
            <div className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="relative w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>香港維港天際樓景 · Victoria Harbour</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">
                立足香港 · 專注按揭融資
              </p>
              <p className="text-sm font-semibold text-slate-200">
                盈滙亞洲有限公司 · Granton Asia Limited
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
