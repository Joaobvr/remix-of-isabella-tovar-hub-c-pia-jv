import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5562996093076?text=Olá! Gostaria de agendar uma avaliação.";

const FinalCTASection = () => (
  <section id="agendar" className="section-padding">
    <div className="max-w-3xl mx-auto text-center animate-on-scroll">
      <div className="bg-gradient-to-br from-primary/5 via-nude to-rose/10 rounded-3xl px-6 py-10 sm:p-12 md:p-16 border border-border/40">
        <h2 className="title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mb-4 text-foreground">
          Seu corpo precisa de <span className="italic text-primary">estratégia</span>, não de mais tentativas frustradas
        </h2>
        <p className="text-muted-foreground font-body mb-10 max-w-md mx-auto">
          Dê o primeiro passo para um emagrecimento saudável e duradouro com acompanhamento médico.
        </p>
        <Button
          asChild
          size="lg"
          className="cta-gradient w-full sm:w-auto max-w-full h-auto whitespace-normal rounded-full px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base gap-3 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
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
            <Calendar className="w-5 h-5 shrink-0" />
            Agendar minha avaliação
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
