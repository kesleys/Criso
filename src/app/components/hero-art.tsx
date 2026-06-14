import { ImageWithFallback } from "./figma/ImageWithFallback";
import { WolfMark } from "./logo";

/**
 * Hero artwork — a maned wolf (lobo guará) portrait with a tonal brand
 * treatment. Swap the `src` below for your own image or imported asset.
 */
const WOLF_IMG =
  "https://images.unsplash.com/photo-1579711920315-d707d60ab43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

export function HeroArt() {
  return (
    <div className="relative">
      {/* main framed portrait */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-secondary/40 shadow-[0_40px_90px_-45px_rgba(40,30,10,0.55)]">
        <ImageWithFallback
          src={WOLF_IMG}
          alt="Lobo guará, símbolo do Cerrado e inspiração da marca Criso"
          className="h-[26rem] w-full object-cover sm:h-[30rem]"
        />
        {/* tonal overlay to harmonize with the palette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />

        {/* caption */}
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <p
              className="text-[1.1rem] text-foreground"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Lobo guará
            </p>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
              Chrysocyon brachyurus · Cerrado
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-card/80 backdrop-blur">
            <WolfMark className="size-7 text-primary" />
          </span>
        </div>
      </div>

      {/* floating accent badge */}
      <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          Elegância & controle
        </p>
        <p className="mt-0.5 text-[0.9rem]" style={{ fontFamily: "var(--font-display)" }}>
          Finanças com identidade
        </p>
      </div>
    </div>
  );
}
