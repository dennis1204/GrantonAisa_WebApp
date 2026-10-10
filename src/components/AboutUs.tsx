import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Scale, 
  CheckCircle2, 
  Home
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-200">
            <Home className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.about.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.about.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.about.introP1}
          </p>
        </div>

        {/* Main Philosophy & Background Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>香港持牌放債人 · 按揭融資專項</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {t.about.heading}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {t.about.introP1}
              </p>

              <p className="text-slate-600 leading-relaxed">
                {t.about.introP2}
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  物業狀況專業評估
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  嚴格考量還款能力
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  條款透明無隱藏收費
                </span>
              </div>
            </div>

            {/* Performance & Trust Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md">
                {/* <p className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight mb-1">
                  {t.about.stats.stat1Number}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  {t.about.stats.stat1Label}
                </p> */}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md">
                {/* <p className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight mb-1">
                  {t.about.stats.stat2Number}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  {t.about.stats.stat2Label}
                </p> */}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white shadow-md">
                {/* <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                  {t.about.stats.stat3Number}
                </p>
                <p className="text-xs text-emerald-100 font-medium">
                  {t.about.stats.stat3Label}
                </p> */}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white shadow-md">
                {/* <p className="text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                  {t.about.stats.stat4Number}
                </p>
                <p className="text-xs text-emerald-100 font-medium">
                  {t.about.stats.stat4Label}
                </p> */}
              </div>
            </div>

          </div>
        </div>

        {/* Two Core Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Pillar 1: 用心聆聽，細心跟進 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3">
                專業 · 誠信 · 可靠
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {t.about.section1Title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t.about.section1Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>由初步諮詢到跟進，全程專人清晰解說</span>
            </div>
          </div>

          {/* Pillar 2: 誠信為本，重視長遠關係 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3">
                透明溝通 · 審慎評估
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {t.about.section2Title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t.about.section2Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>費用與條款全然公開，切合實際財務需要</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
