import draIsabella from "@/assets/emagrecimento/dra-isabella.jpg";
import { SkeletonImage } from "@/components/SkeletonMedia";
import DoctorPhotoBadge from "@/components/DoctorPhotoBadge";

const AboutSection = () => (
  <section id="sobre" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="animate-on-scroll order-2 lg:order-1">
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-border/40">
              <SkeletonImage fill loading="lazy" src={draIsabella} alt="Dra. Isabella Tovar" className="w-full h-full object-cover" />
              <DoctorPhotoBadge />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold/10 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/5 -z-10" />
          </div>
        </div>

        {/* Text */}
        <div className="animate-on-scroll order-1 lg:order-2">
          <span className="text-sm font-body tracking-[0.2em] uppercase text-gold mb-4 block">
            Sobre a Dra. Isabella
          </span>
          <h2 className="title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mb-6 text-foreground">
            Uma abordagem <span className="italic text-primary">integral</span> do seu corpo
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              A Dra. Isabella Tovar trabalha com uma abordagem completa do organismo, avaliando cada paciente de forma minuciosa para desenvolver um plano individualizado, respeitando sua biologia, rotina e objetivos.
            </p>
            <p>
              Com olhar científico e humanizado, ela integra diferentes áreas do cuidado — da nutrição ao equilíbrio hormonal — para garantir resultados consistentes e duradouros.
            </p>
            <p>
              Seu compromisso é com a sua saúde integral: emagrecimento com preservação da massa muscular, da disposição e da autoestima.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
