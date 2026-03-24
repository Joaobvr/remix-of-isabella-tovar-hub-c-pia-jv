import { Activity, Sparkles, Heart, Syringe, Pill, Stethoscope, Instagram, MessageCircle, MapPin, Droplets, CalendarCheck } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ServiceBanner from "@/components/ServiceBanner";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Activity, label: "Emagrecimento com Saúde, Beleza e Disposição" },
  { icon: Sparkles, label: "FF Sculpt (Remodelação Corporal)" },
  { icon: Heart, label: "Regeneração e Estética Íntima" },
  { icon: Syringe, label: "Terapias com Suplementos e Injetáveis" },
  { icon: Pill, label: "Terapias e Implantes Hormonais" },
  { icon: Stethoscope, label: "Acompanhamento Ginecológico" },
  { icon: Droplets, label: "Tratamento de Lipedema" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-5 py-10 sm:py-16 animate-page-fade-in">
        {/* Header */}
        <header className="flex flex-col items-center text-center mb-10">
          <div className="profile-ring mb-5">
            <img
              src={profilePhoto}
              alt="Dra. Isabella Tovar"
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
          </div>

          <h1 className="font-serif-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Dra. Isabella Tovar
          </h1>

          <p className="mt-2 text-sm font-medium tracking-wide text-accent-foreground/70 sm:text-base">
            Medicina focada na saúde, longevidade, vitalidade e beleza da mulher.
          </p>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Para proporcionar um cuidado feminino integral, Proponho diferentes tratamentos para a necessidade de cada mulher. Conheça os tratamentos disponíveis ou agende sua consulta.
          </p>
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
            <span>Atendimento Exclusivo em [Cidade]</span>
          </div>

          <p className="text-[11px] text-muted-foreground/60">
            © Dra. Isabella Tovar — CRM [Número]
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
