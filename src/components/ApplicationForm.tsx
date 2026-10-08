import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LegalDocType } from './LegalModal';

interface ApplicationFormProps {
  onOpenLegal?: (tab: LegalDocType) => void;
}

export function ApplicationForm({ onOpenLegal }: ApplicationFormProps) {
  const { t, requestedLoanAmount } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState<number | string>(requestedLoanAmount);
  const [loanPurpose, setLoanPurpose] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Keep loanAmount in sync when user clicks "Apply with these details"
  useEffect(() => {
    if (requestedLoanAmount) {
      setLoanAmount(requestedLoanAmount);
    }
  }, [requestedLoanAmount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setIdNumber('');
    setPhone('');
    setEmail('');
    setLoanPurpose('');
    setEmploymentStatus('');
    setAgreeTerms(false);
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 bg-slate-50 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-slate-100 flex flex-col items-center animate-fadeIn">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.form.successTitle}</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              {t.form.successDesc}
            </p>

            <div className="w-full bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100 max-w-md">
              <div className="flex items-center gap-2 mb-3 text-emerald-700 font-semibold text-sm">
                <FileCheck className="w-4 h-4" />
                <span>申請資料摘要 / Application Summary</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <p><span className="text-slate-400">申請人 / Applicant:</span> {fullName || 'Chan Tai Man'}</p>
                <p><span className="text-slate-400">貸款金額 / Amount:</span> HK$ {Number(loanAmount || 0).toLocaleString()}</p>
                <p><span className="text-slate-400">聯絡電話 / Contact:</span> {phone || '+852 **** ****'}</p>
                <p><span className="text-slate-400">放債人機構 / Lender:</span> 盈滙亞洲有限公司 (Granton Asia Limited)</p>
              </div>
            </div>

            <button 
              onClick={handleReset}
              className="px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              {t.form.submitAnother}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>256-bit SSL Encrypted · 香港持牌放債人</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t.form.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.form.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span>{t.form.personalDetails}</span>
                  <span className="text-xs text-emerald-600 font-normal">Part 1</span>
                </h3>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.fullName} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow text-sm"
                    placeholder={t.form.fullNamePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="idNumber" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.hkid} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="idNumber" 
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow text-sm uppercase"
                    placeholder={t.form.hkidPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.phone} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow text-sm"
                    placeholder={t.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.email} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow text-sm"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Loan Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span>{t.form.loanRequirements}</span>
                  <span className="text-xs text-emerald-600 font-normal">Part 2</span>
                </h3>
                
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.loanAmount} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-400 font-semibold text-sm">HK$</span>
                    <input 
                      type="number" 
                      id="loanAmount" 
                      min="10000"
                      max="1000000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      required 
                      className="w-full pl-13 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow text-sm font-medium"
                      placeholder={t.form.loanAmountPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="loanPurpose" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.loanPurpose} <span className="text-rose-500">*</span>
                  </label>
                  <select 
                    id="loanPurpose" 
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow bg-white text-sm"
                  >
                    <option value="">{t.form.selectPurpose}</option>
                    <option value="debt_consolidation">{t.form.purposeOptions.debtConsolidation}</option>
                    <option value="home_renovation">{t.form.purposeOptions.homeRenovation}</option>
                    <option value="business">{t.form.purposeOptions.business}</option>
                    <option value="education">{t.form.purposeOptions.education}</option>
                    <option value="medical">{t.form.purposeOptions.medical}</option>
                    <option value="other">{t.form.purposeOptions.other}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="employmentStatus" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.employmentStatus} <span className="text-rose-500">*</span>
                  </label>
                  <select 
                    id="employmentStatus" 
                    value={employmentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow bg-white text-sm"
                  >
                    <option value="">{t.form.selectEmployment}</option>
                    <option value="full_time">{t.form.employmentOptions.fullTime}</option>
                    <option value="part_time">{t.form.employmentOptions.partTime}</option>
                    <option value="self_employed">{t.form.employmentOptions.selfEmployed}</option>
                    <option value="unemployed">{t.form.employmentOptions.unemployed}</option>
                  </select>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100/80">
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    💡 提示：提交申請後，盈滙亞洲信貸專員會核實資料並致電確認，毋須親臨分行即可辦妥手續。
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-start mb-8">
                <div className="flex items-center h-5 mt-0.5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer"
                  />
                </div>
                <label htmlFor="terms" className="ml-3 text-xs sm:text-sm text-slate-500 leading-relaxed cursor-pointer select-none">
                  {t.form.termsAgreePrefix}
                  <button
                    type="button"
                    onClick={() => onOpenLegal?.('terms')}
                    className="text-emerald-600 hover:underline font-semibold mx-1 cursor-pointer"
                  >
                    {t.form.termsLink}
                  </button>
                  {t.form.termsAnd}
                  <button
                    type="button"
                    onClick={() => onOpenLegal?.('privacy')}
                    className="text-emerald-600 hover:underline font-semibold mx-1 cursor-pointer"
                  >
                    {t.form.privacyLink}
                  </button>
                  {t.form.termsAnd}
                  <button
                    type="button"
                    onClick={() => onOpenLegal?.('pics')}
                    className="text-emerald-600 hover:underline font-semibold mx-1 cursor-pointer"
                  >
                    {t.form.picsLink}
                  </button>
                  {t.form.termsAgreeSuffix}
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !agreeTerms}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-emerald-600 text-white text-base font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-md shadow-emerald-900/20 disabled:opacity-60 disabled:cursor-not-allowed focus:ring-4 focus:ring-emerald-600/30 cursor-pointer"
              >
                {isSubmitting ? t.form.submitting : t.form.submit}
                {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
