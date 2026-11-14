import { useEffect } from "react";
import Navbar from "@/components/injetaveis/Navbar";
import HeroSection from "@/components/injetaveis/HeroSection";
import Divider from "@/components/injetaveis/Divider";
import IntroSection from "@/components/injetaveis/IntroSection";
import ProtocolsSection from "@/components/injetaveis/ProtocolsSection";
import CtaBand from "@/components/injetaveis/CtaBand";
import AboutSection from "@/components/injetaveis/AboutSection";
import FinalCta from "@/components/injetaveis/FinalCta";
import Footer from "@/components/injetaveis/Footer";

const Injetaveis = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Dra. Isabella Tovar | Terapias Injetáveis";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="lp-injetaveis min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Divider />
      <IntroSection />
      <ProtocolsSection />
      <CtaBand />
      <AboutSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Injetaveis;
