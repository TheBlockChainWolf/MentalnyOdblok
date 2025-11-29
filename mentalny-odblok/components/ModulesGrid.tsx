import React, { useState } from 'react';
import { MODULES } from '../constants';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const themeColors = {
  brown: 'border-orange-900/40 bg-orange-950/10 hover:border-orange-700/60 text-orange-500',
  green: 'border-emerald-900/40 bg-emerald-950/10 hover:border-emerald-700/60 text-emerald-500',
  blue: 'border-cyan-900/40 bg-cyan-950/10 hover:border-cyan-700/60 text-cyan-500',
  purple: 'border-purple-900/40 bg-purple-950/10 hover:border-purple-700/60 text-purple-500',
  red: 'border-rose-900/40 bg-rose-950/10 hover:border-rose-700/60 text-rose-500',
};

const ModulesGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedModules = showAll ? MODULES : MODULES.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          18 Modułów = 18 Rozwiązań
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Każdy moduł to konkretna blokada, którą poznasz na własnej skórze, i praktyczne narzędzie, które zmieni Twoją perspektywę.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayedModules.map((module) => (
          <div 
            key={module.id} 
            className={`relative p-6 md:p-8 rounded-lg border transition-all duration-300 ${themeColors[module.themeColor]} flex flex-col justify-between h-full group`}
          >
            <div>
                <div className="flex items-baseline gap-3 mb-3 md:mb-4">
                <span className={`text-3xl md:text-4xl font-black opacity-40 group-hover:opacity-100 transition-opacity`}>
                    {String(module.id).padStart(2, '0')}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{module.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
                {module.description}
                </p>
            </div>

            <div className="pt-4 md:pt-6 border-t border-white/5 flex items-center gap-2 text-xs md:text-sm font-semibold">
              <Sparkles size={14} className={themeColors[module.themeColor].split(' ').pop()} />
              <span className="text-brand-yellow">{module.transformation}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#1a1a1a] border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow/10 rounded-lg font-bold transition-all text-sm md:text-base active:bg-brand-yellow/20"
        >
          {showAll ? (
            <>
              Schowaj moduły <ChevronUp size={20} />
            </>
          ) : (
            <>
              Pokaż pozostałe 12 modułów <ChevronDown size={20} />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default ModulesGrid;