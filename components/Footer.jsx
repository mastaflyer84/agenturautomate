export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">AgenturAutomate</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Die All‑in‑One Plattform für moderne Agenturen.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-3">Produkt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Preise</a></li>
              <li><a href="#" className="hover:text-white transition">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition">AGB</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AgenturAutomate. Alle Rechte vorbehalten.
          </p>

          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">💼</a>
            <a href="#" className="hover:text-white transition">📸</a>
          </div>
        </div>

      </div>
    </footer>
  );
}