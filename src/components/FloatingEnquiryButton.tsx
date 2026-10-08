import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FloatingEnquiryButtonProps {
  onClick: () => void;
}

export function FloatingEnquiryButton({ onClick }: FloatingEnquiryButtonProps) {
  const { t } = useLanguage();

  return (
    <aside 
      aria-label="Customer Enquiry"
      className="fixed bottom-6 right-6 z-40"
    >
      <button
        type="button"
        onClick={onClick}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-slate-900 hover:bg-emerald-700 text-white rounded-full shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={t.enquiry.floatingButtonLabel}
      >
        {/* Pulse indicator for online status */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>

        <div className="w-5 h-5 flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
          <MessageSquare className="w-4 h-4" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-bold tracking-tight">
            {t.enquiry.floatingButtonLabel}
          </span>
          <span className="text-[10px] text-emerald-400 group-hover:text-emerald-200 font-medium -mt-0.5">
            {t.enquiry.floatingBadge}
          </span>
        </div>
      </button>
    </aside>
  );
}
