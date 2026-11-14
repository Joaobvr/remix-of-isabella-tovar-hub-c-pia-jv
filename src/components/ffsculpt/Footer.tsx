import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-brand" style={{ padding: "60px 28px 32px" }}>
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display" style={{ fontSize: "1.15rem", color: "#fff" }}>
              Dra. Isabella <span style={{ fontStyle: "italic", color: "var(--champagne-hex)" }}>Tovar</span>
            </div>
            <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>
              Médica | CRM: 27286 GO
            </p>
            <p style={{ fontSize: "0.74rem", color: "var(--champagne-hex)", marginTop: 6 }}>
              Saúde, Longevidade e Beleza
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://instagram.com/dra.isabellatovar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}
            >
              <Instagram size={16} strokeWidth={1.2} style={{ color: "var(--champagne-hex)" }} />
              @dra.isabellatovar
            </a>
            <a
              href="tel:+5562996093076"
              className="flex items-center gap-3"
              style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}
            >
              <Phone size={16} strokeWidth={1.2} style={{ color: "var(--champagne-hex)" }} />
              (62) 9609-3076
            </a>
            <a
              href="https://maps.app.goo.gl/2z6Eb8nwUMcMJgFE8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}
            >
              <MapPin size={16} strokeWidth={1.2} style={{ color: "var(--champagne-hex)" }} />
              Clinica Vizz | Setor Marista
            </a>
          </div>

          <div className="md:text-right">
            <p
              style={{
                fontSize: "0.67rem",
                color: "rgba(255,255,255,0.25)",
                lineHeight: 1.6,
                marginTop: 8,
                maxWidth: 320,
                marginLeft: "auto",
              }}
            >
              Este material tem caráter informativo. Os resultados podem variar de pessoa
              para pessoa. Consulte sempre um profissional qualificado.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            marginTop: 40,
            paddingTop: 20,
          }}
        >
          <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", textAlign: "center" }}>
            © {new Date().getFullYear()} Dra. Isabella Rodrigues Tovar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;