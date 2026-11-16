/*
 * Retângulo padrão com nome e CRM, na frente da foto da doutora.
 * Modelo: o da página de Emagrecimento. Cores fixas da identidade visual,
 * para ficar igual em todas as páginas (cada página tem suas próprias variáveis).
 * O elemento pai precisa ter position: relative.
 */
const DoctorPhotoBadge = () => (
  <div
    className="absolute bottom-8 left-8 right-8 z-10 rounded-2xl border p-5 backdrop-blur-sm"
    style={{
      backgroundColor: "rgba(244, 239, 236, 0.8)", // Off-White Rosado
      borderColor: "rgba(231, 225, 220, 0.4)",
    }}
  >
    <p
      className="whitespace-nowrap text-sm md:text-base"
      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3A342E", fontWeight: 400 }}
    >
      Dra. Isabella Tovar · Médica | CRM 27286 GO
    </p>
  </div>
);

export default DoctorPhotoBadge;
