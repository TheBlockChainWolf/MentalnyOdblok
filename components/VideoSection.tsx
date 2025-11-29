import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const VideoSection: React.FC = () => {
  // State to handle image loading errors
  const [imgError, setImgError] = useState(false);

  // Fallback image from Unsplash if local image fails
  // Using an abstract image representing "mental unblocking" / neural networks / breakthrough
  const fallbackImage = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const scrollToSolution = () => {
    const element = document.getElementById('solution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="w-full max-w-7xl mx-auto px-4 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
      <div className="flex-1 space-y-5 md:space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          To nie jest "kolejna książka".<br />
          To <span className="text-cyan-400">twardy reset</span> Twojego systemu operacyjnego.
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Większość poradników mówi Ci "co" masz robić. Ale Ty to już wiesz. Problemem jest to, że Twoja głowa Ci na to nie pozwala. 
          <strong className="text-white block mt-2">
          "MentalnyOdblok" to zestaw 18 chirurgicznych narzędzi, które wycinają blokady u źródła.
          </strong>
        </p>
        
        <div className="space-y-3 pt-4 border-l-2 border-brand-yellow pl-4 md:pl-6">
            <h3 className="text-brand-yellow font-bold text-lg md:text-xl">Co zyskasz?</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Przestaniesz planować, zaczniesz kończyć projekty.</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Zamienisz lęk przed oceną na paliwo do działania.</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Odzyskasz kontrolę nad swoim czasem i pewnością siebie.</li>
            </ul>
        </div>
      </div>

      <div className="flex-1 w-full mt-4 lg:mt-0">
        <div className="relative aspect-video rounded-xl border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
            <img 
                src={imgError ? fallbackImage : "https://i.imgur.com/jInwyrH.png"} 
                onError={() => setImgError(true)}
                alt="Wizualizacja odblokowania potencjału" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
                 <p className="text-[10px] md:text-xs text-cyan-400 font-mono tracking-widest uppercase opacity-70">Neural Architecture Reset</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;