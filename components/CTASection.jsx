export default function CTASection() {
  return (
    <section className="relative py-32 text-center overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
          Bereit, deine Agentur zu transformieren?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Starte kostenlos und erlebe, wie viel Klarheit und Struktur Finkora in deinen Alltag bringt.
        </p>

        <a href="/signup" className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-200 transition">
          Kostenlos starten
        </a>

      </div>
    </section>
  );
}