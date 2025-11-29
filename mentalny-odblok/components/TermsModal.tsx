import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
          <h2 className="text-xl md:text-2xl font-bold text-white">Regulamin Sprzedaży</h2>
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
            <h3 className="text-white font-bold text-lg mb-2">Regulamin Sprzedaży Produktów Cyfrowych</h3>
            <p className="text-brand-yellow font-semibold">Ważny od dnia: 27.11.2025</p>
            <p className="mt-2">
              Niniejszy Regulamin określa zasady sprzedaży treści cyfrowych (e-booków/workbooków) za pośrednictwem strony internetowej mentalnystart.pl.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§1. Postanowienia Ogólne i Dane Sprzedawcy</h4>
            <p>
              Właścicielem serwisu i Sprzedawcą jest: <strong>Adrian Turoń</strong>, zamieszkały przy: <strong>Kłoczowskiego 31, 82-300 Elbląg</strong> (dalej "Sprzedawca"). Sprzedaż prowadzona jest w ramach działalności nierejestrowanej.
            </p>
            <p className="mt-2">
              Kontakt ze Sprzedawcą: <a href="mailto:kontakt@mentalnystart.pl" className="text-cyan-400 hover:underline">kontakt@mentalnystart.pl</a>.
            </p>
            <p className="mt-2">
              Regulamin skierowany jest do konsumentów oraz przedsiębiorców dokonujących zakupu w Serwisie.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§2. Przedmiot Sprzedaży</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Przedmiotem sprzedaży są treści cyfrowe (Produkty), w szczególności workbook w formacie PDF pt. "Mentalny Start".</li>
              <li>Produkty są wolne od wad fizycznych i prawnych.</li>
              <li>Ceny podane na stronie są cenami brutto (zawierają wszystkie należne podatki) i są wyrażone w złotych polskich (PLN).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§3. Proces Składania Zamówienia i Dostawa</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Zakup Produktu następuje poprzez kliknięcie przycisku "Kup teraz" (lub równoważnego) na stronie mentalnystart.pl, co powoduje przekierowanie do zewnętrznej platformy sprzedażowej i płatniczej Naffy, obsługiwanej przez naffy sp. z o.o.</li>
              <li>Klient dokonuje płatności za pomocą metod udostępnionych przez platformę Naffy (np. BLIK, karta płatnicza, szybki przelew).</li>
              <li>Umowa sprzedaży zostaje zawarta z chwilą skutecznego dokonania płatności przez Klienta.</li>
              <li><strong>Dostawa:</strong> Produkt cyfrowy jest dostarczany niezwłocznie po zaksięgowaniu wpłaty, drogą elektroniczną, na adres e-mail podany przez Klienta podczas składania zamówienia. Dostawa polega na przesłaniu linku umożliwiającego pobranie pliku PDF. Dostawa jest darmowa.</li>
            </ul>
          </div>

          <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
            <h4 className="text-white font-bold mb-2">§4. Prawo Odstąpienia od Umowy (Ważne!)</h4>
            <p className="mb-2">
              Konsumentowi co do zasady przysługuje prawo do odstąpienia od umowy zawartej na odległość w terminie 14 dni bez podania przyczyny.
            </p>
            <p className="font-bold text-red-400 mb-2">WYJĄTEK DOTYCZĄCY TREŚCI CYFROWYCH:</p>
            <p className="italic mb-2">
              Zgodnie z art. 38 pkt 13 Ustawy o prawach konsumenta, prawo odstąpienia od umowy zawartej poza lokalem przedsiębiorstwa lub na odległość nie przysługuje konsumentowi w odniesieniu do umów o dostarczanie treści cyfrowych, które nie są zapisane na nośniku materialnym (np. plik PDF pobierany z internetu), jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez przedsiębiorcę o utracie prawa odstąpienia od umowy.
            </p>
            <p>
              Dokonując zakupu i pobierając plik, Klient wyraża zgodę na dostarczenie treści cyfrowej przed upływem terminu do odstąpienia od umowy i przyjmuje do wiadomości utratę prawa do odstąpienia od umowy.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§5. Reklamacje</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sprzedawca ma obowiązek dostarczyć Produkt zgodny z umową.</li>
              <li>W przypadku stwierdzenia wad Produktu (np. uszkodzony plik, brak możliwości pobrania), Klient może złożyć reklamację drogą elektroniczną na adres e-mail Sprzedawcy.</li>
              <li>Reklamacja powinna zawierać dane Klienta, opis problemu oraz żądanie Klienta.</li>
              <li>Sprzedawca ustosunkuje się do reklamacji w terminie 14 dni od jej otrzymania.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">§6. Wymagania Techniczne</h4>
            <p>Do dokonania zakupu i korzystania z Produktu niezbędne są:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Urządzenie z dostępem do Internetu.</li>
              <li>Aktywny adres e-mail.</li>
              <li>Standardowa przeglądarka internetowa.</li>
              <li>Oprogramowanie umożliwiające otwieranie plików w formacie PDF (np. darmowy Adobe Acrobat Reader).</li>
            </ul>
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

export default TermsModal;