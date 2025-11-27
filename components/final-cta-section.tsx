"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const PAYMENT_URL = "https://www.naffy.io/mentalnystart/mentalny-odblok-5NI"

export default function FinalCtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0F1419] to-background">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 md:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white">
          Przestań czekać. <span className="text-cyan-400">Zacznij działać.</span>
        </h2>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400">Tylko 37 zł</span>
            <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground line-through">197 zł</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">Cena promocyjna dla wczesnych użytkowników</p>
        </div>

        <Button
          onClick={() => window.open(PAYMENT_URL, "_blank")}
          size="lg"
          className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black rounded-lg font-bold px-6 sm:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg h-auto mx-auto shadow-lg hover:shadow-amber-400/50 transition-all duration-200"
        >
          KUP TERAZ I POBIERZ NATYCHMIAST
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
          <p>🔒 Bezpieczna płatność BLIK/Karta • 📧 Natychmiastowa dostawa PDF na e-mail</p>
          <p>Bez skomplikowanych procedur. Bez sztuczek. Tylko wartość.</p>
        </div>
      </div>
    </section>
  )
}
