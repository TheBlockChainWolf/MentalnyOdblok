"use client"

import { useState } from "react"

const PAYMENT_URL = "https://www.naffy.io/mentalnystart/mentalny-odblok-5NI"

export default function SolutionSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0F1419] to-background">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white">
              Przedstawiam: Workbook <span className="text-cyan-400">„MentalnyOdblok"</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              To nie jest kolejna książka do czytania. To 18 konkretnych narzędzi i ćwiczeń do diagnozy i usunięcia
              blokad, które trzymają Cię w miejscu.
            </p>

            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              <p className="text-base sm:text-lg text-white">
                <span className="text-amber-400 font-semibold">18 modułów</span>
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Od Syndromu Oszusta przez Paraliż Analityczny aż do Konfliktu Tożsamości. Każdy moduł to konkretna
                blokada i praktyczne ćwiczenia do jej pokonania.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="rounded-xl border-2 border-cyan-400/50 overflow-hidden shadow-2xl bg-black">
                <video className="w-full aspect-video object-cover" controls poster="/images/mentalny-20odblok.jpeg">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mentalny%20odblok%202%20%281%29-X2iygjPnzKxl44n9jCR5PcKL9eNchZ.mp4" type="video/mp4" />
                  Twoja przeglądarka nie obsługuje formatu wideo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
