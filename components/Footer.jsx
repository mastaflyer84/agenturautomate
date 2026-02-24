// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 border-t border-white/10">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Bereit, deine Agentur zu automatisieren?
        </h2>
        <p className="text-gray-400 mb-8">
          Starte kostenlos und erlebe, wie viel Zeit du wirklich sparen kannst.
        </p>
        <a
          href="/signup"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Kostenlos starten
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Branding */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">AgenturAutomate</h3>
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

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-8 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AgenturAutomate. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}