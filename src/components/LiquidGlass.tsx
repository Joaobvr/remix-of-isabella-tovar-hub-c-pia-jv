import { useId, type CSSProperties, type ReactNode } from "react";

/*
 * Efeito "liquid glass": vidro com leve distorção do que está atrás,
 * brilho nas bordas e sombra suave. Baseado no snippet "Liquid Glass Menu".
 * (Em navegadores sem suporte ao filtro de distorção, fica um vidro fosco normal.)
 */

type LiquidGlassProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Intensidade da distorção do fundo (o snippet original usa 200) */
  distortion?: number;
};

const LiquidGlass = ({ children, className = "", style, distortion = 200 }: LiquidGlassProps) => {
  const filterId = `glass-blur-${useId().replace(/:/g, "")}`;

  return (
    <div className={`liquid-glass ${className}`} style={style}>
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id={filterId} x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={distortion}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div className="liquid-glass--bend" style={{ filter: `url(#${filterId})` }} />
      <div className="liquid-glass--face" />
      <div className="liquid-glass--edge" />
      <div className="liquid-glass__content">{children}</div>
    </div>
  );
};

export default LiquidGlass;
