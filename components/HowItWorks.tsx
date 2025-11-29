import React from 'react';
import { Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="relative bg-[#151410] border border-yellow-900/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
        <div className="p-3 bg-brand-yellow/10 rounded-lg shrink-0">
             <Zap className="text-brand-yellow w-8 h-8" />
        </div>
        
        <div>
            <h3 className="text-xl font-bold text-white mb-2">Co robisz z każdym modułem?</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                <span className="text-white font-semibold">Diagnostyka:</span> Rozpoznajesz blokadę • <span className="text-white font-semibold">Ćwiczenia:</span> Praktyczne zadania do wykonania dzisiaj • <span className="text-white font-semibold">Działanie:</span> Gotowe kroki, które natychmiast implementujesz
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;