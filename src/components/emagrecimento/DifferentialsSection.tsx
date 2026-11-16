import { Pill, Syringe, HeartPulse, Bug, Sparkles, Brain } from "lucide-react";

const pillars = [
  { icon: Pill, label: "Uso estratégico de medicamentos" },
  { icon: Syringe, label: "Suplementação injetável" },
  { icon: HeartPulse, label: "Ajustes hormonais" },
  { icon: Bug, label: "Ajustes da Microbiota Intestinal" },
  { icon: Sparkles, label: "Controle de Flacidez, Gordura Localizada e Lipedema" },
  { icon: Brain, label: "Suporte Psicológico" },
];

const DifferentialsSection = () => (
  <section id="ferramentas" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-gold mb-4 block">
          Abordagem completa
        </span>
        <h2 className="title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mb-4 text-foreground">
          Ferramentas de otimização
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-lg mx-auto font-body">
          De forma personalizada quando há indicação médica.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {pillars.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className="animate-on-scroll group brand-card rounded-xl p-4 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-gold/5 text-center"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="icon-circle w-9 h-9 mb-2 mx-auto">
              <Icon className="w-4 h-4" />
            </div>
            <p className="font-body text-xs font-medium text-foreground leading-tight">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
