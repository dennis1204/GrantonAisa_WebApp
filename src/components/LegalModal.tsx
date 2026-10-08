import React, { useState, useEffect } from 'react';
import { X, FileText, Shield, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type LegalDocType = 'pics' | 'mloSummary' | 'disclaimer' | 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalDocType;
}

export function LegalModal({ isOpen, onClose, initialTab = 'pics' }: LegalModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                法律及監管聲明 (Legal & Compliance)
              </h3>
              <p className="text-xs text-slate-400">
                盈滙亞洲有限公司 · Granton Asia Limited
              </p>
            </div>
          </div>

          <button 
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 px-6 pt-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('pics')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pics'
                ? 'border-emerald-600 text-emerald-700 bg-white rounded-t-xl'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>{t.legal.tabs.pics}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mloSummary')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mloSummary'
                ? 'border-emerald-600 text-emerald-700 bg-white rounded-t-xl'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.legal.tabs.mloSummary}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('disclaimer')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'disclaimer'
                ? 'border-emerald-600 text-emerald-700 bg-white rounded-t-xl'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{t.legal.tabs.disclaimer}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-700 text-sm leading-relaxed">
          
          {/* PICS TAB */}
          {activeTab === 'pics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  香港法例第486章《個人資料（私隱）條例》
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {t.legal.picsContent.title}
                </h4>
              </div>

              <div className="space-y-6">
                {t.legal.picsContent.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    <h5 className="font-bold text-slate-900 text-sm mb-2 text-emerald-950">
                      {sec.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MLO SUMMARY TAB */}
          {activeTab === 'mloSummary' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  香港法例第163章《放債人條例》第18條及附表4
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {t.legal.mloContent.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  {t.legal.mloContent.preamble}
                </p>
              </div>

              <div className="space-y-4">
                {t.legal.mloContent.provisions.map((prov, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        {prov.section}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">
                        {prov.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prov.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold">
                忠告：借錢梗要還，咪俾錢中介 (Warning: You have to repay your loans. Don't pay any intermediaries.)
              </div>
            </div>
          )}

          {/* DISCLAIMER TAB */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  法律免責聲明與使用條款
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {t.legal.disclaimerContent.title}
                </h4>
              </div>

              <div className="space-y-4">
                {t.legal.disclaimerContent.paragraphs.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            盈滙亞洲有限公司 · Granton Asia Limited
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            已閱讀並關閉
          </button>
        </div>

      </div>
    </div>
  );
}
