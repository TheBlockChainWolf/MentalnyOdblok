import React, { useState, useEffect } from 'react';
import { Users, Zap, CheckCircle, ShieldCheck, Timer, Check, Lock, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const PricingSection: React.FC = () => {
    // Symulacja licznika, który zawsze pokazuje mało czasu, by wywołać pilność (Scarcity)
    const [seconds, setSeconds] = useState(3531); 

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s > 0 ? s - 1 : 3600);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div id="pricing" className="w-full bg-[#050505] pt-12 md:pt-20 pb-16 md:pb-24 relative overflow-hidden">
        
        {/* Tło - subtelny efekt glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-yellow/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

        {/* Stats Row - Social Proof - Optimized for mobile grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20 px-4 text-center relative z-10">
            <div className="flex flex-col items-center gap-2 group p-2">
                <div className="p-2 md:p-3 bg-cyan-900/10 rounded-full group-hover:bg-cyan-900/20 transition-colors">
                    <Users className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-2xl md:text-3xl text-white">1000+</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Zmienionych historii</div>
            </div>
            <div className="flex flex-col items-center gap-2 group p-2">
                <div className="p-2 md:p-3 bg-brand-yellow/10 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                    <Zap className="text-brand-yellow w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-2xl md:text-3xl text-white">18</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Narzędzi mentalnych</div>
            </div>
            <div className="flex flex-col items-center gap-2 group p-2">
                <div className="p-2 md:p-3 bg-green-900/10 rounded-full group-hover:bg-green-900/20 transition-colors">
                    <CheckCircle className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-2xl md:text-3xl text-white">24/7</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Dostęp natychmiastowy</div>
            </div>
            <div className="flex flex-col items-center gap-2 group p-2">
                <div className="p-2 md:p-3 bg-rose-900/10 rounded-full group-hover:bg-rose-900/20 transition-colors">
                    <ShieldCheck className="text-rose-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-2xl md:text-3xl text-white">100%</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Bezpieczeństwa</div>
            </div>
        </div>

        {/* Main Pricing Container */}
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Left Side: Value Stack (Logic) */}
                <div className="flex-1 p-6 md:p-12 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Co otrzymujesz?</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">Pełen system do resetowania blokad mentalnych.</p>

                    <ul className="space-y-3 md:space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/10 p-1 rounded">
                                <Check size={14} className="text-green-500" />
                            </div>
                            <div>
                                <strong className="text-white block text-sm md:text-base">Workbook "Mentalny Odblok" (PDF)</strong>
                                <span className="text-gray-500 text-xs md:text-sm">100+ stron skondensowanej wiedzy</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/10 p-1 rounded">
                                <Check size={14} className="text-green-500" />
                            </div>
                            <div>
                                <strong className="text-white block text-sm md:text-base">18 Praktycznych Modułów</strong>
                                <span className="text-gray-500 text-xs md:text-sm">Konkretne narzędzia, zero lania wody</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/10 p-1 rounded">
                                <Check size={14} className="text-green-500" />
                            </div>
                            <div>
                                <strong className="text-white block text-sm md:text-base">Zestaw Ćwiczeń "Twardy Reset"</strong>
                                <span className="text-gray-500 text-xs md:text-sm">Do wykonania w 15 minut dziennie</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/10 p-1 rounded">
                                <Check size={14} className="text-green-500" />
                            </div>
                            <div>
                                <strong className="text-white block text-sm md:text-base">Dożywotni dostęp</strong>
                                <span className="text-gray-500 text-xs md:text-sm">Płacisz raz, korzystasz zawsze</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Side: The Offer (Emotion & Urgency) */}
                <div className="flex-1 bg-[#111111] p-6 md:p-12 flex flex-col items-center justify-center relative">
                    {/* Urgency Badge */}
                    <div className="absolute top-0 left-0 right-0 bg-red-600/10 text-red-500 text-[10px] md:text-xs font-bold py-2 text-center uppercase tracking-widest flex items-center justify-center gap-2 border-b border-red-500/20">
                         <Timer size={12} className="animate-pulse" /> Oferta wygasa za chwilę
                    </div>

                    <div className="mt-6 md:mt-8 text-center w-full">
                        <p className="text-gray-500 text-xs md:text-sm mb-1 line-through decoration-red-500/50">Wartość: 197 zł</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-5xl md:text-6xl font-black text-white tracking-tight">37</span>
                            <div className="flex flex-col items-start">
                                <span className="text-xl md:text-2xl font-bold text-white">zł</span>
                                <span className="text-[10px] md:text-xs text-gray-500 uppercase">brutto</span>
                            </div>
                        </div>
                        <p className="text-green-500 font-medium text-xs md:text-sm bg-green-500/10 inline-block px-3 py-1 rounded-full mb-6 md:mb-8">
                            Oszczędzasz 81% tylko dzisiaj
                        </p>

                        <a 
                            href={CHECKOUT_URL}
                            className="group w-full flex items-center justify-center gap-3 bg-brand-yellow hover:bg-yellow-400 text-black font-black text-base md:text-lg py-4 md:py-5 px-6 md:px-8 rounded-xl shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            ODBLOKUJ POTENCJAŁ
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <Lock size={12} />
                            <span>Bezpieczna płatność SSL</span>
                        </div>
                        
                        <p className="mt-2 text-[10px] text-gray-600">
                            Najniższa cena z ostatnich 30 dni: 37 zł
                        </p>
                    </div>
                </div>
            </div>

            {/* Risk Reversal (Guarantee) */}
            <div className="mt-8 md:mt-12 max-w-2xl mx-auto text-center bg-[#0a0a0a] border border-gray-800 p-5 md:p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-4 text-left">
                    <div className="shrink-0 p-3 md:p-4 bg-gray-800/50 rounded-full mx-auto md:mx-0">
                         <ShieldCheck className="text-gray-300 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-base md:text-lg">Żelazna Gwarancja Satysfakcji</h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-1">
                            Jestem tak pewny tej wiedzy, że biorę ryzyko na siebie. Jeśli uznasz, że ten workbook nie otworzył Ci oczu na Twoje blokady – napisz do mnie. <span className="text-white underline decoration-gray-600 underline-offset-2">Oddam Ci 100% pieniędzy.</span> Bez pytań.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final Push */}
            <div className="text-center mt-8 md:mt-12 mb-8">
                 <p className="text-gray-500 italic text-xs md:text-sm">
                    "Koszt workbooka to mniej niż dwie kawy na mieście. <br className="hidden md:block"/>
                    Kawa daje energię na godzinę. <strong className="text-gray-300">Mentalny Odblok daje energię na lata.</strong>"
                 </p>
            </div>
        </div>
    </div>
  );
};

export default PricingSection;