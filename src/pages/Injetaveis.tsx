import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import HeroSection from "@/components/injetaveis/HeroSection";
import Divider from "@/components/injetaveis/Divider";
import IntroSection from "@/components/injetaveis/IntroSection";
import ProtocolsSection from "@/components/injetaveis/ProtocolsSection";
import CtaBand from "@/components/injetaveis/CtaBand";
import AboutSection from "@/components/injetaveis/AboutSection";
import FinalCta from "@/components/injetaveis/FinalCta";
import SiteFooter from "@/components/SiteFooter";

const TOPICS = [
  { label: "Sobre os protocolos", id: "sobre-protocolos" },
  { label: "O que os protocolos oferecem", id: "protocolos" },
  { label: "Sobre a Dra. Isabella", id: "sobre" },
  { label: "Agende sua consulta", id: "consulta" },
];

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
      <PageHeader topics={TOPICS} ctaHref="https://wa.me/5562996093076" />
      <HeroSection />
      <Divider />
      <IntroSection />
      <ProtocolsSection />
      <CtaBand />
      <AboutSection />
      <FinalCta />
      <SiteFooter />
    </div>
  );
};

export default Injetaveis;
