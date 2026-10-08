/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { LoanServices } from './components/LoanServices';
import { ApplicationForm } from './components/ApplicationForm';
import { ContactUs } from './components/ContactUs';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalDocType>('pics');

  const handleOpenLegal = (tab: LegalDocType = 'pics') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900 relative">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <LoanServices />
          {/* 申請流程, 貸款計算機 are temporarily hidden per user request */}
          <ApplicationForm onOpenLegal={handleOpenLegal} />
          <ContactUs />
          {/* 專人查詢 is temporarily hidden per user request */}
        </main>
        
        <Footer onOpenLegal={handleOpenLegal} />

        {/* Legal & Regulatory Modal (PICS, MLO Summary, Disclaimer, Privacy, Terms) */}
        <LegalModal 
          isOpen={isLegalModalOpen} 
          onClose={handleCloseLegal} 
          initialTab={legalModalTab}
        />
      </div>
    </LanguageProvider>
  );
}
