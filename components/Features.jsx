export default function Features() {
  return (
    <section className="relative py-32 bg-[#0A0A0A] text-white overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-0 w-[550px] h-[550px] bg-teal-400/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-16">
          Was AgenturAutomate für dich tut
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Feature 1 */}
          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Angebote in Minuten</h3>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Erstelle professionelle Angebote in Rekordzeit — klar strukturiert, automatisch formuliert und sofort versandbereit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Wissens‑Chatbot</h3>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Lade dein Agentur‑Wissen hoch und lass dein Team jederzeit darauf zugreifen — ohne Chaos, ohne Suchen.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Automatisierte Prozesse</h3>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Automatisiere wiederkehrende Aufgaben und spare jeden Tag wertvolle Zeit — ganz ohne technische Hürden.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}