import React from 'react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="w-full bg-[#020202] border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Mentalny Start</h3>
          <p className="text-gray-500 text-sm">Pokonaj blokady mentalne i odbierz swój potencjał</p>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <button 
            onClick={onOpenTerms}
            className="hover:text-white transition-colors text-left"
          >
            Regulamin
          </button>
          <button 
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors text-left"
          >
            Polityka Prywatności
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-xs text-gray-600">
        © 2025 Mentalny Start. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;