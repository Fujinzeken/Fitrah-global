"use client";

import { Eyebrow } from "../common/Eyebrow";
import { Icon, type IconName } from "../common/Icon";
import { useInView } from "../common/useInView";

// PRD §9 Page 2 lists "Our Operating Model" as required but provides no copy.
// Built as a schematic — three operating arms resting on a shared
// infrastructure base — mirroring the homepage Ecosystem Map's blueprint
// aesthetic. Arm framings are placeholder pending client confirmation.
//
// A quiet PatternRadial overlay sits behind the schematic, ported from the
// brand book (brand-sections.jsx Section06Patterns 06.B "Radial · 6-fold
// restrained tile"). Per brand intent: "patterns extend the mark's geometry
// — never decorate." Opacity is dialed low so it reads as constructive
// armature, not decoration.

function PatternRadial() {
  // Brand-book pattern (brand-sections.jsx PatternRadial) ported with the
  // PRD palette: stroke uses green-500 at low opacity instead of brand's
  // bone-on-olive. 6 rows × 11 cols of circles + inner-circles + axes.
  const r = 22;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-green-500"
    >
      <g stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.18">
        {Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 11 }, (_, col) => {
            const cx = col * 40 + (row % 2 ? 20 : 0);
            const cy = row * 40 + 12;
            return (
              <g key={`${row}-${col}`}>
                <circle cx={cx} cy={cy} r={r} />
                <circle cx={cx} cy={cy} r={r * 0.5} />
                <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} />
                <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} />
              </g>
            );
          }),
        )}
      </g>
    </svg>
  );
}
const ARMS: { name: string; theme: string; icon: IconName }[] = [
  {
    name: "Operating Companies",
    theme: "Platforms shipping today",
    icon: "globe",
  },
  {
    name: "Labs",
    theme: "Research, prototyping, incubation",
    icon: "compass",
  },
  {
    name: "Ventures",
    theme: "Investment and venture-building",
    icon: "ventures",
  },
];

function railClasses(i: number, last: number) {
  if (i === 0) return "left-1/2 right-[-8px]";
  if (i === last) return "left-[-8px] right-1/2";
  return "left-[-8px] right-[-8px]";
}

const T = {
  arms: 0,
  trunk: 350,
  rail: 600,
  drops: 850,
  base: 1100,
} as const;

export function OperatingModel() {
  const last = ARMS.length - 1;
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });

  const blockFade = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";
  const scaleY = inView ? "scale-y-100" : "scale-y-0";
  const scaleX = inView ? "scale-x-100" : "scale-x-0";

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <div ref={ref}>
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Our Operating Model</Eyebrow>
            <span className="rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-gold">
              Placeholder copy
            </span>
          </div>

          <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.6] text-muted">
            How Fitrah Global operates across platforms, ventures, and shared
            infrastructure &mdash; suggested structure shown; client to confirm
            and supply the final framing.
          </p>

          {/* Schematic — relative container holds the PatternRadial overlay
              behind the operating-arm cards and rail. */}
          <div className="relative mt-20 max-md:mt-12">
            {/* Brand pattern overlay (Section 06.B) — quiet armature */}
            <div className="pointer-events-none absolute inset-x-[-10%] -top-12 -bottom-24 overflow-hidden opacity-90 max-md:hidden">
              <PatternRadial />
              {/* Soft radial fade so the pattern dissolves at the edges */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--color-ivory) 78%)",
                }}
              />
            </div>

            {/* Three operating arms */}
            <div className="relative grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-3">
              {ARMS.map((a, i) => (
                <div
                  key={a.name}
                  className={`rounded-xl border border-rule bg-ivory px-6 py-9 transition-all duration-700 ease-out motion-reduce:transition-none ${blockFade}`}
                  style={{ transitionDelay: `${T.arms + i * 100}ms` }}
                >
                  <span className="text-green-700 opacity-70">
                    <Icon name={a.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-serif text-[22px] text-green-700 tracking-[-0.012em]">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-[13px] italic leading-[1.6] text-muted/85">
                    {a.theme}
                  </p>
                </div>
              ))}
            </div>

            {/* Connector (desktop): a single rail spanning the cards, then a
                centered trunk down to the base. Drops omitted — three cards
                resting on a shared rail reads as cleanly schematic without
                the box-shaped negative space that drops create. */}
            <div className="relative h-7 max-md:hidden">
              <span
                className={`absolute top-3 left-[8.333%] right-[8.333%] h-px origin-center bg-rule transition-transform duration-700 ease-out motion-reduce:transition-none ${scaleX}`}
                style={{ transitionDelay: `${T.rail}ms` }}
              />
            </div>

            {/* Trunk from rail to base */}
            <div className="mx-auto flex h-7 w-px justify-center">
              <span
                className={`block h-full w-px origin-top bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleY}`}
                style={{ transitionDelay: `${T.trunk}ms` }}
              />
            </div>

            {/* Shared infrastructure base */}
            <div
              className={`rounded-xl border border-rule bg-sand px-8 py-9 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${blockFade}`}
              style={{ transitionDelay: `${T.base}ms` }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-green-700">
                Shared Infrastructure
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60">
                Identity &middot; Trust &middot; Safety &middot; Design Systems
                &middot; AI Layer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
