export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-40">

      {/* Subtiler Aurora Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/15 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Die moderne Plattform für{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            automatisierte Agenturprozesse
          </span>
        </h1>

        {/* Subline */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-14">
          Weniger Chaos. Schnellere Abläufe. Bessere Skalierung.  
          AgenturAutomate bringt Struktur, Klarheit und Automatisierung in deinen Alltag.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-24">
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

        {/* Trusted By */}
        <div className="flex flex-col items-center gap-4 mb-24">
          <span className="text-gray-500 text-sm">Vertrauen von Teams weltweit</span>
          <div className="flex gap-10 opacity-60 text-3xl">
            🚀 📊 💼 🧠 🛠️ 🔗
          </div>
        </div>

        {/* Premium Cards – Ultra Clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {[
            { icon: "⚡", title: "Weniger Chaos", text: "Zentrale Wissensbasis statt verstreuter Dokumente." },
            { icon: "⏱️", title: "Schnellere Abläufe", text: "Automatisierte Prozesse sparen täglich Stunden." },
            { icon: "📈", title: "Bessere Skalierung", text: "Wissen hängt nicht mehr an einzelnen Personen." },
          ].map((card, index) => (
            <div
              key={index}
              className="p-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
            >
              <div className="text-3xl mb-4 opacity-80">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                {card.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}