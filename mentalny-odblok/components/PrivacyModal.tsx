import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-gray-800 rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-[#151515] rounded-t-xl">
          <h2 className="text-xl md:text-2xl font-bold text-white">Polityka Prywatności</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed space-y-6 custom-scrollbar">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Polityka Prywatności</h3>
            <p className="text-brand-yellow font-semibold">Data ostatniej aktualizacji: 27.11.2025</p>
            <p className="mt-2">
              Szanujemy Twoją prywatność. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe podczas korzystania ze strony internetowej działającej pod adresem mentalnystart.pl
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§1. Administrator Danych Osobowych</h4>
            <p>
              Administratorem Twoich danych osobowych jest: <strong>Adrian Turoń</strong>, zamieszkały przy: <strong>Kłoczowskiego 31 82-300, Elbląg</strong>. Kontakt z Administratorem jest możliwy drogą elektroniczną pod adresem e-mail: <a href="mailto:kontakt@mentalnystart.pl" className="text-cyan-400 hover:underline">kontakt@mentalnystart.pl</a>.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§2. Cele i Podstawy Przetwarzania Danych</h4>
            <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Realizacja zamówienia (umowy sprzedaży):</strong> W przypadku zakupu produktu cyfrowego (Workbooka), Twoje dane (głównie adres e-mail) są niezbędne do dostarczenia zakupionej treści. Podstawą prawną jest niezbędność do wykonania umowy (art. 6 ust. 1 lit. b RODO).</li>
              <li><strong>Obsługa zapytań i reklamacji:</strong> Jeśli skontaktujesz się z nami mailowo. Podstawą jest nasz prawnie uzasadniony interes polegający na komunikacji z użytkownikami (art. 6 ust. 1 lit. f RODO).</li>
              <li><strong>Cele analityczne i marketingowe (w tym pliki cookies):</strong> Analiza ruchu na stronie oraz prowadzenie działań marketingowych (np. reklamy na Facebooku) przy użyciu narzędzi zewnętrznych. Podstawą jest Twoja zgoda wyrażona poprzez ustawienia przeglądarki lub baner cookies (art. 6 ust. 1 lit. a RODO) oraz nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§3. Odbiorcy Danych</h4>
            <p>Twoje dane mogą być przekazywane podmiotom trzecim, które wspierają nas w prowadzeniu Serwisu (tzw. procesorzy danych). Są to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Operator płatności i platforma sprzedażowa:</strong> Naffy (naffy sp. z o.o.) – w celu procesowania transakcji i dostarczenia produktu.</li>
              <li><strong>Dostawca hostingu:</strong> Vercel Inc. – w celu utrzymania strony internetowej.</li>
              <li><strong>Dostawcy narzędzi analitycznych i marketingowych:</strong> Meta Platforms Ireland Ltd. (Facebook Pixel) – w celu analizy skuteczności reklam i remarketingu.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§4. Pliki Cookies i Narzędzia Śledzące</h4>
            <p>Serwis wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na Twoim urządzeniu końcowym (np. komputerze, smartfonie).</p>
            <p className="mt-2">Stosujemy cookies w celach:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Niezbędnych:</strong> do prawidłowego działania strony.</li>
              <li><strong>Analitycznych i Marketingowych:</strong> korzystamy z Piksela Facebooka (Meta Pixel). Narzędzie to pozwala nam mierzyć skuteczność reklam na Facebooku i Instagramie oraz wyświetlać nasze reklamy osobom, które odwiedziły wcześniej Serwis. Wiąże się to z wykorzystaniem plików cookies firmy Meta Platforms.</li>
            </ul>
            <p className="mt-2">Masz możliwość ograniczenia lub wyłączenia dostępu plików cookies do swojego urządzenia w ustawieniach przeglądarki internetowej. Pamiętaj jednak, że może to wpłynąć na niektóre funkcjonalności Serwisu.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§5. Twoje Prawa</h4>
            <p>Zgodnie z RODO przysługuje Ci prawo do:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
              <li>Sprostowania (poprawiania) swoich danych.</li>
              <li>Usunięcia danych (jeśli nie ma innych prawnych podstaw do ich przetwarzania).</li>
              <li>Ograniczenia przetwarzania danych.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
              <li>Przenoszenia danych.</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>
            <p className="mt-2">W celu realizacji swoich praw skontaktuj się z Administratorem pod adresem e-mail wskazanym w §1.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 bg-[#151515] rounded-b-xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;