import { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

export function Calculator() {
  const { t, setRequestedLoanAmount } = useLanguage();
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(24);
  
  // Annual percentage rate
  const annualInterestRate = 4.5; 
  
  const monthlyPayment = useMemo(() => {
    const p = amount;
    const r = (annualInterestRate / 100) / 12;
    const n = months;
    
    if (r === 0) return p / n;
    
    // M = P[r(1+r)^n/((1+r)^n-1)]
    const result = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(result);
  }, [amount, months]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-HK', {
      style: 'currency',
      currency: 'HKD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleApplyWithDetails = () => {
    setRequestedLoanAmount(amount);
    const applyElement = document.getElementById('apply');
    if (applyElement) {
      applyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4">
              <CalcIcon className="w-3.5 h-3.5" />
              <span>{t.common.navCalculator}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.calculator.heading}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t.calculator.subtitle}
            </p>
            
            <div className="space-y-10">
              {/* Amount Slider */}
              <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="amount" className="block text-sm font-semibold text-slate-700">
                    {t.calculator.loanAmount}
                  </label>
                  <span className="text-2xl font-bold text-emerald-600 font-mono tracking-tight">
                    {formatCurrency(amount)}
                  </span>
                </div>
                <input 
                  type="range" 
                  id="amount"
                  min="10000" 
                  max="1000000" 
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                />
                <div className="flex justify-between mt-2.5 text-xs text-slate-400 font-medium">
                  <span>{t.calculator.minAmount}</span>
                  <span>{t.calculator.maxAmount}</span>
                </div>
              </div>

              {/* Term Slider */}
              <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="months" className="block text-sm font-semibold text-slate-700">
                    {t.calculator.repaymentPeriod}
                  </label>
                  <span className="text-2xl font-bold text-emerald-600 font-mono tracking-tight">
                    {months} {t.calculator.monthsUnit}
                  </span>
                </div>
                <input 
                  type="range" 
                  id="months"
                  min="6" 
                  max="60" 
                  step="6"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                />
                <div className="flex justify-between mt-2.5 text-xs text-slate-400 font-medium">
                  <span>{t.calculator.minMonths}</span>
                  <span>{t.calculator.maxMonths}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-2">{t.calculator.estimatedHeading}</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-8">{t.calculator.aprNote}</p>
            
            <div className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700/80 mb-8 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                {t.calculator.monthlyPayment}
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-tight font-mono">
                {formatCurrency(monthlyPayment)}
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">{t.calculator.totalAmount}</span>
                <span className="font-semibold text-white font-mono">{formatCurrency(amount)}</span>
              </div>
              <div className="flex justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">{t.calculator.totalInterest}</span>
                <span className="font-semibold text-white font-mono">
                  {formatCurrency(Math.max(0, (monthlyPayment * months) - amount))}
                </span>
              </div>
              <div className="flex justify-between text-sm pt-1">
                <span className="text-slate-300 font-medium">{t.calculator.totalRepayment}</span>
                <span className="font-bold text-white text-base font-mono">{formatCurrency(monthlyPayment * months)}</span>
              </div>
            </div>

            <button 
              type="button"
              onClick={handleApplyWithDetails}
              className="w-full py-4 px-6 bg-emerald-600 text-center text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/50 flex items-center justify-center gap-2 cursor-pointer focus:ring-4 focus:ring-emerald-600/30"
            >
              <span>{t.calculator.applyCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
