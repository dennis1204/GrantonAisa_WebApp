import React from 'react';
import { 
  FileText, 
  SearchCheck, 
  FileSignature, 
  Banknote, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ApplicationProcess() {
  const { t } = useLanguage();

  const stepIcons = [
    <FileText className="w-6 h-6 text-emerald-600" key="s1" />,
    <SearchCheck className="w-6 h-6 text-emerald-600" key="s2" />,
    <FileSignature className="w-6 h-6 text-emerald-600" key="s3" />,
    <Banknote className="w-6 h-6 text-emerald-600" key="s4" />,
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-200">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.process.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.process.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid with connecting layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {t.process.steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-emerald-600 transition-colors">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold">
                    {step.time}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {stepIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>步驟 {idx + 1} 完成</span>
              </div>
            </div>
          ))}
        </div>

        {/* Acceleration Tips Card */}
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-emerald-100 mb-1">
                {t.process.tipTitle}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-2xl">
                {t.process.tipDesc}
              </p>
            </div>
          </div>

          <a 
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>立即填表申請</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
