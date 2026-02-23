import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AgenturAutomate – KI f&uuml;r Marketing-Agenturen",
  description: "Wissens-Chatbot & Angebotsgenerator f&uuml;r Marketing-Agenturen."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}