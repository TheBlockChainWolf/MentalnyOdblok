"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"

export default function UrgentHeader() {
  // Ustawienie stanu początkowego na 59:00
  const [timeLeft, setTimeLeft] = useState({ minutes: 59, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // ZMIANA: 59 minut * 60 sekund
    let totalSeconds = 59 * 60

    const timer = setInterval(() => {
      totalSeconds -= 1
      
      // Jeśli czas się skończy, resetuj z powrotem do 59 minut (pętla)
      if (totalSeconds < 0) {
        totalSeconds = 59 * 60
      }
      
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      setTimeLeft({ minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-600 py-2 sm:py-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white flex-shrink-0" />
        <span className="text-xs sm:text-sm font-semibold text-white text-center">
          Tylko DZISIAJ! Cena 37zł. Okazja kończy się za{" "}
          <span className="font-bold tabular-nums">
            {/* tabular-nums zapobiega "skakaniu" tekstu przy zmianie cyfr */}
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </span>
      </div>
    </div>
  )
}
