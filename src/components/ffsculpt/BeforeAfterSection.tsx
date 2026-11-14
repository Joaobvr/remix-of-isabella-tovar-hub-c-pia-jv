const scrollToForm = () => {
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
  document.getElementById("pre-avaliacao")?.scrollIntoView({ behavior: "smooth" });
};

type VideoCard = { kind: "video"; src: string; region: string; tag: string };
type ImageCard = { kind: "image"; src: string; alt: string; region: string; tag: string };

const cards: Array<VideoCard | ImageCard> = [
  { kind: "video", src: "/ffsculpt/videos/before-after-1.mp4", region: "Tronco", tag: "Resultado" },
  { kind: "image", src: "/ffsculpt/images/before-after-2.png", alt: "Resultado antes e depois - Abdômen", region: "Abdômen", tag: "Antes · Depois" },
  { kind: "video", src: "/ffsculpt/videos/before-after-3.mp4", region: "Pernas", tag: "Resultado" },
  { kind: "image", src: "/ffsculpt/images/before-after-4.jpg", alt: "Resultado antes e depois - Redução de Medidas", region: "Redução de medidas", tag: "Antes · Depois" },
  { kind: "image", src: "/ffsculpt/images/before-after-5.jpg", alt: "Resultado antes e depois - Redução de Gordura", region: "Redução de gordura", tag: "Antes · Depois" },
  { kind: "video", src: "/ffsculpt/videos/before-after-6.mp4", region: "Papada", tag: "Resultado" },
];

const CardFooter = ({ region, tag }: { region: string; tag: string }) => (
  <div
    style={{
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-primary-hex)" }}>
      {region}
    </span>
    <span
      style={{
        fontSize: "0.62rem",
        color: "var(--rose-hex)",
        background: "var(--rose-light-hex)",
        borderRadius: 100,
        padding: "3px 9px",
      }}
    >
      {tag}
    </span>
  </div>
);

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="max-w-2xl fade-up">
          <span className="eyebrow">Transformações reais</span>
          <h2 className="heading-section mt-3">
            Resultados obtidos com a técnica usada pela <em>Dra. Isabella</em>
          </h2>
          <div className="hairline" />
          <p className="text-elegant">
            Confira resultados reais obtidos com a técnica FFSculpt. Cada transformação
            representa a união de Método, Tecnologia e Medicina.
          </p>
          <p style={{ fontSize: "0.72rem", color: "var(--text-tertiary-hex)", marginTop: 12 }}>
            Ps. Os resultados são reais mas são individuais, não havendo garantias que todos terão os mesmos resultados.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="card-soft overflow-hidden"
              style={{ borderRadius: 12 }}
            >
              <div className="relative" style={{ aspectRatio: "1 / 1" }}>
                {c.kind === "video" ? (
                  <video
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "cover" }}
                    controls
                    playsInline
                    preload="metadata"
                    src={c.src}
                  />
                ) : (
                  <>
                    <img
                      src={c.src}
                      alt={c.alt}
                      className="absolute inset-0 w-full h-full"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    {/* center separator for paired before/after */}
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: 1,
                        background: "rgba(255,255,255,0.55)",
                        transform: "translateX(-50%)",
                        zIndex: 2,
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        fontSize: "0.56rem",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: "rgba(0,0,0,0.3)",
                        padding: "3px 7px",
                        borderRadius: 3,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Antes
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        fontSize: "0.56rem",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: "rgba(0,0,0,0.3)",
                        padding: "3px 7px",
                        borderRadius: 3,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Depois
                    </span>
                  </>
                )}
              </div>
              <CardFooter region={c.region} tag={c.tag} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-up">
          <button onClick={scrollToForm} className="btn-primary">
            Quero minha pré-avaliação
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;