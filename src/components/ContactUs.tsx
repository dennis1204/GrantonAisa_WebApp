import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { 
  DEFAULT_SUPPORTER_EMAIL, 
  saveEnquiry, 
  generateEnquiryId, 
  createMailtoLink 
} from '../utils/enquiryService';
import { EnquiryRecord } from '../types/enquiry';

export function ContactUs() {
  const { t, language } = useLanguage();

  // Enquiry Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryRecord | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const isZh = language === 'zh-HK';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!name.trim()) {
      setErrorMessage(isZh ? '請輸入您的姓名或稱謂。' : 'Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage(isZh ? '請輸入有效的聯絡電郵地址。' : 'Please enter a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage(isZh ? '請輸入詳細查詢內容（至少 5 個字元）。' : 'Please enter your enquiry content (at least 5 characters).');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & save record
    setTimeout(() => {
      const newRecord: EnquiryRecord = {
        id: generateEnquiryId(),
        supporterEmail: DEFAULT_SUPPORTER_EMAIL,
        senderName: name.trim(),
        senderEmail: email.trim(),
        senderPhone: phone.trim() || '未提供 / Not provided',
        category: 'general',
        categoryLabel: isZh ? '按揭及一般信貸查詢' : 'Mortgage & General Financing',
        subject: isZh ? `按揭信貸查詢 - ${name.trim()}` : `Mortgage Enquiry from ${name.trim()}`,
        message: message.trim(),
        timestamp: new Date().toISOString(),
        status: 'sent',
      };

      saveEnquiry(newRecord);
      setSubmittedRecord(newRecord);
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmittedRecord(null);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-200">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isZh ? '聯絡我們 ｜ Contact Us' : 'Contact Us ｜ 聯絡我們'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {isZh ? '聯絡盈滙亞洲與在線查詢' : 'Contact Granton Asia & Online Enquiry'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {isZh 
              ? '歡迎致電、電郵或於下方即時填寫表格提交查詢，我們的按揭與信貸顧問將第一時間為您跟進。'
              : 'Feel free to call, email, or submit an enquiry via the form below. Our financing specialists will follow up promptly.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column (5 cols): Company Info & Direct Channels */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-7">
            {/* Brand Header */}
            <div className="pb-6 border-b border-slate-100">
              <BrandLogo variant="light" size="md" />
              <p className="text-xs text-emerald-700 font-semibold mt-3">
                {t.contact.licenceNo}
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-5 text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-slate-400 mb-0.5">{t.contact.addressLabel}</p>
                  <p className="font-bold text-slate-900 leading-relaxed text-sm">{t.contact.addressValue}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Unit C2, 22/F, T G Place, 10 Shing Yip Street, Kwun Tong, Kowloon, Hong Kong
                  </p>
                  <p className="text-[11px] text-emerald-700 font-medium mt-1">
                    {t.contact.directions}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-slate-400 mb-0.5">{t.contact.phoneLabel}</p>
                  <a 
                    href="tel:+85239968798" 
                    className="font-bold text-slate-900 text-base hover:text-emerald-600 transition-colors"
                  >
                    +852 3996 8798
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-slate-400 mb-0.5">{t.contact.emailLabel}</p>
                  <a 
                    href="mailto:sales@grantonasia.com.hk" 
                    className="font-bold text-emerald-700 hover:underline break-all font-mono text-sm"
                  >
                    sales@grantonasia.com.hk
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-slate-400 mb-0.5">{t.contact.whatsappLabel}</p>
                  <a 
                    href="https://wa.me/85239968798" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-slate-900 text-sm hover:text-emerald-600 transition-colors"
                  >
                    +852 3996 8798
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-slate-400 mb-0.5">{t.contact.hoursLabel}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a 
                href="https://wa.me/85239968798"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp 諮詢</span>
              </a>
              <a 
                href="tel:+85239968798"
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>致電專員</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

            {!submittedRecord ? (
              // Form view
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {isZh ? '在線提交查詢' : 'Submit Your Enquiry'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {isZh 
                        ? '請填寫您的稱謂、電郵及查詢內容，專員將直接接收並迅速跟進。' 
                        : 'Please enter your name, email, and enquiry message. We will respond promptly.'}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isZh ? '24小時內回覆' : '24h Response'}</span>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-rose-700 text-xs font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name block */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {isZh ? '姓名 / 稱謂' : 'Your Name'} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isZh ? '例如：陳先生 / Mr. Chan' : 'e.g. Mr. Chan'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm text-slate-900 transition-all bg-white"
                      />
                    </div>

                    {/* Email block */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {isZh ? '聯絡電郵' : 'Email Address'} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm text-slate-900 transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isZh ? '聯絡電話 / WhatsApp (選填)' : 'Contact Phone / WhatsApp (Optional)'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+852 9876 5432"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm text-slate-900 transition-all bg-white"
                    />
                  </div>

                  {/* Email Content / Message block */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        {isZh ? '查詢內容' : 'Enquiry Content / Message'} <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {isZh ? '接收信箱：sales@grantonasia.com.hk' : 'To: sales@grantonasia.com.hk'}
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isZh 
                        ? '請輸入您想了解的按揭貸款、物業融資或一般信貸問題，例如：物業估價、貸款期數、還款責任或利率安排等...'
                        : 'Please describe your mortgage or financing enquiry in detail, including property type, desired financing amount, or specific questions...'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm text-slate-900 transition-all bg-white resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                    {isZh
                      ? '本公司嚴格遵守《個人資料（私隱）條例》，所收集之姓名、電郵及查詢內容僅用於回覆客戶信貸諮詢，絕不向第三方外洩。'
                      : 'Granton Asia strictly complies with the Personal Data (Privacy) Ordinance. Submitted details are used solely to address your enquiry.'}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{isZh ? '正在提交查詢...' : 'Submitting Enquiry...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isZh ? '提交查詢' : 'Submit Enquiry'}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              // Success confirmation state
              <div className="py-6 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  {isZh ? '查詢已成功提交！' : 'Enquiry Submitted Successfully!'}
                </h3>
                
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  {isZh
                    ? '感謝您的查詢。我們的客戶服務經理已收到您的信息，並將於 24 小時內透過電郵或電話與您跟進。'
                    : 'Thank you for contacting Granton Asia. Our team has received your enquiry and will get back to you within 24 hours.'}
                </p>

                {/* Summary Ticket Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left mb-6 space-y-2 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-200 font-mono">
                    <span className="text-slate-500">{isZh ? '查詢編號' : 'Reference ID'}:</span>
                    <span className="font-bold text-emerald-700">{submittedRecord.id}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isZh ? '聯絡姓名' : 'Name'}:</span>
                    <span className="font-semibold text-slate-900">{submittedRecord.senderName}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isZh ? '回覆電郵' : 'Email'}:</span>
                    <span className="font-semibold text-slate-900 font-mono">{submittedRecord.senderEmail}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isZh ? '目標郵箱' : 'Sent To'}:</span>
                    <span className="font-bold text-emerald-800 font-mono">{submittedRecord.supporterEmail}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-slate-600">
                    <span className="font-semibold text-slate-700 block mb-1">{isZh ? '查詢內容摘要' : 'Message'}:</span>
                    <p className="line-clamp-3 bg-white p-2.5 rounded-lg border border-slate-200 text-slate-800 italic">
                      "{submittedRecord.message}"
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={createMailtoLink(submittedRecord)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{isZh ? '以郵件客戶端開啟備份 (Mailto)' : 'Open in Email Client'}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isZh ? '提交另一則查詢' : 'Submit Another Enquiry'}</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;
