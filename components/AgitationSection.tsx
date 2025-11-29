import React from 'react';
import { XCircle, ArrowDown } from 'lucide-react';

const AgitationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-gray-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-4">
            <XCircle size={14} /> Brutalna prawda
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
          Za rok będziesz dokładnie w tym samym miejscu, <br className="hidden md:block"/>
          <span className="text-gray-500">tylko o rok starszy i bardziej sfrustrowany.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Twoje blokady same nie znikną. One rosną. Każdy dzień zwlekania to kolejny dzień, w którym <strong className="text-white">oddajesz swój potencjał walkowerem</strong>. Przestań być "ekspertem od teorii", a zacznij być ekspertem od wyników.
        </p>

        <div className="pt-8 flex justify-center">
            <ArrowDown className="text-gray-600 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;