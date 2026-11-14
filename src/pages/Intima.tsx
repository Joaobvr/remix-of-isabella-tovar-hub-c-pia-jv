import { useEffect } from "react";
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Droplets,
  Flower2,
  Sun,
  Activity,
  Stethoscope,
  ClipboardCheck,
  Microscope,
  HandHeart,
  CircleCheck,
  Scissors,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  VolumeIllustration,
  FirmnessIllustration,
  RejuvenationIllustration,
  RetractionIllustration,
  ComfortIllustration,
  FlowerMark,
} from "@/components/intima/Illustrations";
import draIsabellaPhoto from "@/assets/intima/dra-isabella.jpg";
import PageHeader from "@/components/PageHeader";

const WHATSAPP_AGENDAR =
  "https://wa.me/556296093076?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const TOPICS = [
  { label: "Você se reconhece?", id: "conexao" },
  { label: "O método", id: "metodo" },
  { label: "Benefícios", id: "beneficios" },
  { label: "Sobre a médica", id: "sobre" },
  { label: "Agende sua avaliação", id: "contato" },
];

const Section = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className={`px-6 md:px-10 py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
    <span className="h-px w-8 bg-foreground/30" />
    {children}
  </div>
);

function LandingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Dra. Isabella Tovar | Harmonização Íntima";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="lp-intima bg-background text-foreground overflow-x-clip">
      <PageHeader topics={TOPICS} ctaHref={WHATSAPP_AGENDAR} />

      {/* 1. HERO */}
      <section className="relative min-h-[100svh] flex items-center px-6 md:px-10 pt-12 pb-20">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, var(--peach-pink) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, var(--olive-green) 0%, transparent 60%), var(--off-white)",
          }}
        />
        <div className="absolute top-1/4 right-[-120px] w-[400px] h-[400px] rounded-full opacity-40 blur-3xl -z-10"
          style={{ background: "var(--peach-pink)" }}
        />

        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Eyebrow>Harmonização Íntima Feminina</Eyebrow>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] tracking-tight">
              Redescubra sua{" "}
              <em className="italic text-foreground/70">feminilidade</em>,
              <br className="hidden md:block" /> confiança e bem-estar íntimo.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A harmonização íntima vai muito além da estética. É sobre conforto,
              saúde, confiança, prazer e qualidade de vida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full h-14 px-8 text-sm tracking-wide bg-primary text-background hover:bg-primary/90"
              >
                <a
                  href="https://wa.me/556296093076?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20se%20a%20harmoniza%C3%A7%C3%A3o%20%C3%ADntima%20%C3%A9%20para%20mim."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
                      (window as any).fbq("track", "Contact");
                    }
                  }}
                >
                  Agendar Avaliação Médica
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full h-14 px-6 text-sm tracking-wide hover:bg-transparent hover:text-foreground/60"
              >
                <a href="#metodo">Conhecer o método →</a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 relative hidden md:block">
            <div
              className="aspect-[4/5] rounded-[3rem] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, var(--secondary) 0%, var(--peach-pink) 100%)",
              }}
            >
              <div className="absolute inset-8 rounded-[2.5rem] border border-white/40" />
              <div className="absolute bottom-10 left-10 right-10 text-foreground/80">
                <FlowerMark className="w-10 h-10 mb-4" />
                <p className="font-serif text-2xl italic leading-snug">
                  "A saúde da mulher começa pela forma como ela se sente
                  consigo mesma."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONEXÃO (DOR) */}
      <Section id="conexao" className="bg-secondary">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Eyebrow>Você se reconhece?</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Sentir-se bem com seu corpo é um direito seu.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5">
            {[
              "Incômodo com a aparência da região íntima",
              "Flacidez ou excesso de volume no monte de Vênus",
              "Escurecimento da pele ou perda de uniformidade",
              "Desconforto com os pequenos lábios",
              "Ressecamento, dor e alterações ao longo do tempo",
              "Perda de confiança na intimidade",
              "Sensação de falta de firmeza interna",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 pb-5 border-b border-foreground/10"
              >
                <span className="font-serif text-2xl text-foreground/40 mt-1 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-foreground/80 leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
            <p className="font-serif text-2xl md:text-3xl italic mt-10 leading-snug text-foreground/90">
              Você não precisa aceitar isso como algo definitivo ou inevitável.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. TRANSFORMAÇÃO — removido */}

      {/* 4. DIFERENCIAL DO MÉTODO */}
      <Section id="metodo" className="bg-primary text-background">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-background/60 mb-6">
              <span className="h-px w-8 bg-background/40" />
              O método
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-background">
              Procedimentos sem corte,{" "}
              <em className="italic text-background/60">sem cicatrizes</em>,
              com recuperação rápida.
            </h2>
            <p className="mt-6 text-background/70 leading-relaxed">
              Uma abordagem moderna que une tecnologia, ciência e sensibilidade
              clínica para resultados naturais e progressivos.
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-hidden">
            {[
              { Icon: Scissors, label: "Sem corte" },
              { Icon: Sparkles, label: "Sem cicatrizes" },
              { Icon: ShieldCheck, label: "Sem cirurgia" },
              { Icon: HeartHandshake, label: "Sem hematomas e sem sangramentos" },
              { Icon: Clock, label: "Recuperação rápida" },
              { Icon: Leaf, label: "Resultados progressivos" },
            ].map(({ Icon, label }, i) => (
              <div
                key={i}
                className="bg-primary px-6 py-5 flex flex-row items-center gap-4 hover:bg-primary/95 transition-colors"
              >
                <div className="icon-circle w-11 h-11">
                  <Icon className="w-5 h-5" strokeWidth={1.4} />
                </div>
                <p className="text-[0.95rem] font-normal leading-snug text-background" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. BENEFÍCIOS FUNCIONAIS */}
      <Section id="beneficios">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-20">
            <Eyebrow>Benefícios funcionais</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Mais do que estética. Saúde, conforto e{" "}
              <em className="italic text-foreground/60">qualidade de vida</em>.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              Todas nós queremos melhorar algum detalhe em nossa intimidade. A
              confiança e autoestima; a segurança para viver com prazer e
              plenitude... firmeza na pele ou interna; o excesso de pele,
              escape de urina, aspecto de pele murcha, excesso de volume... São
              aspectos que, muitas vezes, evitamos questionar ou falar... Mas
              podem minar sua confiança e sua felicidade.
            </p>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              O importante é identificar o que está limitando sua liberdade e
              confiança e combater com coragem e segurança.
            </p>
            <p className="font-serif text-2xl md:text-3xl italic leading-snug text-foreground/90 border-l-2 border-foreground/30 pl-6">
              Nenhuma mulher se sente plena sem ter segurança em sua intimidade.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. PARA QUEM É — removido */}

      {/* 7. TECNOLOGIAS — removido */}

      {/* 8. SOBRE A MÉDICA */}
      <Section id="sobre" className="bg-secondary">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div
              className="aspect-[4/5] rounded-[2.5rem] relative overflow-hidden flex items-end p-8"
              style={{
                background:
                  "linear-gradient(180deg, var(--secondary) 0%, var(--peach-pink) 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                <img
                  src={draIsabellaPhoto}
                  alt="Dra. Isabella Tovar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 text-foreground bg-background/80 backdrop-blur rounded-2xl p-5">
                <p className="font-serif text-2xl leading-tight">Dra. Isabella Tovar</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  CRM: 27286 GO
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <Eyebrow>Sobre a médica</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Um olhar integral sobre a{" "}
              <em className="italic text-foreground/60">saúde da mulher</em>.
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                A Dra. Isabella Tovar é médica com foco em saúde da mulher,
                dedicada ao acompanhamento integral feminino.
              </p>
              <p>
                Seu olhar vai além dos aspectos biológicos, considerando também
                fatores fundamentais como autoestima, confiança, beleza,
                disposição e qualidade de vida.
              </p>
              <p>
                Acredita que a saúde da mulher está diretamente conectada à
                forma como ela se sente consigo mesma — por isso, seus
                tratamentos são pensados para promover não apenas resultados
                físicos, mas também bem-estar e segurança.
              </p>
              <p>
                Seu modelo de atendimento é baseado em acompanhamento contínuo,
                permitindo ajustes individualizados e evolução progressiva dos
                resultados ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. SEGURANÇA — removido */}

      {/* 10. CTA FINAL */}
      <Section id="contato" className="pb-32">
        <div
          className="rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-16 py-20 md:py-28 text-center relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, var(--peach-pink) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--olive-green) 0%, transparent 60%), var(--secondary)",
          }}
        >
          <FlowerMark className="w-12 h-12 mx-auto mb-8 opacity-60" />
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Cuidar da sua intimidade também é{" "}
            <em className="italic text-foreground/70">cuidar de você</em>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Dê o primeiro passo. Uma conversa segura, acolhedora e sem
            julgamentos.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-12 rounded-full h-14 px-10 text-sm tracking-wide bg-primary text-background hover:bg-primary/90"
          >
            <a
              href="https://wa.me/556296093076?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
                  (window as any).fbq("track", "Contact");
                }
              }}
            >
              Agendar avaliação
            </a>
          </Button>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-10 border-t border-foreground/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <FlowerMark className="w-5 h-5" />
              <span className="font-serif text-sm text-foreground">
                Dra. Isabella Tovar
              </span>
            </div>
            <p>MÉDICA | CRM: 27286 GO</p>
            <p>Atendimento em Goiânia ou Online</p>
            <p>Vizz Clinic | Setor Marista</p>
            <a
              href="https://maps.app.goo.gl/TSMGRL7jCHvG4TXN9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition"
            >
              Ver localização no mapa
            </a>
          </div>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
