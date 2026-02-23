"use client";

import { useState, useEffect, useRef } from "react";

const cannedAnswers = [
  {
    keywords: ["onboarding", "einarbeitung"],
    answer:
      "Unser Onboarding-Prozess umfasst Kick-off-Call, Zugangseinrichtung, Tool-Setup und erste Kampagnenplanung innerhalb von 7–10 Tagen."
  },
  {
    keywords: ["seo", "seo-paket"],
    answer:
      "Das SEO-Paket X enth&auml;lt Keyword-Research, Onpage-Optimierung, monatliches Reporting und 4 Content-Pieces pro Monat."
  },
  {
    keywords: ["reporting", "berichte"],
    answer:
      "Standard-Reporting erfolgt monatlich, bei gr&ouml;&szlig;eren Retainer-Kunden zus&auml;tzlich ein Quartals-Strategie-Review."
  }
];

function findAnswer(question) {
  const q = question.toLowerCase();
  for (const entry of cannedAnswers) {
    if (entry.keywords.some((k) => q.includes(k))) return entry.answer;
  }
  return "Ich habe dazu noch keinen Eintrag in der Wissensbasis. In der echten Version w&uuml;rdest du hier deine Agentur-Dokumente anbinden.";
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Frag mich etwas zu deinen Agentur-Prozessen, Angeboten oder Paketen." }
  ]);

  const [input, setInput] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");

    setTimeout(() => {
      setMessages((m) => [...m, { sender: "bot", text: findAnswer(text) }]);
    }, 400);
  };

  return (
    <div className="card">
      <div className="chat-window" ref={ref}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-message ${m.sender}`}>
            <div className="chat-bubble">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Frage zum Agentur-Wissen stellen..."
        />

        <button className="btn btn-primary btn-small" onClick={send}>
          Senden
        </button>
      </div>
    </div>
  );
}