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
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Automatisiere deine Agentur mit{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            AgenturAutomate
          </span>
        </h1>

        {/* Subline */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
          Die Plattform, die Chaos eliminiert, Prozesse beschleunigt und echte Skalierung ermöglicht — 
          ohne zusätzliche Mitarbeiter.
        </p>

        {/* Hero Grid im Agentur-Stil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-3">Weniger Chaos</h3>
            <p className="text-gray-400">
              Zentrale Wissensbasis statt verstreuter Dokumente, Mails und Notizen.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-3">Schnellere Abläufe</h3>
            <p className="text-gray-400">
              Automatisierte Prozesse sparen täglich Stunden und reduzieren Fehler.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-3">Bessere Skalierung</h3>
            <p className="text-gray-400">
              Wissen hängt nicht mehr an einzelnen Personen, sondern an Systemen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}