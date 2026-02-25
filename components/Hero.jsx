export default function HeroCase() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-32">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-400/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left: Case Content */}
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Case Study
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-4">
            Wie <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">AgenturAutomate</span> 
            einer Agentur half, ihre Abläufe radikal zu optimieren.
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Ein tiefgehender Blick darauf, wie moderne Automatisierung 
            Zeit spart, Fehler reduziert und Skalierung ermöglicht.
          </p>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-semibold text-white">–80%</p>
              <p className="text-gray-400 text-sm">weniger manuelle Arbeit</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">+3h</p>
              <p className="text-gray-400 text-sm">Zeit pro Tag gewonnen</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">4×</p>
              <p className="text-gray-400 text-sm">schnellere Abläufe</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">100%</p>
              <p className="text-gray-400 text-sm">Transparenz</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-4">
            <a
              href="/signup"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Kostenlos starten
            </a>

            <a
              href="/cases"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
            >
              Weitere Cases
            </a>
          </div>
        </div>

        {/* Right: Case Mockup */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="/images/case-dashboard.png"
              alt="Case Study Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}