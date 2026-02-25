import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-[#0A0A0A] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}