import OfferGenerator from "../../components/OfferGenerator";

export default function AngebotePage() {
  return (
    <main>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h1>Angebote in Minuten statt Stunden</h1>
            <p>Gef&uuml;hrte Angebotserstellung mit deinen Paketen, Stundens&auml;tzen und Textbausteinen.</p>
          </div>

          <OfferGenerator />
        </div>
      </section>
    </main>
  );
}
