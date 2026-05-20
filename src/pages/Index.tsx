import { Activity, Sparkles, Heart, Syringe, Pill, Stethoscope, Instagram, MessageCircle, MapPin, Droplets, CalendarCheck } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ServiceBanner from "@/components/ServiceBanner";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";

const services = [
  { icon: Activity, label: "Emagrecimento e Recomposição Corporal", description: "Tratamento para emagrecer preservando sua massa muscular, sua saúde metabólica e sua beleza.", href: "https://emagrecimento.draisabellatovar.com.br/" },
  { icon: Sparkles, label: "FF Sculpt | Harmonização Corporal", description: "Técnica patenteada que promove redução progressiva de gordura localizada e da flacidez.", href: "https://ffsculpt.draisabellatovar.com.br/" },
  { icon: Heart, label: "Regeneração e Estética Íntima", description: "Procedimentos para melhorar a estética e a funcionalidade da região íntima, tanto da parte externa quanto interna da vagina.", href: "https://intima.draisabellatovar.com.br/" },
  { icon: Syringe, label: "Terapias Injetáveis", description: "Protocolos ajustáveis para otimizar seu metabolismo em diversos contextos, como proteção capilar, disposição e controle de inflamação crônica.", href: "https://injetaveis.draisabellatovar.com.br/" },
  { icon: Pill, label: "Terapias e Implantes Hormonais", description: "Implantes Hormonais e não Hormonais e outras formas de Reposição Hormonal para diferente condições clínicas como menopausa e perda de libido." },
  { icon: Droplets, label: "Tratamento de Lipedema", description: "Tratamento de lipedema multimodal para redução de sintomas e estética da região afetada." },
  { icon: Stethoscope, label: "Acompanhamento Ginecológico", description: "Prevenção e acompanhamento ginecológico. Endometriose, SOP, DIU, Implanon, etc." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-5 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 animate-page-fade-in">
        {/* Header */}
        <header className="relative mb-10 overflow-hidden rounded-3xl flex flex-col min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
          {/* Background photo with gradient fade to background */}
          <div className="absolute inset-x-0 top-0 h-[55vh] sm:h-[60vh] -z-10">
            <img
              src={profilePhoto}
              alt="Dra. Isabella Tovar"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.7) 15%, hsl(var(--background) / 0.2) 28%, transparent 33%)",
              }}
            />
          </div>

          <div className="flex flex-col items-center text-center px-5 pb-4 mt-auto">
            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground">
              Dra. Isabella Tovar
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-muted-foreground">
              Médica · CRM 27286
            </p>

            <p className="mt-4 max-w-sm sm:max-w-md md:max-w-lg text-base sm:text-lg md:text-xl leading-relaxed text-foreground">
              Uso a medicina para melhorar a vida das minhas pacientes com Emagrecimento Saudável; Equilíbrio Hormonal e Metabólico; Harmonização Íntima e Corporal e Acompanhamento Ginecológico.
            </p>

            <p className="mt-3 max-w-sm sm:max-w-md md:max-w-lg text-sm sm:text-base font-light tracking-[0.2em] leading-relaxed text-foreground italic">
              Porque sua saúde, disposição, autoconfiança e prazer em viver tem muito valor.
            </p>

            <a
              href="https://wa.me/556296093076"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).fbq?.('track', 'Contact')}
              className="mt-5"
            >
              <Button className="rounded-full px-10 py-2.5 text-xs font-light tracking-[0.3em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                <CalendarCheck className="h-4 w-4 mr-2" strokeWidth={1.4} />
                Agendar Consulta
              </Button>
            </a>
          </div>
        </header>

        {/* Service Banners */}
        <TooltipProvider delayDuration={200}>
          <nav className="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16">
            {services.map((service, i) => (
              <ServiceBanner
                key={service.label}
                icon={service.icon}
                label={service.label}
                description={service.description}
                href={service.href}
                delay={300 + i * 100}
              />
            ))}
          </nav>
        </TooltipProvider>

        {/* CTA after services */}
        <div className="flex justify-center mb-14">
          <a
            href="https://wa.me/556296093076"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq?.('track', 'Contact')}
          >
            <Button className="rounded-full px-10 py-2.5 text-xs font-light tracking-[0.3em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              <CalendarCheck className="h-4 w-4 mr-2" strokeWidth={1.4} />
              Agendar Consulta
            </Button>
          </a>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground transition-colors hover:text-primary hover:border-accent"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.6} />
            </a>
            <a
              href="https://wa.me/556296093076"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => (window as any).fbq?.('track', 'Contact')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground transition-colors hover:text-primary hover:border-accent"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span>Atendimento em Goiânia GO e Online</span>
          </div>

          <p className="text-xs text-muted-foreground/60">
            Dra. Isabella Tovar | CRM 27286 GO
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
