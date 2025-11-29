import React from 'react';
import { AlertCircle } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#cc0000] text-white text-[10px] sm:text-xs md:text-sm font-bold py-2 px-2 md:px-4 flex justify-center items-center gap-2 sticky top-0 z-50 shadow-md">
      <AlertCircle size={14} className="text-white shrink-0" />
      <span className="text-center truncate">
        Tylko DZISIAJ: Cena 37 zł. PROMOCJA
      </span>
    </div>
  );
};

export default TopBar;