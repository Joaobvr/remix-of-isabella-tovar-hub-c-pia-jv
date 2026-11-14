import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/emagrecimento/HeroSection";
import AboutSection from "@/components/emagrecimento/AboutSection";
import DifferentialsSection from "@/components/emagrecimento/DifferentialsSection";
import HowItWorksSection from "@/components/emagrecimento/HowItWorksSection";
import FinalCTASection from "@/components/emagrecimento/FinalCTASection";
import Footer from "@/components/emagrecimento/Footer";

const Emagrecimento = () => {
  useScrollAnimation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Dra. Isabella Tovar | Emagrecimento";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="lp-emagrecimento min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Emagrecimento;
