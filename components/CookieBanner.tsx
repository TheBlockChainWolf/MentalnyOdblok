import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź czy zgoda została już zapisana
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#111111] border-t border-gray-800 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
         
         <div className="flex items-start md:items-center gap-4">
            <div className="p-2 bg-gray-800 rounded-lg shrink-0 hidden md:block">
                <Cookie className="text-brand-yellow w-6 h-6" />
            </div>
            <div className="text-xs md:text-sm text-gray-400 leading-relaxed">
                <p>
                    Ta strona używa plików cookies, aby zapewnić Ci najlepsze doświadczenie oraz w celach marketingowych (Facebook Pixel). Korzystając ze strony, zgadzasz się na ich użycie zgodnie z naszą{' '}
                    <button 
                        onClick={onOpenPrivacy} 
                        className="text-white underline underline-offset-2 hover:text-brand-yellow transition-colors font-medium"
                    >
                        Polityką Prywatności
                    </button>.
                </p>
            </div>
         </div>

         <div className="w-full md:w-auto shrink-0">
            <button
                onClick={handleAccept}
                className="w-full md:w-auto px-6 py-3 bg-brand-yellow hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors shadow-lg active:scale-95 transform"
            >
                Akceptuję
            </button>
         </div>
      </div>
    </div>
  );
};

export default CookieBanner;