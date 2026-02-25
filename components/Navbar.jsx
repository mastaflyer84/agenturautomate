"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
            Finkora
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/about" className="hover:text-white transition">Über Finkora</Link>
          <Link href="/pricing" className="hover:text-white transition">Preise</Link>
          <Link href="/contact" className="hover:text-white transition">Kontakt</Link>
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          className="hidden md:block bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Kostenlos starten
        </Link>

      </div>
    </nav>
  );
}