import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceBannerProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  href?: string;
  delay: number;
}

const ServiceBanner = ({ icon: Icon, label, description, href = "#", delay }: ServiceBannerProps) => {
  const content = (
    <a
      href={href}
      className="service-banner group animate-stagger-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
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

  if (!description) return content;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs text-center leading-relaxed">
        {description}
      </TooltipContent>
    </Tooltip>
  );
};

export default ServiceBanner;
