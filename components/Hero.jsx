export default function Hero() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A] text-white">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-400/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Die moderne Plattform für{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            automatisierte Agenturprozesse
          </span>
        </h1>

        {/* Subline */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Weniger Chaos. Schnellere Abläufe. Bessere Skalierung.  
          AgenturAutomate bringt Struktur, Klarheit und Automatisierung in deinen Alltag.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <a
            href="/signup"
            className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Kostenlos starten
          </a>

          <a
            href="/demo"
            className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
          >
            Demo ansehen
          </a>
        </div>

        {/* Premium Cards (Hero-Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
              Weniger Chaos
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Zentrale Wissensbasis statt verstreuter Dokumente, Mails und Notizen.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
              Schnellere Abläufe
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Automatisierte Prozesse sparen täglich Stunden und reduzieren Fehler.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
              Bessere Skalierung
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Wissen hängt nicht mehr an einzelnen Personen, sondern an Systemen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}