import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Bento } from "@/components/landing/Bento";
import { IndustryTabs } from "@/components/landing/IndustryTabs";
import { Calculator } from "@/components/landing/Calculator";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Vocl — The AI Voice Receptionist for Modern Businesses";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Vocl is the AI voice assistant that answers business calls, books appointments, and recovers lost revenue 24/7. Zero latency."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Bento />
      <IndustryTabs />
      <Calculator />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
