import { Banknote, Clock, FileText, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const featureItems = [
    {
      name: t.features.items.fastApprovalTitle,
      description: t.features.items.fastApprovalDesc,
      icon: Zap,
    },
    {
      name: t.features.items.flexibleTermsTitle,
      description: t.features.items.flexibleTermsDesc,
      icon: Clock,
    },
    {
      name: t.features.items.lowRatesTitle,
      description: t.features.items.lowRatesDesc,
      icon: Banknote,
    },
    {
      name: t.features.items.simpleProcessTitle,
      description: t.features.items.simpleProcessDesc,
      icon: FileText,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.features.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
