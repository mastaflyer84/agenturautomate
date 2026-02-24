export default function Features() {
  return (
    <section className="w-full bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

        {/* HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Alles, was deine Agentur braucht.
          </h2>
          <p className="text-gray-400 text-lg">
            Ein System, das deine Abläufe automatisiert und dir Zeit zurückgibt.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* CARD */}
          <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl">
              📁
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">CRM & Kunden</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Leads, Kunden und Projekte klar strukturiert — jederzeit im Blick.
            </p>
          </div>

          <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 text-2xl">
              ⚙️
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Automationen</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Follow‑ups, Onboarding, Rechnungen — komplett automatisiert.
            </p>
          </div>

          <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="h-12 w-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 text-2xl">
              💬
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Kommunikation</h3>
            <p className="mt-2 text-gray-400 text-sm">
              E‑Mails, Nachrichten und Anfragen zentral an einem Ort.
            </p>
          </div>

          <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="h-12 w-12 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 text-2xl">
              💳
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Abrechnung</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Rechnungen, Angebote, Zahlungen — ohne externe Tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}