import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Copy, 
  Check, 
  Mail, 
  Clock, 
  History, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  DEFAULT_SUPPORTER_EMAIL, 
  getStoredEnquiries, 
  saveEnquiry, 
  generateEnquiryId, 
  createMailtoLink, 
  formatEnquiryPlainText 
} from '../utils/enquiryService';
import { EnquiryRecord } from '../types/enquiry';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultTopic = '' }: EnquiryModalProps) {
  const { t, language } = useLanguage();
  
  const [activeTab, setActiveTab] = useState<'new' | 'history'>('new');
  const [supporterEmail, setSupporterEmail] = useState(DEFAULT_SUPPORTER_EMAIL);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [category, setCategory] = useState(defaultTopic || 'eligibility');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryRecord | null>(null);

  if (!isOpen) return null;

  const pastEnquiries = getStoredEnquiries();

  const getCategoryLabel = (catKey: string) => {
    const cats = t.enquiry.categories as Record<string, string>;
    return cats[catKey] || catKey;
  };

  const handleSubmit = (e: React.FormEvent, method: 'direct' | 'mailto' = 'direct') => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setIsSubmitting(true);

    const record: EnquiryRecord = {
      id: generateEnquiryId(),
      supporterEmail,
      senderName,
      senderEmail,
      senderPhone,
      category,
      categoryLabel: getCategoryLabel(category),
      subject: subject || getCategoryLabel(category),
      message,
      timestamp: new Date().toISOString(),
      status: 'sent',
    };

    // Save record to local storage
    saveEnquiry(record);

    // If method is mailto, construct link and navigate
    const mailto = createMailtoLink(record);
    if (method === 'mailto') {
      window.location.href = mailto;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 400);
  };

  const handleCopyText = (record: EnquiryRecord) => {
    const text = formatEnquiryPlainText(record);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setSenderName('');
    setSenderEmail('');
    setSenderPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {t.enquiry.heading}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500 text-white">
                  {t.enquiry.floatingBadge}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {t.enquiry.responseTimeNote}
              </p>
            </div>
          </div>
          
          <button 
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-slate-200 bg-slate-50/70 px-6 pt-3">
          <button
            type="button"
            onClick={() => setActiveTab('new')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'new'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{t.enquiry.newEnquiryTab}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'history'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <History className="w-4 h-4" />
            <span>{t.enquiry.viewHistoryTab}</span>
            {pastEnquiries.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                {pastEnquiries.length}
              </span>
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'new' ? (
            submittedRecord ? (
              /* Success / Dispatched Screen */
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  {t.enquiry.successTitle}
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  {t.enquiry.successDesc}
                </p>

                {/* Dispatch Details Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs text-slate-700 mb-6 max-w-lg mx-auto space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-400 font-medium">{t.enquiry.ticketLabel}:</span>
                    <span className="font-mono font-bold text-emerald-700">{submittedRecord.id}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-400 font-medium">{t.enquiry.dispatchedToLabel}:</span>
                    <span className="font-semibold text-slate-800">{submittedRecord.supporterEmail}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-400 font-medium">{t.enquiry.category}:</span>
                    <span className="font-medium text-slate-800">{submittedRecord.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">{t.enquiry.timeLabel}:</span>
                    <span className="text-slate-600">{new Date(submittedRecord.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={createMailtoLink(submittedRecord)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-xs text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.enquiry.openInEmailAppBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyText(submittedRecord)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors text-xs sm:text-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t.enquiry.copied : t.enquiry.copyEmailBtn}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-xs sm:text-sm"
                  >
                    {t.enquiry.newEnquiryTab}
                  </button>
                </div>
              </div>
            ) : (
              /* New Enquiry Form */
              <form onSubmit={(e) => handleSubmit(e, 'mailto')} className="space-y-5">
                {/* Supporter Target Info Banner */}
                <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs leading-relaxed flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span className="font-bold text-emerald-900">
                        {t.enquiry.supporterTargetLabel}:
                      </span>
                      <code className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[11px]">
                        {supporterEmail}
                      </code>
                    </div>
                    <p className="text-emerald-700">
                      {t.enquiry.supporterEmailNote}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.enquiry.name} <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={t.enquiry.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.enquiry.email} <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder={t.enquiry.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.enquiry.phone}
                    </label>
                    <input 
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder={t.enquiry.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.enquiry.category} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow bg-white"
                    >
                      <option value="eligibility">{t.enquiry.categories.eligibility}</option>
                      <option value="ratesAndTerms">{t.enquiry.categories.ratesAndTerms}</option>
                      <option value="applicationStatus">{t.enquiry.categories.applicationStatus}</option>
                      <option value="documents">{t.enquiry.categories.documents}</option>
                      <option value="earlyRepayment">{t.enquiry.categories.earlyRepayment}</option>
                      <option value="other">{t.enquiry.categories.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.enquiry.subject}
                  </label>
                  <input 
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.enquiry.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.enquiry.message} <span className="text-rose-500">*</span>
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.enquiry.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-shadow resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SSL 256-bit Secure Routing</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={(e) => handleSubmit(e, 'direct')}
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {t.enquiry.copyEmailBtn}
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-900/20 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.enquiry.sending : t.enquiry.sendToSupporterBtn}</span>
                    </button>
                  </div>
                </div>
              </form>
            )
          ) : (
            /* History Tab */
            <div className="space-y-4">
              {pastEnquiries.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <History className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">{t.enquiry.noHistoryText}</p>
                </div>
              ) : (
                pastEnquiries.map((enq) => (
                  <div 
                    key={enq.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 hover:border-emerald-200 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-emerald-700">{enq.id}</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-medium">
                          {enq.categoryLabel}
                        </span>
                      </div>
                      <span className="text-slate-400">
                        {new Date(enq.timestamp).toLocaleDateString()} {new Date(enq.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <p className="font-semibold text-slate-800 text-sm">{enq.subject}</p>
                    <p className="text-slate-600 line-clamp-2">{enq.message}</p>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span>已送往 / To: <span className="font-mono">{enq.supporterEmail}</span></span>
                      <a 
                        href={createMailtoLink(enq)}
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Resend Email</span>
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
