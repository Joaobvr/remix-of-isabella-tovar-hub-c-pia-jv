import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Hero from "@/components/ffsculpt/Hero";
import TechniqueSection from "@/components/ffsculpt/TechniqueSection";
import DoctorSection from "@/components/ffsculpt/DoctorSection";
import BeforeAfterSection from "@/components/ffsculpt/BeforeAfterSection";
import ContactForm from "@/components/ffsculpt/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import { useFadeUp } from "@/hooks/use-fade-up";

const TOPICS = [
  { label: "Resultados", id: "resultados" },
  { label: "A técnica FFSculpt", id: "tecnica" },
  { label: "Por que a Dra. Isabella", id: "por-que" },
  { label: "Sobre a Dra. Isabella", id: "sobre" },
  { label: "Pré-avaliação", id: "pre-avaliacao" },
];

const FFSculpt = () => {
  useFadeUp();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Dra. Isabella Tovar | FF Sculpt";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="lp-ffsculpt min-h-screen">
      <PageHeader topics={TOPICS} ctaTargetId="pre-avaliacao" ctaPixelEvent="Lead" />
      <Hero />
      <BeforeAfterSection />
      <TechniqueSection />
      <DoctorSection />
      <ContactForm />
      <SiteFooter />
    </main>
  );
};

export default FFSculpt;
