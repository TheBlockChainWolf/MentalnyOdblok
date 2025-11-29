"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const PAYMENT_URL = "https://www.naffy.io/mentalnystart/mentalny-odblok-5NI"

export default function StickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsVisible(heroBottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-sm border-t border-amber-400/20 px-3 py-2">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Tylko</span>
          <span className="font-bold text-amber-400 text-lg">37 zł</span>
        </div>
        <Button
          onClick={() => window.open(PAYMENT_URL, "_blank")}
          className="flex-1 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-lg text-sm h-10 pulse-button"
        >
          <Download className="w-4 h-4 mr-1" />
          Odblokuj swój potencjał
        </Button>
      </div>
    </div>
  )
}
