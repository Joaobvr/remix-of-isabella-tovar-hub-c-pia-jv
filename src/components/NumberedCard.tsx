import type { CSSProperties, ReactNode } from "react";

/*
 * Card numerado padrão (01, 02, 03...) usado em todas as páginas:
 * retângulo no mesmo estilo dos cards da página inicial,
 * número em Verde Oliva, título e texto em Montserrat.
 */

type NumberedCardProps = {
  num: string;
  title?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const NumberedCard = ({ num, title, children, className = "", style }: NumberedCardProps) => (
  <div
    className={`flex items-start gap-4 rounded-2xl border px-5 py-5 sm:px-6 ${className}`}
    style={{
      background: "linear-gradient(135deg, #FBF8F6, #F4EFEC)",
      borderColor: "#E7E1DC",
      boxShadow: "0 1px 2px rgba(46, 54, 38, 0.04), 0 8px 24px -16px rgba(46, 54, 38, 0.1)",
      ...style,
    }}
  >
    <span
      className="w-10 shrink-0 leading-none"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2.1rem",
        fontWeight: 400,
        color: "#757F61",
      }}
    >
      {num}
    </span>
    <div className="flex-1 pt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {title && (
        <h3
          className="mb-1.5"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.35,
            letterSpacing: "0",
            color: "#3F4535",
          }}
        >
          {title}
        </h3>
      )}
      <p style={{ fontSize: "0.92rem", fontWeight: 400, lineHeight: 1.65, color: "#6E6A63" }}>{children}</p>
    </div>
  </div>
);

export default NumberedCard;
