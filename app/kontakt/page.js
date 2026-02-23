"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="section">
        <div className="container grid grid-2">

          <div>
            <h1>Demo anfragen</h1>
            <p>Wir zeigen dir live, wie Wissens-Chatbot und Angebotsgenerator in deiner Agentur aussehen k&ouml;nnen.</p>
          </div>

          <form className="card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Agenturname</label>
              <input required />
            </div>

            <div className="form-group">
              <label>E-Mail</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Teamgr&ouml;&szlig;e</label>
              <select>
                <option>1–5</option>
                <option>6–15</option>
                <option>16–30</option>
                <option>30+</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-full">Demo anfragen</button>

            {submitted && (
              <p style={{ marginTop: "0.8rem" }}>
                Danke f&uuml;r deine Anfrage! In der echten Version w&uuml;rde hier dein CRM / E-Mail-Flow starten.
              </p>
            )}
          </form>

        </div>
      </section>
    </main>
  );
}