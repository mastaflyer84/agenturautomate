export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE — TEXT */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Automatisiere deine Agentur.<br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Wachse ohne mehr zu arbeiten.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-gray-300 md:text-xl">
              AgenturAutomate vereint CRM, Automationen, Kundenkommunikation und Abrechnung in einem System.
              Weniger Tools, weniger Aufwand — mehr Fokus auf Wachstum.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#start"
                className="rounded-lg bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-blue-500"
              >
                Kostenlos testen – ohne Kreditkarte
              </a>

              <a
                href="#demo"
                className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
              >
                Live‑Demo ansehen
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — MOCKUP */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-full max-w-md rounded-xl bg-white/5 p-4 backdrop-blur-xl border border-white/10 shadow-2xl">
              {/* Placeholder — hier kommt dein Mockup rein */}
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-gray-500">
                Mockup kommt hier rein
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}