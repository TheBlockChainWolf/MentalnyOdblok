import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0A0E14] border-t border-white/5 py-6 sm:py-8 md:py-12">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-base sm:text-lg font-bold text-white">Mentalny Start</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Pokonaj blokady mentalne i odbierz swój potencjał
            </p>
          </div>

          <div className="flex flex-row gap-4 sm:gap-6">
            <Link
              href="/regulamin"
              className="text-xs sm:text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Regulamin
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className="text-xs sm:text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2025 Mentalny Start. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
