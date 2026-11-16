import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/emagrecimento/hero-evolution.png";

const WHATSAPP_URL = "https://wa.me/5562996093076?text=Olá! Gostaria de agendar uma avaliação.";

const HeroSection = () => (
  <section className="relative md:min-h-[80vh] flex items-center section-padding overflow-hidden">
    {/* Hero background image */}
    <img
      src={heroImage}
      alt="Evolução corporal feminina"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    {/* Overlay for text readability */}
    <div className="absolute inset-0 bg-background/40 z-0" />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="max-w-2xl mx-auto text-center">

        <h1 className="title-sans text-[clamp(1.9rem,5.6vw,3rem)] leading-[1.2] mb-6 text-foreground">
          Emagreça com saúde,{" "}
          <span className="italic text-primary">beleza</span> e disposição
        </h1>

        <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          Nossa missão é fornecer todo suporte para eliminar gordura, ganhar músculos, evitar flacidez e obter o equilíbrio metabólico
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
              (window as any).fbq("track", "Contact");
            }
          }}
        >
          <Button size="lg" className="cta-gradient rounded-full px-8 py-6 text-base gap-3 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
            <Calendar className="w-5 h-5" />
            Agendar avaliação
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
