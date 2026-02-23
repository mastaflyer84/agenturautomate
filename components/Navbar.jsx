"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => (pathname === href ? "active" : "");

  return (
    <header className="site-header">
      <div className="container header-inner">

        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
          <span>AgenturAutomate</span>
        </div>

        <nav className="main-nav">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/chatbot" className={isActive("/chatbot")}>Wissens-Chatbot</Link>
          <Link href="/angebote" className={isActive("/angebote")}>Angebotsgenerator</Link>
          <Link href="/agentur" className={isActive("/agentur")}>F&uuml;r Agenturen</Link>
          <Link href="/preise" className={isActive("/preise")}>Preise</Link>
          <Link href="/kontakt" className={`btn btn-primary btn-small ${isActive("/kontakt")}`}>Demo</Link>
        </nav>

      </div>
      <div className="container">
  ...
</div>
    </header>
  );
}
