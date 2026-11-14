import NumberedCard from "@/components/NumberedCard";

const steps = [
  { num: "01", title: "Avaliação detalhada", desc: "Consulta individual com análise completa do seu histórico, exames, composição corporal e objetivos." },
  { num: "02", title: "Estratégia personalizada", desc: "Definição de um plano sob medida, respeitando sua biologia, rotina e preferências." },
  { num: "03", title: "Acompanhamento contínuo", desc: "Equipe multidisciplinar acompanhando cada etapa da sua jornada de transformação." },
  { num: "04", title: "Ajustes e otimização", desc: "Monitoramento constante com ajustes estratégicos para potencializar seus resultados." },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-gold mb-4 block">
          Método
        </span>
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">
          Como funciona
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {steps.map(({ num, title, desc }, i) => (
          <div key={num} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
            <NumberedCard num={num} title={title} className="h-full">
              {desc}
            </NumberedCard>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
