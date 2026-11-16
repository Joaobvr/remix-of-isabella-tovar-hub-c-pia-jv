import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/emagrecimento/HeroSection";
import AboutSection from "@/components/emagrecimento/AboutSection";
import DifferentialsSection from "@/components/emagrecimento/DifferentialsSection";
import HowItWorksSection from "@/components/emagrecimento/HowItWorksSection";
import FinalCTASection from "@/components/emagrecimento/FinalCTASection";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";

const WHATSAPP_URL = "https://wa.me/556296093076?text=Olá! Gostaria de agendar uma avaliação.";

const TOPICS = [
  { label: "Como funciona", id: "como-funciona" },
  { label: "Ferramentas de otimização", id: "ferramentas" },
  { label: "Sobre a Dra. Isabella", id: "sobre" },
  { label: "Agende sua avaliação", id: "agendar" },
];

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
      <PageHeader topics={TOPICS} ctaHref={WHATSAPP_URL} />
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <AboutSection />
      <FinalCTASection />
      <SiteFooter />
    </div>
  );
};

export default Emagrecimento;
