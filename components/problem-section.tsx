import { Clock, Zap, MessageCircleX } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Ciągle odkładasz ważne rzeczy na „jutro"?',
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      title: "Zaczynasz nowe projekty i porzucasz je w połowie?",
      color: "text-cyan-400",
    },
    {
      icon: MessageCircleX,
      title: "Boisz się oceny innych, więc nawet nie startujesz?",
      color: "text-cyan-400",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0F1419] border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 text-white">
            Czy brzmi to <span className="text-cyan-400">znajomo?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="group rounded-xl border border-cyan-400/20 bg-white/5 hover:bg-white/10 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/50"
              >
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <div className={`p-3 sm:p-4 rounded-lg bg-cyan-400/10 ${problem.color}`}>
                    <Icon className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">{problem.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
