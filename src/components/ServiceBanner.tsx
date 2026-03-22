import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceBannerProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  delay: number;
}

const ServiceBanner = ({ icon: Icon, label, href = "#", delay }: ServiceBannerProps) => {
  return (
    <a
      href={href}
      className="service-banner group animate-stagger-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
      </div>
      <span className="flex-1 text-sm font-medium tracking-wide text-foreground sm:text-base">
        {label}
      </span>
      <ArrowRight
        className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
        strokeWidth={1.8}
      />
    </a>
  );
};

export default ServiceBanner;
