"use client";

import { useState } from "react";

function generateOffer({ industry, budget, goals, services }) {
  const servicesLabel =
    services.length > 0 ? services.join(", ") : "individuell abgestimmte Leistungen";

  return [
    `Angebotsentwurf – ${industry || "Kunde"}`,
    "",
    `Budgetrahmen: ca. ${budget || "n. n."} € / Monat`,
    "",
    "Ziele der Zusammenarbeit:",
    goals || "Ziele werden im Gespräch konkretisiert.",
    "",
    "Leistungsumfang (Auszug):",
    `- ${servicesLabel}`,
    "",
    "Nächste Schritte:",
    "- Feinabstimmung des Leistungsumfangs im gemeinsamen Call",
    "- Finalisierung des Angebots inkl. Laufzeiten & Konditionen"
  ].join("\n");
}

export default function OfferGenerator() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [goals, setGoals] = useState("");
  const [services, setServices] = useState([]);
  const [output, setOutput] = useState("");

  const handleServicesChange = (e) => {
    const values = Array.from(e.target.selectedOptions).map((o) => o.textContent);
    setServices(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(generateOffer({ industry, budget, goals, services }));
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Branche des Kunden</label>
          <input value={industry} onChange={(e) => setIndustry(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Budgetrahmen (monatlich)</label>
          <input
            type="number"
            min="0"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Ziele der Kampagne</label>
          <textarea value={goals} onChange={(e) => setGoals(e.target.value)} rows={3} />
        </div>

        <div className="form-group">
          <label>Leistungsumfang</label>
          <select multiple onChange={handleServicesChange}>
            <option>SEO</option>
            <option>SEA / Paid Ads</option>
            <option>Social Media Betreuung</option>
            <option>Content Marketing</option>
            <option>Strategie & Beratung</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          Angebotsentwurf generieren
        </button>
      </form>

      {output && (
        <pre
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
            fontSize: "0.9rem"
          }}
        >
          {output}
        </pre>
      )}
    </div>
  );
}