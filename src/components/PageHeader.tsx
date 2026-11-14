import { useState } from "react";
import { ArrowRight, Home } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import lotus from "@/assets/brand/lotus.png";

/*
 * Barra fixa do topo das páginas de tratamento:
 * logo + botão de agendar + menu lateral com os tópicos da página.
 * Cores da identidade visual da Dra. Isabella Tovar.
 */

export type PageTopic = {
  /** Texto que aparece no menu */
  label: string;
  /** id da seção na página (sem o #) */
  id: string;
};

type PageHeaderProps = {
  topics: PageTopic[];
  ctaLabel?: string;
  /** Link do botão (ex.: WhatsApp). Se não tiver, usa ctaTargetId. */
  ctaHref?: string;
  /** id da seção para onde o botão rola (ex.: formulário) */
  ctaTargetId?: string;
  /** Evento do Pixel do Meta disparado no clique do botão */
  ctaPixelEvent?: "Contact" | "Lead";
};

const BRAND = {
  terracota: "#9C6254",
  offWhite: "#F4EFEC",
  ink: "#3F4535",
};

const trackPixel = (event?: string) => {
  if (event && typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", event);
  }
};

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PageHeader = ({
  topics,
  ctaLabel = "Agendar",
  ctaHref,
  ctaTargetId,
  ctaPixelEvent = "Contact",
}: PageHeaderProps) => {
  const [open, setOpen] = useState(false);

  // Fecha o menu e, depois da animação, leva até o tópico
  const goTo = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), 320);
  };

  const handleCta = (fromMenu = false) => {
    trackPixel(ctaPixelEvent);
    if (!ctaHref && ctaTargetId) {
      if (fromMenu) goTo(ctaTargetId);
      else scrollToId(ctaTargetId);
    } else if (fromMenu) {
      setOpen(false);
    }
  };

  const ctaClass =
    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[0.78rem] sm:px-5 sm:text-[0.8rem] font-medium tracking-wide text-white transition-colors duration-200 hover:brightness-95";

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border py-2 pl-4 pr-2 shadow-[0_6px_24px_-12px_rgba(63,69,53,0.35)] backdrop-blur-md sm:pl-6"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.88)", borderColor: "rgba(156, 98, 84, 0.12)" }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex min-w-0 items-center gap-2 sm:gap-2.5"
          aria-label="Voltar ao topo da página"
        >
          <img src={lotus} alt="" className="h-8 w-auto shrink-0 sm:h-9" />
          <span
            className="truncate text-[1.05rem] leading-none sm:text-[1.3rem]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: BRAND.ink, fontWeight: 500 }}
          >
            Dra. Isabella Tovar
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {/* CTA */}
          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCta()}
              className={ctaClass}
              style={{ backgroundColor: BRAND.terracota }}
            >
              {ctaLabel}
            </a>
          ) : (
            <button type="button" onClick={() => handleCta()} className={ctaClass} style={{ backgroundColor: BRAND.terracota }}>
              {ctaLabel}
            </button>
          )}

          {/* Botão do menu (3 barrinhas) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu"
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors hover:bg-black/[0.04]"
              >
                <span className="block h-[2px] w-6 rounded-full" style={{ backgroundColor: BRAND.terracota }} />
                <span className="block h-[2px] w-6 rounded-full" style={{ backgroundColor: BRAND.terracota }} />
                <span className="block h-[2px] w-6 rounded-full" style={{ backgroundColor: BRAND.terracota }} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[86vw] max-w-sm flex-col border-l-0 p-0"
              style={{ backgroundColor: BRAND.offWhite, fontFamily: "'Montserrat', sans-serif" }}
            >
              <div className="px-7 pb-4 pt-10">
                <SheetTitle
                  className="text-[0.68rem] font-medium uppercase tracking-[0.25em]"
                  style={{ color: BRAND.terracota }}
                >
                  Nesta página
                </SheetTitle>
                <SheetDescription className="sr-only">Tópicos da página para navegar</SheetDescription>
              </div>

              <nav className="flex-1 overflow-y-auto px-4">
                <ul className="px-3">
                  {topics.map((topic) => (
                    <li key={topic.id} className="border-b last:border-b-0" style={{ borderColor: "rgba(156, 98, 84, 0.18)" }}>
                      <button
                        type="button"
                        onClick={() => goTo(topic.id)}
                        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span
                          className="text-[0.98rem] font-normal leading-snug tracking-wide transition-opacity group-hover:opacity-75"
                          style={{ fontFamily: "'Montserrat', sans-serif", color: BRAND.ink }}
                        >
                          {topic.label}
                        </span>
                        {/* Mesma seta com círculo de vidro dos cards da página inicial */}
                        <span className="arrow-glass">
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            strokeWidth={1.8}
                          />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3 border-t px-7 py-6" style={{ borderColor: "rgba(156, 98, 84, 0.15)" }}>
                {ctaHref ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCta(true)}
                    className={`${ctaClass} w-full py-3.5`}
                    style={{ backgroundColor: BRAND.terracota }}
                  >
                    {ctaLabel}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleCta(true)}
                    className={`${ctaClass} w-full py-3.5`}
                    style={{ backgroundColor: BRAND.terracota }}
                  >
                    {ctaLabel}
                  </button>
                )}
                <a
                  href="/"
                  className="flex items-center justify-center gap-2 py-2 text-[0.78rem] tracking-wide transition-opacity hover:opacity-70"
                  style={{ color: BRAND.ink }}
                >
                  <Home className="h-4 w-4" strokeWidth={1.6} />
                  Página inicial
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
