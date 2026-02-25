export default function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-16">
          Über Finkora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Unsere Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Agenturen von repetitiven Aufgaben befreien, damit sie sich auf Kreativität, Strategie 
              und Wachstum konzentrieren können.
            </p>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Unsere Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Eine Welt, in der Agenturen mit klaren Strukturen, automatisierten Abläufen und 
              intelligenten Systemen arbeiten – ohne Chaos.
            </p>
          </div>

          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Unsere Werte</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Klarheit</li>
              <li>• Effizienz</li>
              <li>• Transparenz</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}