import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'dropdown' | 'mobile';
  className?: string;
}

export function LanguageSwitcher({ variant = 'pill', className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'pill') {
    return (
      <div 
        className={`inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 shadow-xs text-xs font-semibold ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => setLanguage('zh-HK')}
          className={`flex items-center px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
            language === 'zh-HK'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
          title="切換至繁體中文"
        >
          <span>繁中</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
            language === 'en'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
          title="Switch to English"
        >
          <span>EN</span>
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`pt-2 pb-1 border-t border-slate-100 ${className}`}>
        <div className="flex items-center justify-between px-3 py-2 text-sm text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>語言 / Language</span>
          </span>
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setLanguage('zh-HK')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                language === 'zh-HK'
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              繁體中文
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                language === 'en'
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dropdown style with explicit Translate label
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-emerald-600" />
        <span>{language === 'zh-HK' ? '繁體中文' : 'English'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-36 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 border border-slate-100 py-1">
          <button
            onClick={() => {
              setLanguage('zh-HK');
              setIsOpen(false);
            }}
            className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${
              language === 'zh-HK' ? 'font-semibold text-emerald-600 bg-emerald-50/50' : 'text-slate-700'
            }`}
          >
            <span>繁體中文 (HK)</span>
            {language === 'zh-HK' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
          </button>
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${
              language === 'en' ? 'font-semibold text-emerald-600 bg-emerald-50/50' : 'text-slate-700'
            }`}
          >
            <span>English</span>
            {language === 'en' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
          </button>
        </div>
      )}
    </div>
  );
}
