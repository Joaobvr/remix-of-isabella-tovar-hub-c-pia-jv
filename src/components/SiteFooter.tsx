import { Instagram, MapPin, MessageCircle } from "lucide-react";
import lotus from "@/assets/brand/lotus.png";

/*
 * Rodapé padrão de todas as páginas do site.
 * Estrutura baseada no rodapé do FF Sculpt, nas cores da identidade visual.
 */

const COLORS = {
  bg: "#3F4535", // verde escuro (base do Verde Oliva)
  text: "#F4EFEC", // Off-White Rosado
  muted: "rgba(244, 239, 236, 0.72)",
  accent: "#F5CEC4", // Rosa Chá
  line: "rgba(244, 239, 236, 0.14)",
};

const WHATSAPP_URL =
  "https://wa.me/5562996093076?text=" +
  encodeURIComponent("Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Isabella.");
const INSTAGRAM_URL = "https://www.instagram.com/dra.isabellatovar/";
const MAPS_URL = "https://share.google/g2a78rGG9zWkHfMgu";

const trackContact = () => {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Contact");
  }
};

const linkClass = "flex items-center gap-3 transition-opacity hover:opacity-75";

const SiteFooter = () => (
  <footer
    className="px-6 pb-8 pt-12 md:px-12"
    style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "'Montserrat', sans-serif" }}
  >
    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-12">
      {/* Marca */}
      <div>
        <div className="flex items-center gap-2.5">
          <img src={lotus} alt="" className="h-8 w-auto" />
          <span
            className="text-[1.35rem] leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: COLORS.text }}
          >
            Dra. Isabella Tovar
          </span>
        </div>
        <p className="mt-3 text-[0.8rem]" style={{ color: COLORS.muted }}>
          Médica | CRM 27286 GO
        </p>
        <p className="mt-1 text-[0.8rem]" style={{ color: COLORS.accent }}>
          Saúde, Longevidade e Beleza Feminina
        </p>
      </div>

      {/* Contato */}
      <div className="flex flex-col gap-3.5 text-[0.85rem]">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Instagram className="h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: COLORS.accent }} />
          @dra.isabellatovar
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} className={linkClass}>
          <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: COLORS.accent }} />
          (62) 99609-3076
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: COLORS.accent }} />
          Clínica Despertar | Setor Marista
        </a>
        <p className="flex items-center gap-3" style={{ color: COLORS.muted }}>
          <span className="block h-4 w-4 shrink-0" />
          Atendimento em Goiânia e online
        </p>
      </div>

      {/* Aviso */}
      <p className="text-[0.75rem] leading-relaxed md:text-right" style={{ color: COLORS.muted }}>
        Aviso: este site tem caráter informativo e não substitui uma consulta médica. Os resultados podem
        variar de acordo com as características individuais de cada paciente. Nenhum tratamento garante
        resultados específicos.
      </p>
    </div>

    <div
      className="mx-auto mt-10 max-w-6xl border-t pt-6 text-center text-[0.7rem]"
      style={{ borderColor: COLORS.line, color: COLORS.muted }}
    >
      © {new Date().getFullYear()} Dra. Isabella Rodrigues Tovar. Todos os direitos reservados.
    </div>
  </footer>
);

export default SiteFooter;
