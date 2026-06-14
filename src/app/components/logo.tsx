/**
 * Criso brand assets — designed to be interchangeable.
 *
 * To swap the logo, replace the markup inside <WolfMark /> with your own
 * SVG (or an <ImageWithFallback /> pointing at an imported asset). The rest of
 * the site references <Logo /> and <WolfMark /> only, so nothing else changes.
 */

type MarkProps = {
  className?: string;
  title?: string;
};

/** The maned-wolf (lobo guará) head mark. Inherits color via `currentColor`. */
export function WolfMark({ className, title = "Criso" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* tall, alert ears of the lobo guará */}
      <path
        d="M19 30C16 23 14.5 15 16 8c5 1.5 9.5 5.5 12 11"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 30c3-7 4.5-15 3-22-5 1.5-9.5 5.5-12 11"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* face — narrowing to the slender snout */}
      <path
        d="M24 19c3.4-2.2 5.4-2.6 8-2.6s4.6.4 8 2.6c3.2 4 4.6 9.4 4.6 14.6 0 8-4.8 16.8-12.6 21.4C24.2 50.4 19.4 41.6 19.4 33.6c0-5.2 1.4-10.6 4.6-14.6Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* eyes */}
      <path d="M26.5 31.5c.9 0 1.6.9 1.6 2s-.7 2-1.6 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M37.5 31.5c-.9 0-1.6.9-1.6 2s.7 2 1.6 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* snout + nose */}
      <path d="M32 38v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="46.5" r="1.9" fill="currentColor" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Hide the "Criso" wordmark and show the mark alone. */
  markOnly?: boolean;
};

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <WolfMark className="size-8 text-primary" />
      {!markOnly && (
        <span
          className="text-[1.4rem] tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Criso
        </span>
      )}
    </span>
  );
}
