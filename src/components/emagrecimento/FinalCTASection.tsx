import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/556296093076?text=Olá! Gostaria de agendar uma avaliação.";

const FinalCTASection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto text-center animate-on-scroll">
      <div className="bg-gradient-to-br from-primary/5 via-nude to-rose/10 rounded-3xl p-12 md:p-16 border border-border/40">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground leading-tight">
          Seu corpo precisa de <span className="italic text-primary">estratégia</span>, não de mais tentativas frustradas
        </h2>
        <p className="text-muted-foreground font-body mb-10 max-w-md mx-auto">
          Dê o primeiro passo para um emagrecimento saudável e duradouro com acompanhamento médico.
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
          <Button size="lg" className="rounded-full px-10 py-6 text-base gap-3 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
            <Calendar className="w-5 h-5" />
            Agendar minha avaliação
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
