import { Banknote, Clock, FileText, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { language } = useLanguage();
  const isZh = language === 'zh-HK';

  const featureItems = [
    {
      name: isZh ? '極速審批' : 'Fast Approval',
      description: isZh ? '最快即日完成審批並安排放款' : 'Fast-track approval with same-day disbursement options.',
      icon: Zap,
    },
    {
      name: isZh ? '彈性還款期' : 'Flexible Terms',
      description: isZh ? '提供 6 至 60 個月彈性分期方案' : 'Tailored repayment periods ranging from 6 to 60 months.',
      icon: Clock,
    },
    {
      name: isZh ? '特惠低息' : 'Competitive Rates',
      description: isZh ? '透明收費機制，絕無任何隱藏附加費' : 'Transparent pricing with no hidden handling charges.',
      icon: Banknote,
    },
    {
      name: isZh ? '手續簡易' : 'Simple Process',
      description: isZh ? '網上即時遞交，專人全程貼心跟進' : 'Apply online with minimal documents and dedicated advisory.',
      icon: FileText,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {isZh ? '我們的核心優勢' : 'Our Core Advantages'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {isZh ? '以專業誠信，為您量身定制最合適的財務信貸方案' : 'Professional, transparent credit solutions tailored to your financial needs.'}
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
