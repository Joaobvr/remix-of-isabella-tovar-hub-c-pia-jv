import { Button } from "@/components/injetaveis/Button";
import draIsabella from "@/assets/injetaveis/dra-isabella.jpg";

const AboutSection = () => (
  <section id="sobre" className="px-6 md:px-12 py-14 md:py-20">
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <div className="relative flex flex-col items-center">
        <div className="w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          <img src={draIsabella} alt="Dra. Isabella Tovar" className="w-full h-full object-cover object-top" />
        </div>
        <p className="mt-4 text-[0.78rem] tracking-[0.15em] uppercase text-muted-foreground text-center">
          Dra. Isabella Tovar <span className="text-primary">|</span> Médica CRM 27286 GO
        </p>
      </div>

      {/* Text */}
      <div>
        <p className="eyebrow mb-5">Conheça a especialista</p>
        <h2 className="section-heading title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mb-7">
          Dra. Isabella <em className="italic text-primary">Tovar</em>
        </h2>
        <p className="text-[0.9rem] text-muted-foreground leading-[1.9] mb-10">
          Médica que entende que o organismo deve ser cuidado de forma integral,
          sendo que o equilíbrio metabólico, hormonal e nutricional são fundamentos
          da homeostase. Atua principalmente em tratamentos de emagrecimento,
          terapia hormonal, implantes hormonais, harmonização corporal e íntima,
          tratamentos de lipedema, endometriose e saúde integral da mulher.
        </p>
        <Button variant="sageOutline" size="lg" className="px-10 py-5 h-auto" asChild>
          <a href="#consulta">Saiba mais</a>
        </Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
