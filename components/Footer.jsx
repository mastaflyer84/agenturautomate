export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] border-t border-white/10 py-16 mt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">AgenturAutomate</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Die All‑in‑One Plattform für moderne Agenturen.  
              Automatisiere Prozesse, spare Zeit und wachse effizienter.
            </p>
          </div>

          {/* LINKS 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Preise</a></li>
              <li><a href="#" className="hover:text-white transition">Demo</a></li>
              <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
            </ul>
          </div>

          {/* LINKS 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* LINKS 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition">AGB</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AgenturAutomate. Alle Rechte vorbehalten.
          </p>

          <div className="flex gap-6 text-gray-400 text-xl">
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">💼</a>
            <a href="#" className="hover:text-white transition">📸</a>
          </div>
        </div>

      </div>
    </footer>
  );
}