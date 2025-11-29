import React from 'react';
import { MousePointerClick, Search, Edit3 } from 'lucide-react';
import { ProblemCardData } from '../types';

const cardData: ProblemCardData[] = [
  {
    icon: Search,
    text: "Masz otwarte 15 kart w przeglądarce i nazywasz to 'researchem', żeby nie musieć podjąć decyzji?"
  },
  {
    icon: Edit3,
    text: "Poprawiasz ten sam projekt po raz dziesiąty, bo panicznie boisz się, że ktoś go skrytykuje?"
  },
  {
    icon: MousePointerClick,
    text: "Oglądasz kolejny kurs, czując, że wciąż 'nie jesteś gotowy', podczas gdy amatorzy zarabiają Twoje pieniądze?"
  }
];

const ProblemCards: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-xl md:text-3xl font-bold text-gray-200">
            Czy któryś z tych scenariuszy <span className="text-red-500">brzmi znajomo?</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-[#0f0f0f] border border-red-900/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center hover:border-red-500/40 transition-all group hover:-translate-y-1 duration-300 shadow-lg">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-900/20 transition-colors border border-gray-800 group-hover:border-red-500/30">
              <card.icon className="text-gray-400 group-hover:text-red-500 w-6 h-6 md:w-8 md:h-8 transition-colors" />
            </div>
            <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed">
              "{card.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemCards;