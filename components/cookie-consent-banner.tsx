"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Ta strona korzysta z plików cookies (ciasteczek), w tym z narzędzi marketingowych takich jak Facebook Pixel,
            aby zapewnić Ci najlepsze doświadczenie i wyświetlać spersonalizowane reklamy. Więcej informacji znajdziesz
            w naszej{" "}
            <Link
              href="/polityka-prywatnosci"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Polityce Prywatności
            </Link>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end sm:items-center">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="text-sm border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Tylko niezbędne
            </Button>
            <Button onClick={handleAccept} className="text-sm bg-blue-500 hover:bg-blue-600 text-white">
              Akceptuję wszystkie
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
