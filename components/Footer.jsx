export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-20 relative overflow-hidden w-full">

      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/15 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-20 right-0 w-[550px] h-[550px] bg-teal-400/15 blur-[180px] rounded-full"></div>
      </div>

      {/* WICHTIG: Dieser Container darf NICHT schmaler sein */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* WICHTIG: Kein flex, kein width-limit, kein container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">

          {/* Produkt */}
          <div className="w-full">
            <h4 className="text-white font-medium mb-4">Produkt</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Features</a></li>
              <li><a className="hover:text-white transition" href="#">Preise</a></li>
              <li><a className="hover:text-white transition" href="#">Integrationen</a></li>
              <li><a className="hover:text-white transition" href="#">Roadmap</a></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="w-full">
            <h4 className="text-white font-medium mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Über uns</a></li>
              <li><a className="hover:text-white transition" href="#">Blog</a></li>
              <li><a className="hover:text-white transition" href="#">Karriere</a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="w-full">
            <h4 className="text-white font-medium mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Impressum</a></li>
              <li><a className="hover:text-white transition" href="#">Datenschutz</a></li>
              <li><a className="hover:text-white transition" href="#">AGB</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AgenturAutomate. Alle Rechte vorbehalten.
        </div>

      </div>
    </footer>
  );
}