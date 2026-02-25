import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Hero />
      <Features />
      <AboutSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}