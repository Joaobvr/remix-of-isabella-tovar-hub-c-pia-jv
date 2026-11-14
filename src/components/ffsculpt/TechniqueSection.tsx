const steps = [
  {
    n: "01",
    title: "Avaliação médica detalhada",
    text: "Avaliação clínica individual para entender seu corpo, suas metas e a indicação da estratégia correta de tratamento.",
  },
  {
    n: "02",
    title: "Preparação do tecido adiposo",
    text: "Protocolo que prepara seu corpo e o tecido adiposo para potencializar os resultados das tecnologias.",
  },
  {
    n: "03",
    title: "Aplicação da crioterapia FFSculpt",
    text: "Técnica patenteada de aplicação de criolipólise que induz a apoptose das células de gordura gerando eliminação progressiva e definitiva.",
  },
  {
    n: "04",
    title: "Estímulo de colágeno e firmeza",
    text: "Ativação das células produtoras de colágeno para uma pele mais firme, lisa e reestruturada.",
  },
];

const TechniqueSection = () => {
  return (
    <section id="tecnica" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="max-w-2xl fade-up">
          <span className="eyebrow">Método Exclusivo</span>
          <h2 className="heading-section mt-3">
            O que é a técnica <em>FFSculpt</em>?
          </h2>
          <div className="hairline" />
          <p className="text-elegant">
            A técnica FFSculpt é única no Brasil. Uma metodologia patenteada que oferece
            resultados empolgantes na eliminação de gordura localizada, redução de medidas,
            tratamento de lipedema e retração de pele. Além de ser aplicado na região
            íntima com finalidade estética e funcional.
          </p>
          <p className="text-elegant mt-3">
            FFSculpt combina uma avaliação médica detalhada, uma preparação do seu corpo
            e do seu tecido adiposo e a aplicação de uma técnica detalhada de crioterapia.
          </p>
        </div>

        {/* Highlight quote */}
        <div
          className="fade-up card-soft mt-10"
          style={{ padding: "26px 22px" }}
        >
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rose-hex)",
              marginBottom: 10,
            }}
          >
            Mecanismo de ação
          </div>
          <p
            className="font-display"
            style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.5 }}
          >
            O tratamento induz a apoptose das células de gordura e ativa as células que
            produzem colágeno — reduzindo a gordura subcutânea e reestruturando a derme,
            sem cortes e sem cicatrizes.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10" style={{ borderTop: "1px solid var(--border-hex)" }}>
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-5"
              style={{
                padding: "22px 0",
                borderBottom: "1px solid var(--border-hex)",
              }}
            >
              <div
                className="font-display flex-shrink-0"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 300,
                  color: "var(--champagne-hex)",
                  lineHeight: 1,
                  width: 28,
                  paddingTop: 2,
                }}
              >
                {s.n}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-primary-hex)",
                    marginBottom: 5,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {s.title}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary-hex)", lineHeight: 1.7 }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="fade-up mt-12 text-center"
          style={{
            background: "var(--rose-light-hex)",
            border: "1px solid rgba(155,113,120,0.14)",
            borderRadius: 16,
            padding: "36px 26px",
          }}
        >
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rose-hex)",
              marginBottom: 10,
            }}
          >
            Acesso restrito
          </div>
          <h3 className="heading-section">
            Em Goiânia, apenas <span style={{ fontWeight: 500, color: "var(--text-primary-hex)" }}>duas médicas</span> credenciadas.
          </h3>
          <p className="text-elegant mt-4 max-w-xl mx-auto">
            A Dra. Isabella é uma delas. A exclusividade da técnica e os resultados
            comprovados geraram uma procura crescente em todo o Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechniqueSection;