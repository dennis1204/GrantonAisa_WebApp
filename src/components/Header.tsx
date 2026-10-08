import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export function Header({ onOpenEnquiry }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="group flex items-center py-2">
            <BrandLogo variant="light" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7 items-center">
            <a 
              href="#about" 
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {t.common.navAbout}
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {t.common.navServices}
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {t.common.navContact}
            </a>

            {/* Language Switcher Button */}
            <div className="flex items-center pl-2 border-l border-slate-200">
              <LanguageSwitcher variant="pill" />
            </div>

            <a 
              href="#apply" 
              className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.common.navApply}
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2.5 md:hidden">
            <LanguageSwitcher variant="pill" />
            
            <button 
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
          >
            {t.common.navAbout}
          </a>
          <a 
            href="#services" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
          >
            {t.common.navServices}
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
          >
            {t.common.navContact}
          </a>

          <LanguageSwitcher variant="mobile" />

          <a 
            href="#apply" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-4 py-3 bg-emerald-600 text-center text-sm font-bold text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-xs"
          >
            {t.common.navApply}
          </a>
        </div>
      )}
    </header>
  );
}
