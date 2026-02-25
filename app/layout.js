import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AgenturAutomate – KI für Marketing-Agenturen",
  description: "Wissens-Chatbot & Angebotsgenerator für Marketing-Agenturen."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-[#0d0d0d] antialiased">
        <Navbar />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}