import { useEffect, useRef, useState, type CSSProperties, type ImgHTMLAttributes, type VideoHTMLAttributes } from "react";

/*
 * Skeleton loader + reveal (Transitions.dev), para imagens e vídeos.
 * Enquanto a mídia carrega, aparece um bloco pulsando nas cores da marca;
 * quando ela chega, o bloco some com desfoque e a mídia aparece.
 * Se a mídia já estiver no cache, aparece direto, sem animação.
 *
 * O contêiner precisa ter tamanho (altura) definido por fora:
 * use `fill` para ocupar o elemento pai (position: absolute; inset: 0),
 * ou passe classes de tamanho em `wrapperClassName`.
 */

type WrapperProps = {
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  /** Ocupa todo o elemento pai (absolute, inset 0) */
  fill?: boolean;
};

const useReveal = () => {
  const [ready, setReady] = useState(false);
  const [instant, setInstant] = useState(false);
  return {
    ready,
    instant,
    reveal: () => setReady(true),
    revealNow: () => {
      setInstant(true);
      setReady(true);
    },
  };
};

const wrapClass = (ready: boolean, instant: boolean, extra = "") =>
  ["t-skel", ready ? "is-revealed" : "is-loading", instant ? "is-resetting" : "", extra].filter(Boolean).join(" ");

const wrapStyle = (fill?: boolean, style?: CSSProperties): CSSProperties =>
  fill ? { position: "absolute", inset: 0, ...style } : { ...style };

const Skeleton = () => (
  <div className="t-skel-skeleton is-pulsing" aria-hidden="true">
    <div className="t-skel-block" />
  </div>
);

export const SkeletonImage = ({
  wrapperClassName,
  wrapperStyle,
  fill,
  onLoad,
  onError,
  ...img
}: ImgHTMLAttributes<HTMLImageElement> & WrapperProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const { ready, instant, reveal, revealNow } = useReveal();

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) revealNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={wrapClass(ready, instant, wrapperClassName)} style={wrapStyle(fill, wrapperStyle)}>
      <Skeleton />
      <div className="t-skel-content">
        <img
          ref={ref}
          decoding="async"
          {...img}
          onLoad={(e) => {
            reveal();
            onLoad?.(e);
          }}
          onError={(e) => {
            reveal();
            onError?.(e);
          }}
        />
      </div>
    </div>
  );
};

export const SkeletonVideo = ({
  wrapperClassName,
  wrapperStyle,
  fill,
  onLoadedData,
  onError,
  ...video
}: VideoHTMLAttributes<HTMLVideoElement> & WrapperProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const { ready, instant, reveal, revealNow } = useReveal();

  useEffect(() => {
    const el = ref.current;
    if (el && el.readyState >= 2) revealNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={wrapClass(ready, instant, wrapperClassName)} style={wrapStyle(fill, wrapperStyle)}>
      <Skeleton />
      <div className="t-skel-content">
        <video
          ref={ref}
          {...video}
          onLoadedData={(e) => {
            reveal();
            onLoadedData?.(e);
          }}
          onError={(e) => {
            reveal();
            onError?.(e);
          }}
        />
      </div>
    </div>
  );
};

/** Tela de carregamento das páginas (aparece enquanto a página é baixada) */
export const PageSkeleton = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#F4EFEC" }} aria-busy="true" aria-label="Carregando">
    <div className="t-skel is-loading" style={{ minHeight: "100vh" }}>
      <div className="t-skel-skeleton is-pulsing" aria-hidden="true">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-4 sm:px-6">
          <div className="t-skel-bar h-14 w-full" />
          <div className="h-[46vh] w-full rounded-3xl" style={{ background: "linear-gradient(135deg, #EDE6E1, #E3DBD5)" }} />
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 pt-2">
            <div className="t-skel-bar h-7 w-4/5" />
            <div className="t-skel-bar h-7 w-3/5" />
            <div className="t-skel-bar mt-3 h-3 w-full" />
            <div className="t-skel-bar h-3 w-11/12" />
            <div className="t-skel-bar h-3 w-2/3" />
            <div className="t-skel-bar mt-5 h-12 w-56" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
