export default function Features() {
  return (
    <section className="w-full bg-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* HEADER */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Alles, was deine Agentur braucht — in einem System.
          </h2>
          <p className="text-lg text-gray-300">
            AgenturAutomate ersetzt mehrere Tools gleichzeitig und automatisiert die Abläufe, 
            die dich täglich Zeit kosten.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Feature 1 */}
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl">
              📁
            </div>
            <h3 className="text-xl font-semibold text-white">CRM & Kundenverwaltung</h3>
            <p className="text-gray-400">
              Behalte Leads, Kunden und Projekte jederzeit im Blick — übersichtlich, schnell und intuitiv.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 text-2xl">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold text-white">Automationen</h3>
            <p className="text-gray-400">
              Automatisiere Follow‑ups, Onboarding, Rechnungen und wiederkehrende Aufgaben ohne manuelle Arbeit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 text-2xl">
              💬
            </div>
            <h3 className="text-xl font-semibold text-white">Kommunikation</h3>
            <p className="text-gray-400">
              Zentrale Inbox für E‑Mails, Nachrichten und Kundenanfragen — alles an einem Ort.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 text-2xl">
              💳
            </div>
            <h3 className="text-xl font-semibold text-white">Abrechnung & Finanzen</h3>
            <p className="text-gray-400">
              Rechnungen, Angebote, Zahlungen und Reports in einem System — ohne externe Tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}