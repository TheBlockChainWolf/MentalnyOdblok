import React from 'react';
import { XCircle, ArrowDown } from 'lucide-react';

const AgitationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-gray-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-4">
            <XCircle size={14} /> Ważna perspektywa
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
          Bez zmiany strategii, za rok można być <br className="hidden md:block"/>
          <span className="text-gray-500">dokładnie w tym samym miejscu.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Blokady mentalne rzadko znikają same. Często rosną. Każdy dzień zwlekania to czas, w którym potencjał pozostaje niewykorzystany. Warto przestać być teoretykiem, a stać się praktykiem.
        </p>

        <div className="pt-8 flex justify-center">
            <ArrowDown className="text-gray-600 animate-bounce cursor-pointer hover:text-white transition-colors" size={32} onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;