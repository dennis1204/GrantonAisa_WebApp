import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  requestedLoanAmount: number;
  setRequestedLoanAmount: (amount: number) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('granton_lang') as Language;
      if (saved === 'zh-HK' || saved === 'en') {
        return saved;
      }
    }
  } catch (e) {
    // LocalStorage might be restricted in sandboxed iframes
    console.warn('LocalStorage access restricted:', e);
  }

  try {
    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
      return 'en';
    }
  } catch (e) {
    console.warn('Navigator language access error:', e);
  }

  return 'zh-HK';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [requestedLoanAmount, setRequestedLoanAmount] = useState<number>(100000);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('granton_lang', lang);
      }
    } catch (e) {
      console.warn('Failed to save language to localStorage:', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh-HK' ? 'en' : 'zh-HK');
  };

  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
        if (language === 'zh-HK') {
          document.title = '盈滙亞洲有限公司 Granton Asia Limited - 專業持牌信貸及私人貸款平台';
        } else {
          document.title = 'Granton Asia Limited - Licensed Money Lender & Loan Platform';
        }
      }
    } catch (e) {
      console.warn('Failed to update document title or lang:', e);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language] || translations['zh-HK'],
    requestedLoanAmount,
    setRequestedLoanAmount,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
