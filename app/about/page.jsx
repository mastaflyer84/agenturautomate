export default function AboutPage() {
  return (
    <div className="sectiom">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/15 blur-[180px] rounded-full"></div>
      </div>

      {/* Intro */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Über{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            AgenturAutomate
          </span>
        </h1>

        <p className="card">
          Wir helfen Marketing‑Agenturen dabei, ihre Prozesse zu automatisieren, Wissen zu zentralisieren 
          und Angebote schneller zu erstellen.
        </p>
      </section>

      {/* Mission, Vision, Values in Premium Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Mission */}
        <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4">Unsere Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            Agenturen von repetitiven Aufgaben befreien, damit sie sich auf Kreativität, Strategie 
            und Wachstum konzentrieren können.
          </p>
        </div>

        {/* Vision */}
        <div className="card">
          <h3 className="text-2xl font-semibold mb-4">Unsere Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            Eine Welt, in der Agenturen mit klaren Strukturen, automatisierten Abläufen und 
            intelligenten Systemen arbeiten — ohne Chaos.
          </p>
        </div>

        {/* Werte */}
        <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4">Unsere Werte</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Klarheit</li>
            <li>• Effizienz</li>
            <li>• Transparenz</li>
          </ul>
        </div>

      </section>

      {/* Founder Message */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="p-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Eine Nachricht vom Gründer
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            „Agenturen sind kreative Kraftwerke — aber viel zu oft werden sie durch Chaos, 
            fehlende Strukturen und manuelle Aufgaben ausgebremst.  
            AgenturAutomate ist entstanden, um genau das zu ändern.“
          </p>

          <p className="text-gray-400 text-[15px]">
            – Sebastian Fink, Gründer von AgenturAutomate
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
          Bereit, deine Agentur zu transformieren?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Starte kostenlos und erlebe, wie viel Klarheit und Struktur AgenturAutomate in deinen Alltag bringt.
        </p>

        <a
          href="/signup"
          className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Kostenlos starten
        </a>
      </section>

    </div>
  );
}