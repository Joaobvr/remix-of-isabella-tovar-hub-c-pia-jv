import { Activity, Sparkles, Heart, Syringe, Pill, Stethoscope, Instagram, MessageCircle, MapPin, Droplets, CalendarCheck } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ServiceBanner from "@/components/ServiceBanner";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Activity, label: "Emagrecimento com Saúde, Beleza e Disposição" },
  { icon: Sparkles, label: "FF Sculpt | Harmonização Corporal" },
  { icon: Heart, label: "Regeneração e Estética Íntima" },
  { icon: Syringe, label: "Terapias Injetáveis" },
  { icon: Pill, label: "Terapias e Implantes Hormonais" },
  { icon: Droplets, label: "Tratamento de Lipedema" },
  { icon: Stethoscope, label: "Acompanhamento Ginecológico" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-5 py-10 sm:py-16 animate-page-fade-in">
        {/* Header */}
        <header className="items-center text-center mb-10 flex flex-col">
          <div className="profile-ring mb-5 h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full">
            <img
              src={profilePhoto}
              alt="Dra. Isabella Tovar"
              className="h-full w-full object-cover mt-0"
              style={{ objectPosition: "50% 25%", transform: "scale(1.05)" }}
            />
          </div>

          <h1 className="font-serif-display text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            Dra. Isabella Tovar
          </h1>

          <p className="mt-3 text-[11px] font-light tracking-[0.3em] uppercase text-muted-foreground">
            Médica · CRM 27286</p>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tratamentos para melhorar sua composição corporal, equilíbrio hormonal e metabólico. Porque sua saúde, autoconfiança e o prazer de viver tem muito valor.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
          >
            <Button className="rounded-full px-10 py-3 text-[11px] font-light tracking-[0.3em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              <CalendarCheck className="h-4 w-4 mr-2" strokeWidth={1.4} />
              Agendar Consulta
            </Button>
          </a>
        </header>

        {/* Service Banners */}
        <nav className="flex flex-col gap-3 mb-12">
          {services.map((service, i) => (
            <ServiceBanner
              key={service.label}
              icon={service.icon}
              label={service.label}
              delay={300 + i * 100}
            />
          ))}
        </nav>

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
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground transition-colors hover:text-primary hover:border-accent"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span>Atendimento em Goiânia GO e Online</span>
          </div>

          <p className="text-[11px] text-muted-foreground/60">
            Dra. Isabella Tovar | CRM 27286 GO
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
