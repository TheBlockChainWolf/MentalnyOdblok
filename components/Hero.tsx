import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-red-900/20 border border-red-500/30 rounded-full text-red-400 text-xs md:text-sm font-semibold animate-fade-in-up">
            <AlertTriangle size={14} className="md:w-4 md:h-4" />
            <span>Twój mózg Cię sabotuje. Czas to przerwać.</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Jesteś zmęczony<br />
          oglądaniem sukcesów<br />
          <span className="text-brand-yellow">LUDZI SŁABSZYCH OD CIEBIE?</span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed border-l-4 border-gray-800 pl-4 md:pl-6 italic">
          "Wiem co robić, ale tego nie robię". To nie lenistwo. To <span className="text-white font-bold">biologiczny mechanizm obronny</span>, który trzyma Cię w strefie komfortu, podczas gdy Twoje życie przecieka Ci przez palce.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:pt-4">
            <a href={CHECKOUT_URL} className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-black font-extrabold py-3.5 px-6 md:py-4 md:px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)] active:scale-95">
            <span>Przestań się blokować (37 zł)</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-xs md:text-sm text-gray-500">
                *Cena wraca do 197 zł za <span className="text-red-500 font-bold">kilka godzin</span>
            </span>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                127 osób kupiło w ostatnich 24h
            </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center z-10 relative mt-4 md:mt-0">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* 3D Book Container - Smaller on Mobile */}
        <div className="relative w-56 sm:w-72 md:w-96 aspect-[2/3] rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-12 hover:rotate-0 transition-all duration-500 perspective-1000 group">
           {/* Book spine simulation */}
           <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-[#151515] rounded-l-sm border-r border-gray-800 shadow-inner z-20"></div>
           
           {/* Cover Image */}
           <img 
              src="https://i.imgur.com/pNKtQDj.jpeg" 
              alt="Mentalny Odblok - Okładka Workbooka" 
              className="w-full h-full object-cover rounded-r-2xl rounded-l-sm pl-2 md:pl-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
           />

           {/* Shine/Lighting Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-20 pointer-events-none rounded-r-2xl transition-opacity duration-300 z-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;