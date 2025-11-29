"use client"

import { useState } from "react"
import { Zap, ChevronDown } from "lucide-react"

export default function ModulesDetailedSection() {
  const [expanded, setExpanded] = useState(false)

  const modules = [
    {
      number: "01",
      title: "Syndrom Oszusta",
      description:
        "Uczucie, że jesteś oszustem, mimo posiadania kompetencji. Zmieniamy perspektywę i budujemy Bank Dowodów.",
      benefit: "Wiesz więcej, niż myślisz",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      number: "02",
      title: "Paraliż Analityczny",
      description: "Utknięcie w fazie researchu. Praktyczne ćwiczenie: podjęcie decyzji w 15 minut.",
      benefit: "Koniec z wiecznym planowaniem",
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      number: "03",
      title: "Nadmierne Myślenie",
      description: "Odtwarzanie w głowie bez działania. Uczysz się, jak przerwać pętlę i działać.",
      benefit: "Mózg przychodzi do porządku",
      color: "from-amber-500/20 to-yellow-500/20",
    },
    {
      number: "04",
      title: "Perfekcjonizm",
      description: "Obsesja na punkcie zrobienia wszystkiego idealnie. Zrobione > Doskonałe.",
      benefit: "Wychodzisz z głębin perfektu",
      color: "from-yellow-500/20 to-green-500/20",
    },
    {
      number: "05",
      title: "Strach przed Porażką",
      description: "Porażka = Feedback. Zmieniasz sposób patrzenia na niepowodzenia.",
      benefit: "Porażka staje się nauką",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      number: "06",
      title: "Strach przed Oceną",
      description: "Co ludzie powiedzą? Nauczysz się publikować szczerze i bez strachu.",
      benefit: "Uwolniasz się od opinii",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      number: "07",
      title: "Zwątpienie w Siebie",
      description: "Kwestionowanie kompetencji. Budujesz pewność POPRZEZ działanie, nie czekając.",
      benefit: "Pewność robi się z działania",
      color: "from-teal-500/20 to-cyan-500/20",
    },
    {
      number: "08",
      title: "Strach przed Sukcesem",
      description: "Ukryty lęk przed tym, co się zmieni. Zdefiniujesz swój sukces.",
      benefit: "Przestajesz się bać wygranej",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      number: "09",
      title: "Pułapka Porównywania",
      description: "Mierzenie się innymi. Uczysz się fokusować na SWOIM postępie.",
      benefit: "Twoja ścieżka, Twoje tempo",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      number: "10",
      title: "Prokrastynacja",
      description: "Unikanie zadań. Zasada 2 Minut i 20-minutowe sprinty zmienią grę.",
      benefit: "Działanie generuje energię",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      number: "11",
      title: "Brak Jasności",
      description: "Nieznajomość następnego kroku. Działanie tworzy jasność, nie czekanie.",
      benefit: "Jasność przychodzi PO starcie",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      number: "12",
      title: "Syndrom Błyszczącego Obiektu",
      description: "Nowy pomysł co dzień. Fokus to nowa supermoc. Jedna oferta, jeden klient.",
      benefit: "Skupienie = Sukces",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      number: "13",
      title: "Syndrom Nie-Eksperta",
      description: "Myślisz, że nie jesteś ekspertem. Jesteś ekspertem od własnej historii.",
      benefit: "Twoje doświadczenie MA wartość",
      color: "from-rose-500/20 to-red-500/20",
    },
    {
      number: "14",
      title: "Poczucie Przytłoczenia",
      description: "Za dużo do zrobienia. Zasada Codziennej Trójki zmienia wszystko.",
      benefit: "Klarowność ponad czasem",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      number: "15",
      title: "Negatywny Dialog Wewnętrzny",
      description: "Wewnętrzny głos, który sabotuje. Nauczysz się mówić do siebie wspierająco.",
      benefit: "Zmieniasz wewnętrzny komentarz",
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      number: "16",
      title: "Brak Czasu (Mentalność Niedoboru)",
      description: "Nie mam czasu. 20 minut skupionej pracy > 2 godziny rozproszenia.",
      benefit: "Całe życie budzisz się mając czas",
      color: "from-amber-500/20 to-yellow-500/20",
    },
    {
      number: "17",
      title: "Potrzeba Akceptacji",
      description: "Czekanie na walidację. Ty jesteś swoim własnym sędzią.",
      benefit: "Wewnętrzna walidacja > Zewnętrzna",
      color: "from-yellow-500/20 to-green-500/20",
    },
    {
      number: "18",
      title: "Konflikt Tożsamości",
      description: "Kim się staję? Tożsamość buduje się poprzez działanie i nawyki.",
      benefit: "Stajesz się nową wersją siebie",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ]

  const visibleModules = expanded ? modules : modules.slice(0, 9)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0F1419] border-t border-white/5">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white mb-4 sm:mb-6">
            18 Modułów = 18 Rozwiązań
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Każdy moduł to konkretna blokada, którą poznasz na własnej skórze, i praktyczne narzędzie, które zmieni
            Twoją perspektywę.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {visibleModules.map((module, index) => (
            <div
              key={index}
              className={`p-4 sm:p-5 md:p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 bg-gradient-to-br ${module.color} hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400/60 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                  {module.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {module.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                {module.description}
              </p>
              <div className="pt-2 sm:pt-3 border-t border-white/5">
                <p className="text-xs font-semibold text-amber-400">✨ {module.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-amber-400/50 bg-gradient-to-r from-amber-400/10 to-orange-400/10 hover:from-amber-400/20 hover:to-orange-400/20 text-amber-400 hover:text-amber-300 font-semibold transition-all duration-300"
            >
              <span>Pokaż pozostałe 9 modułów</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        )}

        {expanded && (
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={() => setExpanded(false)}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-cyan-400/50 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 hover:from-cyan-400/20 hover:to-blue-400/20 text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300"
            >
              <span>Ukryj dodatkowe moduły</span>
              <ChevronDown className="w-5 h-5 rotate-180 animate-bounce" />
            </button>
          </div>
        )}

        <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-10 rounded-xl border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-orange-400/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Zap className="w-8 sm:w-10 h-8 sm:h-10 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-white mb-2">Co robisz z każdym modułem?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong>Diagnostyka:</strong> Rozpoznajesz blokadę • <strong>Ćwiczenia:</strong> Praktyczne zadania do
                wykonania dzisiaj • <strong>Działanie:</strong> Gotowe kroki, które natychmiast implementujesz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
