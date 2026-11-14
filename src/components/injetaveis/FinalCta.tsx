import { Button } from "@/components/injetaveis/Button";

const FinalCta = () => (
  <section id="consulta" className="bg-charcoal py-28 px-6 md:px-12 text-center relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full border border-primary/10 pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      <p className="eyebrow mb-6">Pronto para começar?</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-cream leading-tight mb-5">
        Seu protocolo <em className="italic text-sage-light">personalizado</em><br />
        começa aqui
      </h2>
      <p className="text-[0.85rem] text-cream/50 mb-14 tracking-wide">
        Agende sua consulta e descubra o tratamento ideal para o seu corpo.
      </p>
      <Button variant="sage" size="lg" className="px-14 py-6 h-auto text-[0.78rem] tracking-[0.2em]" asChild>
        <a href="https://wa.me/556296093076" target="_top" onClick={() => (window as any).fbq?.('track', 'Contact')}>Agendar consulta</a>
      </Button>
    </div>
  </section>
);

export default FinalCta;
