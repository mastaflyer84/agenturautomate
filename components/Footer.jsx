import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-20 mt-32 bg-[#0A0A0A] text-gray-300 border-t border-white/10">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full"></div>
        <div className="absolute -top-20 right-0 w-[450px] h-[450px] bg-teal-400/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
              Finkora
            </span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Das Betriebssystem für Agenturen – Klarheit, Struktur und Automatisierung in einer Plattform.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Produkt</h4>
          <ul className="space-y-2">
            <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">Preise</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Über Finkora</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-white transition">Kontakt</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
          <ul className="space-y-2">
            <li><Link href="/impressum" className="hover:text-white transition">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} Finkora. Alle Rechte vorbehalten.
      </div>

    </footer>
  );
}