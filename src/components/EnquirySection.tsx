import React from 'react';
import { Mail, Clock, ShieldCheck, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DEFAULT_SUPPORTER_EMAIL } from '../utils/enquiryService';

interface EnquirySectionProps {
  onOpenEnquiryModal: (topic?: string) => void;
}

export function EnquirySection({ onOpenEnquiryModal }: EnquirySectionProps) {
  const { t } = useLanguage();

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold mb-6">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t.enquiry.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.enquiry.directContactCardTitle}
              </h2>
              
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                {t.enquiry.directContactCardDesc}
              </p>

              {/* Supporter Email pill */}
              <div className="inline-flex flex-wrap items-center gap-3 p-3 bg-slate-800/90 rounded-2xl border border-slate-700 mb-8 max-w-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="text-slate-400 font-medium">{t.enquiry.supporterTargetLabel}</p>
                  <a 
                    href={`mailto:${DEFAULT_SUPPORTER_EMAIL}?subject=[盈滙亞洲 Granton Asia 貸款諮詢]`}
                    className="text-white hover:text-emerald-400 font-semibold font-mono transition-colors text-sm"
                  >
                    {DEFAULT_SUPPORTER_EMAIL}
                  </a>
                </div>
              </div>

              {/* Response Time and Guarantee */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.enquiry.responseTimeNote}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% 機密處理 · 絕對保障私隱</span>
                </div>
              </div>
            </div>

            {/* Right Card / CTA Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-lg text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center mb-5 mx-auto lg:mx-0">
                  <MessageSquare className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {t.enquiry.heading}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  {t.enquiry.subtitle}
                </p>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiryModal()}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{t.enquiry.sendToSupporterBtn}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={`mailto:${DEFAULT_SUPPORTER_EMAIL}?subject=[盈滙亞洲 Granton Asia 貸款諮詢]`}
                    className="w-full py-3 px-6 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-2 border border-slate-600"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.enquiry.emailSupporterDirectly}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
