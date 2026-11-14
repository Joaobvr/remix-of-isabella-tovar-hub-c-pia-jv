import { useState } from "react";
import { GraduationCap, Heart, Award, UserCheck } from "lucide-react";
import doctorImage from "@/assets/ffsculpt/doctor-portrait.jpg";

const pillars = [
  {
    icon: GraduationCap,
    title: "Foco na saúde da mulher",
    text: "Médica com pós-graduação em Ginecologia e Obstetrícia (não especialista).",
  },
  {
    icon: Heart,
    title: "Estética íntima e corporal",
    text: "Experiência consolidada em estética íntima feminina e corporal.",
  },
  {
    icon: Award,
    title: "Tratamento exclusivo",
    text: "Uma das poucas médicas do Brasil que dominam a técnica FFSculpt.",
  },
  {
    icon: UserCheck,
    title: "Tratamento Integral",
    text: "Entende que o equilibrio metabólico, hormonal, intestinal e nutricional são pilares de um organismo com saúde, vitalidade e beleza.",
  },
];

const serviceGroups: { title: string; items: { label: string; full?: boolean }[] }[] = [
  {
    title: "Saúde Feminina",
    items: [
      { label: "Consulta de rotina" },
      { label: "Prevenção" },
      { label: "Climatério · Menopausa" },
      { label: "Endometriose" },
      { label: "SOMP (Síndrome Ovariana Metabólica Poliendócrina)", full: true },
    ],
  },
  {
    title: "Hormônios & Bem-estar",
    items: [
      { label: "Reposição Hormonal" },
      { label: "Implantes Hormonais" },
      { label: "Terapia Injetável" },
      { label: "Inserção de DIU" },
      { label: "Implanon" },
      { label: "Emagrecimento" },
      { label: "Tratamento personalizado", full: true },
    ],
  },
  {
    title: "Estética & Harmonização",
    items: [
      { label: "FFSculpt · Corporal | Facial | Íntimo", full: true },
      { label: "Harmonização Íntima - Estética e Funcional", full: true },
      { label: "Tecnologias | Enzimas | Peptídeos | Injetáveis", full: true },
      { label: "Gordura Localizada | Flacidez | Lipedema", full: true },
    ],
  },
];

const DoctorSection = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Pillars */}
      <section id="por-que" className="section-padding bg-champagne-light">
        <div className="container-wide">
          <div className="max-w-2xl fade-up">
            <span className="eyebrow">Quatro pilares</span>
            <h2 className="heading-section mt-3">
              Por que tratar com a <em>Dra. Isabella</em>?
            </h2>
            <div className="hairline" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[18px] mt-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card-soft card-soft-hover fade-up"
                style={{ padding: "22px 18px" }}
              >
                <div className="icon-circle" style={{ width: 52, height: 52, marginBottom: 14 }}>
                  <p.icon strokeWidth={1.4} style={{ width: 26, height: 26 }} />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    marginBottom: 7,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary-hex)", lineHeight: 1.65 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor profile + accordion */}
      <section id="sobre" className="section-padding bg-cream">
        <div className="container-wide grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div
            className="relative fade-up overflow-hidden"
            style={{
              borderRadius: 16,
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src={doctorImage}
              alt="Dra. Isabella Rodrigues Tovar"
              className="w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div className="name-badge">
              <div className="name">Dra. Isabella Rodrigues Tovar</div>
              <div className="crm">CRM-GO 27286</div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-up">
            <span className="eyebrow">Sua médica</span>
            <h2 className="heading-section mt-3">
              Cuidado integral, com olhar <em>feminino</em>.
            </h2>
            <div className="hairline" />
            <p className="text-elegant">
              Combinando formação médica rigorosa com sensibilidade para as necessidades
              femininas, a Dra. Isabella oferece uma experiência de tratamento que vai
              além da estética — cuidando de você de forma integral.
            </p>

            <div style={{ marginTop: 32 }}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  paddingBottom: 4,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--champagne-hex)",
                  borderBottom: "1px solid var(--champagne-line-hex)",
                }}
              >
                Todos os atendimentos
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: servicesOpen ? 1200 : 0,
                  transition: "max-height 0.4s ease, padding 0.4s ease",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 22 }}>
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span
                          style={{
                            fontSize: "0.62rem",
                            fontWeight: 500,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--champagne-hex)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {group.title}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--champagne-line-hex)" }} />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px" }}>
                        {group.items.map((item) => (
                          <span
                            key={item.label}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              fontSize: "0.9rem",
                              color: "var(--text-secondary-hex)",
                              lineHeight: 1.4,
                              gridColumn: item.full ? "span 2" : undefined,
                            }}
                          >
                            <span
                              style={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: "var(--rose-hex)",
                                flexShrink: 0,
                              }}
                            />
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorSection;