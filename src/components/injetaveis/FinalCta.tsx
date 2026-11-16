import { Button } from "@/components/injetaveis/Button";

const FinalCta = () => (
  <section id="consulta" className="bg-charcoal py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full border border-primary/10 pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      <p className="eyebrow mb-6 text-cream/80">Pronto para começar?</p>
      <h2 className="title-sans text-[clamp(1.7rem,5vw,2.6rem)] text-cream mb-5">
        Seu protocolo <em className="italic text-sage-light">personalizado</em><br />
        começa aqui
      </h2>
      <p className="text-[0.85rem] text-cream/85 mb-10 tracking-wide">
        Agende sua consulta e descubra o tratamento ideal para o seu corpo.
      </p>
      <Button variant="sage" size="lg" className="cta-gradient ring-1 ring-cream/50 px-14 py-6 h-auto text-[0.78rem] tracking-[0.2em]" asChild>
        <a href="https://wa.me/5562996093076" target="_top" onClick={() => (window as any).fbq?.('track', 'Contact')}>Agendar consulta</a>
      </Button>
    </div>
  </section>
);

export default FinalCta;
