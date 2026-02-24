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
            
            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

            {/* Laptop Mockup */}
            <div className="relative w-full max-w-lg rounded-xl bg-white/5 p-4 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-black">
                <img
                  src="/mockups/laptop.png"
                  alt="AgenturAutomate Dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute -bottom-10 -right-6 w-40 md:w-48 lg:w-52 rotate-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl p-2">
                <div className="aspect-[9/19] w-full overflow-hidden rounded-xl bg-black border border-white/10">
                  <img
                    src="/mockups/mobile.png"
                    alt="AgenturAutomate Mobile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
