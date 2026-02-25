export default function Hero() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Finkora – Das Betriebssystem für Agenturen
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Automatisiere Angebote, zentralisiere Wissen und bringe Klarheit in deine Prozesse – 
            alles in einer modernen, intelligenten Plattform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/signup" className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-200 transition">
              Kostenlos starten
            </a>
            <a href="/features" className="px-10 py-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
              Mehr erfahren
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}