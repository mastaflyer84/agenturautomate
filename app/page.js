import Hero from "../components/Hero";
import Feature from "../components/Features";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Feature />
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h2>Wissens-Chatbot</h2>
            <p>Dein gesamtes Agentur-Wissen als Chatbot – Prozesse, FAQs, Leistungsbeschreibungen, Onboarding.</p>
            <a href="/chatbot" className="btn btn-secondary">Mehr erfahren</a>
          </div>

          <div className="card">
            <h2>Angebotsgenerator</h2>
            <p>Erstelle Angebote in Minuten statt Stunden – mit konsistentem Wording und klarer Struktur.</p>
            <a href="/angebote" className="btn btn-secondary">Mehr erfahren</a>
          </div>
        </div>
      </section>
    </main>
  );
}
