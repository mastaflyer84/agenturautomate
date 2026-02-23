// app/layout.js
import "./globals.css";

export const metadata = {
  title: "AgenturAutomate",
  description: "Automatisierte Tools für Agenturen"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}