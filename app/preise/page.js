export default function PreisePage() {
  return (
    <main>
      <section className="section">
        <div className="container grid grid-3">

          <div className="card pricing-card">
            <h3>Starter</h3>
            <p className="price">490 &euro; / Monat</p>
            <ul>
              <li>Basis-Wissens-Chatbot</li>
              <li>Basis-Angebotsgenerator</li>
              <li>E-Mail-Support</li>
            </ul>
          </div>

          <div className="card pricing-card pricing-card-highlight">
            <h3>Professional</h3>
            <p className="price">990 &euro; / Monat</p>
            <ul>
              <li>Erweiterte Wissensbasis</li>
              <li>Individuelle Angebots-Templates</li>
              <li>Priorit&auml;ts-Support</li>
            </ul>
          </div>

          <div className="card pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Auf Anfrage</p>
            <ul>
              <li>Custom Integrationen</li>
              <li>SSO & SLA</li>
              <li>Dedizierter Ansprechpartner</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
