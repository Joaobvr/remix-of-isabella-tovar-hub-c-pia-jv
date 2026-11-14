import { useEffect } from "react";
import Navbar from "@/components/ffsculpt/Navbar";
import Hero from "@/components/ffsculpt/Hero";
import TechniqueSection from "@/components/ffsculpt/TechniqueSection";
import DoctorSection from "@/components/ffsculpt/DoctorSection";
import BeforeAfterSection from "@/components/ffsculpt/BeforeAfterSection";
import ContactForm from "@/components/ffsculpt/ContactForm";
import Footer from "@/components/ffsculpt/Footer";
import { useFadeUp } from "@/hooks/use-fade-up";

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
      <Navbar />
      <Hero />
      <BeforeAfterSection />
      <TechniqueSection />
      <DoctorSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default FFSculpt;
