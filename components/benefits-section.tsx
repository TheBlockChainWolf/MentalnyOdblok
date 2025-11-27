import { Flame, CheckCircle2, Cast as Mask, Brain, AlertCircle } from "lucide-react"

export default function BenefitsSection() {
  const features = [
    {
      icon: Flame,
      title: "Prokrastynacją",
      text: "Zrozumiesz, dlaczego odwlekasz i jak zastosować Zasadę 2 Minut",
      highlight: true,
    },
    {
      icon: Mask,
      title: "Syndromem Oszusta",
      text: '"Nie jestem gotowy", "Inni są lepsi"',
    },
    {
      icon: Brain,
      title: "Paraliżem Analitycznym",
      text: "Wieczne planowanie bez działania",
    },
    {
      icon: AlertCircle,
      title: "Perfekcjonizmem",
      text: "Największy wróg zrobionego",
    },
    {
      icon: CheckCircle2,
      title: "Strachem przed hejtem",
      text: "Jak przestać przejmować się opinią innych",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0F1419] border-t border-white/5">
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-balance mb-4 sm:mb-6 text-white">
          Co znajdziesz w środku?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          To nie jest kolejna książka do czytania. To konkretne narzędzie do pracy własnej. Przejdziesz przez 18
          modułów, które zdiagnozują, dlaczego stoisz w miejscu, i dadzą Ci gotową instrukcję wyjścia z impasu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-4 sm:p-5 md:p-6 rounded-xl border transition-all duration-300 group ${
                  feature.highlight
                    ? "border-amber-400/50 bg-amber-400/5 hover:bg-amber-400/10"
                    : "border-cyan-400/20 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0">
                    <Icon
                      className={`w-6 sm:w-7 h-6 sm:h-7 transition-transform group-hover:scale-110 ${
                        feature.highlight ? "text-amber-400" : "text-cyan-400"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                    {feature.highlight && "🔥 Rozprawisz się z: "}
                    {!feature.highlight && "✅ "}
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.text}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-amber-400">Dla kogo to jest?</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Dla osób, które mają dość stania w miejscu. Dla przyszłych przedsiębiorców, twórców i każdego, kto czuje,
              że stać go na więcej, ale "coś" go trzyma.
            </p>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-amber-400">Format</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              <strong>PDF</strong> (Gotowy do druku lub wygodnej pracy na tablecie/telefonie)
              <br />
              <strong>Dostawa:</strong> Natychmiast na Twój e-mail po zakupie
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
