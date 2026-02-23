"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-title", { y: 40, opacity: 0, duration: 1.2 });
    gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1.2, delay: 0.2 });
    gsap.from(".hero-actions", { y: 20, opacity: 0, duration: 1.2, delay: 0.4 });
    gsap.from(".hero-orb", { scale: 0.8, opacity: 0, duration: 1.5 });
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-inner">

        <div className="hero-content">
          <h1 className="hero-title">Automatisiere deine Marketing-Agentur</h1>
          <p className="hero-sub">
            Wissens-Chatbot & Angebotsgenerator – weniger Aufwand, mehr Umsatz, klarere Prozesse.
          </p>

          <div className="hero-actions">
            <Link href="/chatbot" className="btn btn-primary">Wissens-Chatbot ansehen</Link>
            <Link href="/angebote" className="btn btn-secondary">Angebotsgenerator testen</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb"></div>
        </div>

      </div>
    </section>
  );
}