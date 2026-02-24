export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-gray-300 border-t border-white/10">

      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

        {/* Left Side: Branding */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold text-white mb-4">AgenturAutomate</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Die Premium‑Automatisierungsplattform für moderne Agenturen.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="hover:text-white transition" href="#">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a className="hover:text-white transition" href="#">
              <i className="ri-twitter-x-line text-2xl"></i>
            </a>
            <a className="hover:text-white transition" href="#">
              <i className="ri-linkedin-line text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:w-2/3">

          {/* Produkt */}
          <div>
            <h4 className="text-white font-medium mb-4">Produkt</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Features</a></li>
              <li><a className="hover:text-white transition" href="#">Preise</a></li>
              <li><a className="hover:text-white transition" href="#">Integrationen</a></li>
              <li><a className="hover:text-white transition" href="#">Roadmap</a></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white font-medium mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Über uns</a></li>
              <li><a className="hover:text-white transition" href="#">Blog</a></li>
              <li><a className="hover:text-white transition" href="#">Karriere</a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-white font-medium mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#">Impressum</a></li>
              <li><a className="hover:text-white transition" href="#">Datenschutz</a></li>
              <li><a className="hover:text-white transition" href="#">AGB</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AgenturAutomate. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}