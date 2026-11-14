// Minimalist medical illustrations — abstract, educational, non-explicit.
// Thin lines in nude/rosé tones representing the conceptual benefits.

type Props = { className?: string };

const stroke = "oklch(0.55 0.06 25)";
const accent = "oklch(0.78 0.07 25)";

export function VolumeIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <circle cx="60" cy="60" r="42" stroke={accent} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
      <path d="M30 70 Q60 45 90 70" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 72 Q60 58 82 72" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M46 74 Q60 68 74 74" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="60" r="2" fill={accent} />
    </svg>
  );
}

export function FirmnessIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <circle cx="60" cy="60" r="38" stroke={stroke} strokeWidth="1" />
      <circle cx="60" cy="60" r="28" stroke={accent} strokeWidth="0.8" opacity="0.6" />
      <g stroke={stroke} strokeWidth="0.8" strokeLinecap="round">
        <line x1="60" y1="22" x2="60" y2="32" />
        <line x1="60" y1="88" x2="60" y2="98" />
        <line x1="22" y1="60" x2="32" y2="60" />
        <line x1="88" y1="60" x2="98" y2="60" />
        <line x1="33" y1="33" x2="40" y2="40" />
        <line x1="80" y1="80" x2="87" y2="87" />
        <line x1="87" y1="33" x2="80" y2="40" />
        <line x1="40" y1="80" x2="33" y2="87" />
      </g>
      <circle cx="60" cy="60" r="3" fill={accent} />
    </svg>
  );
}

export function RejuvenationIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill={accent} opacity="0.4" />
        </pattern>
      </defs>
      <circle cx="60" cy="60" r="40" fill="url(#dots)" opacity="0.6" />
      <circle cx="60" cy="60" r="40" stroke={stroke} strokeWidth="0.8" />
      <path d="M40 55 Q60 48 80 55" stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M40 65 Q60 58 80 65" stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function RetractionIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <circle cx="60" cy="60" r="42" stroke={accent} strokeWidth="0.6" strokeDasharray="1 3" />
      <g stroke={stroke} strokeWidth="1" strokeLinecap="round">
        <path d="M30 30 L48 48" />
        <path d="M90 30 L72 48" />
        <path d="M30 90 L48 72" />
        <path d="M90 90 L72 72" />
        <polyline points="44,46 48,48 46,44" />
        <polyline points="76,46 72,48 74,44" />
        <polyline points="44,74 48,72 46,76" />
        <polyline points="76,74 72,72 74,76" />
      </g>
      <circle cx="60" cy="60" r="14" stroke={stroke} strokeWidth="1.2" />
      <circle cx="60" cy="60" r="3" fill={accent} />
    </svg>
  );
}

export function ComfortIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <g stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M20 60 Q35 45 50 60 T80 60 T110 60" opacity="0.4" />
        <path d="M20 70 Q35 55 50 70 T80 70 T110 70" opacity="0.6" />
        <path d="M20 50 Q35 35 50 50 T80 50 T110 50" opacity="0.5" />
      </g>
      <circle cx="60" cy="60" r="6" fill={accent} opacity="0.6" />
      <circle cx="60" cy="60" r="12" stroke={accent} strokeWidth="0.6" />
      <circle cx="60" cy="60" r="20" stroke={accent} strokeWidth="0.4" opacity="0.5" />
    </svg>
  );
}

export function FlowerMark({ className }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <g stroke={stroke} strokeWidth="0.8" strokeLinecap="round">
        <ellipse cx="20" cy="12" rx="3" ry="6" />
        <ellipse cx="20" cy="28" rx="3" ry="6" />
        <ellipse cx="12" cy="20" rx="6" ry="3" />
        <ellipse cx="28" cy="20" rx="6" ry="3" />
      </g>
      <circle cx="20" cy="20" r="2" fill={accent} />
    </svg>
  );
}
