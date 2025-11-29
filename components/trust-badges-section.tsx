"use client"

import { Shield, Users, Zap, CheckCircle2 } from "lucide-react"

export default function TrustBadgesSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-[#0F1419] border-b border-white/5">
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center space-y-2">
            <Users className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 mx-auto" />
            <div className="font-bold text-lg sm:text-xl text-white">1000+</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Ludzi już działało</p>
          </div>
          <div className="text-center space-y-2">
            <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-amber-400 mx-auto" />
            <div className="font-bold text-lg sm:text-xl text-white">18</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Praktycznych modułów</p>
          </div>
          <div className="text-center space-y-2">
            <CheckCircle2 className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mx-auto" />
            <div className="font-bold text-lg sm:text-xl text-white">24h</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Wsparcie wyników</p>
          </div>
          <div className="text-center space-y-2">
            <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-rose-400 mx-auto" />
            <div className="font-bold text-lg sm:text-xl text-white">100%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Gwarancja zwrotu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
