export default function HeroCase() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-32">

      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-400/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Case Study
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-4">
            Wie AgenturAutomate Agenturen hilft, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">80% ihrer Prozesse</span> zu automatisieren.
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Eine moderne Plattform, die dir Zeit zurückgibt, Abläufe optimiert und deine Agentur skalierbar macht.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/signup"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Kostenlos starten
            </a>

            <a
              href="/demo"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
            >
              Demo ansehen
            </a>
          </div>
        </div>

        {/* Right: Case Image / Mockup */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="/images/dashboard-mockup.png"
              alt="Dashboard Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}