"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const PAYMENT_URL = "https://www.naffy.io/mentalnystart/mentalny-odblok-5NI"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-20 sm:top-32 right-0 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              Wiesz <span className="text-cyan-400">CO</span> robić, ale ciągle tego{" "}
              <span className="text-amber-400">NIE ROBISZ?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
              To nie lenistwo. To blokady mentalne i nawykowa prokrastynacja. Odbierz workbook
              &apos;MentalnyOdblok&apos; i rusz z miejsca.
            </p>

            <div className="pt-2 sm:pt-4">
              <Button
                onClick={() => window.open(PAYMENT_URL, "_blank")}
                size="lg"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black rounded-lg font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg h-auto shadow-lg hover:shadow-amber-400/50 transition-all duration-200"
              >
                Chcę ODBLOKOWAĆ swój potencjał za 37 zł
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              ✓ Bezpieczna płatność • ✓ Natychmiastowa dostawa PDF
            </p>
          </div>

          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mentalny-odblok-book.png"
                alt="MentalnyOdblok - Pokonaj Blokady"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
