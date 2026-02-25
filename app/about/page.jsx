export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/15 blur-[180px] rounded-full"></div>
      </div>

      {/* Intro Section */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Über{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            AgenturAutomate
          </span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Wir helfen Marketing‑Agenturen dabei, ihre Prozesse zu automatisieren, Wissen zu zentralisieren 
          und Angebote schneller zu erstellen.  
          AgenturAutomate ist die moderne Plattform für Klarheit, Struktur und Effizienz.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
          Unsere Mission
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Wir glauben, dass Agenturen nur dann wirklich wachsen können, wenn sie von repetitiven Aufgaben 
          entlastet werden. Unsere Mission ist es, Tools zu entwickeln, die Klarheit schaffen, 
          Prozesse vereinfachen und Teams stärken.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
          Unsere Vision
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Eine Welt, in der Agenturen nicht mehr im Chaos versinken, sondern mit klaren Strukturen, 
          automatisierten Abläufen und intelligenten Systemen arbeiten — ohne Stress, ohne Reibungsverluste.
        </p>
      </section>

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">
          Unsere Werte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="p-10 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Klarheit</h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Wir schaffen Systeme, die Ordnung bringen und Teams entlasten — ohne unnötige Komplexität.
            </p>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Effizienz</h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Automatisierung soll nicht überfordern, sondern Zeit sparen und den Alltag erleichtern.
            </p>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Transparenz</h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Prozesse müssen sichtbar, nachvollziehbar und für alle zugänglich sein.
            </p>
          </div>

        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="p-12 rounded-xl bg-white/5 border border-white/10">
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

      {/* CTA Section */}
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