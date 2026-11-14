import heroBg from "@/assets/ffsculpt/hero-bg.png";

const scrollToForm = () => {
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
  document.getElementById("pre-avaliacao")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative bg-cream pt-4">
      {/* Photo on top */}
      <div className="relative w-full">
        <img
          src={heroBg}
          alt="Ilustração Método FFSculpt"
          className="hero-illustration w-full block"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <style>{`
          .hero-illustration { height: 65vw; }
          @media (min-width: 768px) {
            .hero-illustration { height: 55vh; }
          }
        `}</style>
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "40%",
            background: "linear-gradient(to top, #FAF7F4, transparent)",
          }}
        />
      </div>

      {/* Content below */}
      <div style={{ background: "#FAF7F4", padding: "36px 28px 60px" }}>
        <div className="max-w-xl">
          <span className="eyebrow mb-3">Método FFSculpt · Goiânia</span>
          <h1
            className="heading-hero mt-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 5.4vw, 2.5rem)",
              lineHeight: 1.22,
              letterSpacing: "-0.01em",
            }}
          >
            Redefina suas curvas com segurança, eficiência, sem cortes e sem cicatrizes
            com o{" "}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "1.18em",
                letterSpacing: 0,
                color: "var(--rose-hex)",
              }}
            >
              Método FFSculpt.
            </em>
          </h1>
          <div className="hairline" />
          <p
            className="text-elegant mb-7"
            style={{
              textWrap: "pretty",
              maxWidth: 480,
              lineHeight: 1.65,
              fontSize: "1rem",
              textAlign: "justify",
              hyphens: "auto",
            }}
          >
            Dra. Isabella Tovar é uma das médicas do Brasil que oferece a metodologia
            não invasiva que vem obtendo resultados incríveis na eliminação de gordura
            localizada, redução de medidas, tratamento de lipedema e retração de pele:
            o método FF Sculpt.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button onClick={scrollToForm} className="btn-primary">
              Quero minha pré-avaliação
            </button>
            <p className="text-tertiary-ink" style={{ fontSize: "0.72rem", marginTop: 22, textAlign: "center" }}>
              Avaliação médica · Sem cortes · Sem cicatrizes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;