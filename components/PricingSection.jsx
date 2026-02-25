export default function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-16">
          Preise, die mit deiner Agentur wachsen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-gray-300 mb-6">Ideal für kleine Teams</p>
            <p className="text-4xl font-bold mb-6">€19<span className="text-lg font-normal">/Monat</span></p>
            <a href="/signup" className="block bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Jetzt starten
            </a>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-gray-300 mb-6">Für wachsende Agenturen</p>
            <p className="text-4xl font-bold mb-6">€49<span className="text-lg font-normal">/Monat</span></p>
            <a href="/signup" className="block bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Jetzt starten
            </a>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Agency</h3>
            <p className="text-gray-300 mb-6">Für große Teams</p>
            <p className="text-4xl font-bold mb-6">€99<span className="text-lg font-normal">/Monat</span></p>
            <a href="/signup" className="block bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Jetzt starten
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}