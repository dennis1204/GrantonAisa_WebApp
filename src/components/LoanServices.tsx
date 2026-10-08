import React from 'react';
import { 
  CreditCard, 
  Home, 
  Briefcase, 
  Coins, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function LoanServices() {
  const { t } = useLanguage();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'personal':
        return <Coins className="w-6 h-6 text-emerald-600" />;
      case 'balance_transfer':
        return <CreditCard className="w-6 h-6 text-emerald-600" />;
      case 'property':
        return <Home className="w-6 h-6 text-emerald-600" />;
      case 'sme':
        return <Briefcase className="w-6 h-6 text-emerald-600" />;
      default:
        return <Coins className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-100">
            <Coins className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.services.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-6 bg-white p-4 rounded-2xl border border-slate-200/60">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Suitable for note */}
                <div className="text-xs text-slate-500 mb-6 bg-slate-100/80 px-3.5 py-2.5 rounded-xl">
                  <span className="font-semibold text-slate-700">適合對象 / Suitable for: </span>
                  <span>{service.suitableFor}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <a
                  href="#apply"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>立即申請</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
