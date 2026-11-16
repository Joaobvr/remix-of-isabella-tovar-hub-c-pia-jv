import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const protocols = [
  { name: "Acelerador Metabólico", description: "Protocolos ajustados à necessidade do seu organismo para otimizar a metabolização de carboidratos e gorduras" },
  { name: "Boost Capilar", description: "Combinação de suplementos que atuam na prevenção e tratamento de queda capilar no emagrecimento" },
  { name: "Ganho de Massa Muscular", description: "Protocolos que contribuem com a disponibilidade de aminoácidos e estimulam processos anabólicos no tecido muscular" },
  { name: "Detox Hepático", description: "Suplementação com cofatores enzimáticos e antioxidantes que contribuem com a neutralização de toxinas e saúde do fígado" },
  { name: "Desinflamação Sistêmica", description: "Protocolos estruturados para reduzir inflamação crônica, neutralizar radicais livres e reduzir degradação celular" },
  { name: "Revitalização Energética", description: "Otimizar atividade mitocondrial e metabólica que contribuem com disposição e bem-estar" },
  { name: "Imunidade Avançada", description: "Protocolo de suplementação que otimiza a atividade do sistema imune" },
  { name: "Qualidade do Sono", description: "Protocolos personalizados que contribuem com um sono reparador" },
  { name: "Plus Bariátrico", description: "Protocolos para ajuste ou manutenção nutricional de bariátricos" },
  { name: "Emagrecimento Sem Déficit", description: "Protocolos para equalizar nutrientes e prevenir efeitos indesejáveis no emagrecimento" },
];

const ProtocolsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="protocolos" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-5">Objetivos que podem ser maximizados</p>
          <h2 className="section-heading title-sans text-[clamp(1.5rem,4.4vw,2.1rem)]">
            O que os protocolos{" "}
            <em className="italic text-primary">injetáveis podem oferecer</em>
          </h2>
        </div>

        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {protocols.map((protocol, index) => {
              const isOpen = activeIndex === index;

              const cardBody = (
                <>
                  <div className="flex items-center gap-3">
                    <div className="icon-circle w-7 h-7">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-[0.9rem] text-foreground font-light flex-1">
                      {protocol.name}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-muted-foreground transition-transform duration-200 sm:hidden",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>

                  {/* Mobile / touch expanded description */}
                  <div
                    className={cn(
                      "grid transition-all duration-200 sm:hidden",
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {protocol.description}
                      </p>
                    </div>
                  </div>
                </>
              );

              return (
                <Tooltip key={protocol.name}>
                  <TooltipTrigger asChild>
                    <div
                      onClick={() => toggle(index)}
                      className={cn(
                        "cursor-pointer select-none brand-card rounded-xl px-5 py-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
                        isOpen && "sm:shadow-md sm:-translate-y-0.5"
                      )}
                    >
                      {cardBody}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs text-center bg-popover text-popover-foreground hidden sm:block"
                  >
                    <p>{protocol.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        <p className="text-center text-muted-foreground text-[0.82rem] mt-10">
          Cada tratamento é definido após avaliação médica individual.
        </p>
      </div>
    </section>
  );
};

export default ProtocolsSection;
