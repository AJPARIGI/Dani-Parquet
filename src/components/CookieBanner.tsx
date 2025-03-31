import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const translations = {
  it: {
    message: "Questo sito utilizza i cookie per migliorare la tua esperienza di navigazione. Continuando a navigare sul sito, accetti la nostra politica sui cookie.",
    accept: "Accetta",
    closeAriaLabel: "Chiudi banner cookie"
  },
  en: {
    message: "This website uses cookies to enhance your browsing experience. By continuing to browse the site, you accept our cookie policy.",
    accept: "Accept",
    closeAriaLabel: "Close cookie banner"
  }
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'it' | 'en'>('en');

  useEffect(() => {
    // Check if user hasn't accepted cookies yet
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    
    // Check if browser language is Italian
    const isItalianUser = navigator.language.toLowerCase().startsWith('it');
    
    if (!hasAcceptedCookies) {
      setIsVisible(true);
      setLanguage(isItalianUser ? 'it' : 'en');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = translations[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 pr-4">
          <p className="text-sm">
            {t.message}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAccept}
            className="bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-md transition-colors text-sm"
          >
            {t.accept}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label={t.closeAriaLabel}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;