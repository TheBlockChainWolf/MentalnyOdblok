"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const PAYMENT_URL = "https://www.naffy.io/mentalnystart/mentalny-odblok-5NI"

export default function FinalCtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0F1419] to-background">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 md:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-xs sm:text-sm font-semibold">
            <Clock className="w-4 h-4" />
            ZOSTAŁY TYLKO KILKA SZTUK!
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white">
            Tylko DZISIAJ: <span className="text-green-400">37 zł</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong>Jutro cena wraca do 197 zł.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-amber-400 font-semibold">
            <span className="text-2xl sm:text-3xl font-bold text-green-400">37 zł</span>
            <span className="text-red-500 line-through text-lg">197 zł</span>
            <span className="text-red-400">81% taniej</span>
          </div>
        </div>

        <Button
          onClick={() => window.open(PAYMENT_URL, "_blank")}
          size="lg"
          className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black rounded-lg font-bold px-6 sm:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg h-auto shadow-lg hover:shadow-amber-400/50 transition-all duration-200 pulse-button"
        >
          TAK! CHCĘ ODBLOKOWAĆ SWÓJ POTENCJAŁ
        </Button>

        <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-amber-400 font-bold">✓ Natychmiastowa</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Dostawa PDF na e-mail w ciągu minut</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-amber-400 font-bold">✓ Bezpieczna</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Płatność BLIK/Karta • Bezpieczny checkout</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-amber-400 font-bold">✓ Gwarancja</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Jeśli coś nie zadziała, zwrot 100%</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 mt-6 sm:mt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-muted-foreground italic">
            Liczba miejsc ograniczona.
          </p>
        </div>
      </div>
    </section>
  )
}
