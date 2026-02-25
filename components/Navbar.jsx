"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => (pathname === href ? "active" : "");

  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
          <span>AgenturAutomate</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/chatbot" className={isActive("/chatbot")}>Wissens-Chatbot</Link>
          <Link href="/angebote" className={isActive("/angebote")}>Angebotsgenerator</Link>
          <Link href="/agentur" className={isActive("/agentur")}>Für Agenturen</Link>
          <Link href="/preise" className={isActive("/preise")}>Preise</Link>
          <Link href="/about" className={`hover:text-white transition ${isActive("/about")}`}>Über uns</Link>
          <Link href="/kontakt" className={`btn btn-primary btn-small ${isActive("/kontakt")}`}>Demo</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="mobile-nav container">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/chatbot" onClick={() => setOpen(false)}>Wissens-Chatbot</Link>
          <Link href="/angebote" onClick={() => setOpen(false)}>Angebotsgenerator</Link>
          <Link href="/agentur" onClick={() => setOpen(false)}>Für Agenturen</Link>
          <Link href="/preise" onClick={() => setOpen(false)}>Preise</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Über uns</Link>
          <Link href="/kontakt" onClick={() => setOpen(false)} className="btn btn-primary btn-small">Demo</Link>
        </div>
      )}
    </header>
  );
}