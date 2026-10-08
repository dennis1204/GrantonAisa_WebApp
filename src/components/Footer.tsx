import { Building2, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DEFAULT_SUPPORTER_EMAIL } from '../utils/enquiryService';
import { LegalDocType } from './LegalModal';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenEnquiry?: () => void;
  onOpenLegal?: (tab: LegalDocType) => void;
}

export function Footer({ onOpenEnquiry, onOpenLegal }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="pb-1">
              <BrandLogo variant="dark" size="md" />
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-1.5">
              <p className="text-emerald-400 font-bold font-mono">{t.footer.licence}</p>
              <p className="leading-relaxed">{t.contact.addressLabel}: {t.contact.addressValue}</p>
              <p className="font-mono">{t.contact.phoneLabel}: <a href="tel:+85239968798" className="hover:text-emerald-400">{t.contact.phoneValue}</a> | {t.contact.emailLabel}: <a href={`mailto:${t.contact.emailValue}`} className="hover:text-emerald-400">{t.contact.emailValue}</a></p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-slate-400">{t.common.language}:</span>
              <LanguageSwitcher variant="pill" />
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {t.footer.loanServices}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {t.footer.contactUs}
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-emerald-400 transition-colors">
                  {t.common.navApply}
                </a>
              </li>
            </ul>
          </div>

          {/* Loan Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {/* <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  私人貸款 (Personal Loan)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  卡數結餘轉戶 (Balance Transfer)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  業主物業貸款 (Property Loan)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  中小企商業貸款 (SME Loan)
                </a>
              </li> */}
            </ul>
          </div>
          
          {/* Legal and Compliance */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenLegal?.('pics')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.pics}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenLegal?.('mloSummary')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left font-medium text-slate-300"
                >
                  {t.footer.mloSummary}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenLegal?.('disclaimer')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.disclaimer}
                </button>
              </li>
              {/* <li>
                <button 
                  type="button"
                  onClick={() => onOpenLegal?.('privacy')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.privacyPolicy}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenLegal?.('terms')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.termsOfService}
                </button>
              </li> */}
            </ul>
          </div>

        </div>
        
        {/* Bottom Statutory Notice & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.allRightsReserved}</p>
          
          <div className="px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
            <p className="font-bold text-amber-300 tracking-wide text-xs sm:text-sm">
              {t.footer.statutoryWarning}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
