import Chatbot from "../../components/Chatbot";

export default function ChatbotPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h1>Dein Agentur-Wissen als Chatbot</h1>
            <p>Alle Prozesse, FAQs und Leistungsbeschreibungen als sofort abrufbare Antworten f&uuml;r dein Team.</p>
          </div>

          <Chatbot />
        </div>
      </section>
    </main>
  );
}