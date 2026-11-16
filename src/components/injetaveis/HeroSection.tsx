import { Button } from "@/components/injetaveis/Button";
import draIsabella from "@/assets/injetaveis/dra-isabella-topo.jpg";
import { SkeletonImage } from "@/components/SkeletonMedia";

const HeroSection = () => {
  return (
    <section className="md:min-h-[80vh] flex flex-col items-center justify-center px-6 pt-6 pb-10 md:pt-10 md:pb-16 text-center">
      {/* Hero Image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-lg animate-fade-in">
        <SkeletonImage
          fill
          {...({ fetchpriority: "high" } as Record<string, string>)}
          src={draIsabella}
          alt="Dra. Isabella Tovar"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl animate-fade-up">
        <h1 className="section-heading title-sans text-[clamp(1.7rem,4.8vw,2.6rem)] leading-[1.25] mb-6">
          Promova o <em className="italic text-primary">equilíbrio</em> do seu organismo e a{" "}
          <em className="italic text-primary">alta performance</em> metabólica com precisão e segurança
        </h1>
        <p className="text-[0.92rem] text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          Tratamentos para melhorar sua composição corporal, equilíbrio hormonal e metabólico.{" "}
          <span className="text-primary">
            Porque sua saúde, autoconfiança e o prazer de viver tem muito valor.
          </span>
        </p>
        <Button variant="sage" size="lg" className="cta-gradient px-12 py-6 h-auto text-[0.8rem]" asChild>
          <a href="https://wa.me/5562996093076" target="_top" onClick={() => (window as any).fbq?.('track', 'Contact')}>
            Agendar Avaliação
          </a>
        </Button>
      </div>

      {/* Subtitle tag */}
      <p className="eyebrow mt-10 animate-fade-up-delay">Saúde, Beleza e Vitalidade</p>
    </section>
  );
};

export default HeroSection;
