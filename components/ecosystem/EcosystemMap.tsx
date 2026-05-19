"use client";

import { useState } from "react";
import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { LogoMark } from "../common/Logo";
import { Icon, type IconName } from "../common/Icon";
import { useInView } from "../common/useInView";

// PRD §9 Page 3 §2 — Interactive ecosystem map. PRD Visual Requirement:
// "a modern ecosystem map showing how these verticals connect."
//
// Composition is ported from the brand HTML's .eco-frame block: concentric
// rings, central holding-company node, six satellites positioned around it,
// corner markers, and a quiet grid background. Made interactive — selecting
// a vertical highlights its spoke and updates the detail panel with the
// PRD-verbatim description.
//
// Vertical names + descriptions are verbatim from PRD §9 Page 3 Core
// Verticals. Position coordinates (x,y as percentages of the canvas)
// trace a hexagonal layout around the center.

type Vertical = {
  id: string;
  name: string;
  icon: IconName;
  desc: string;
  x: number;
  y: number;
};

const VERTICALS: Vertical[] = [
  {
    id: "communication",
    name: "Communication",
    icon: "comms",
    desc: "Messaging, social connection, communities, family-safe interaction.",
    x: 50,
    y: 9,
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: "commerce",
    desc: "Halal social commerce, ethical brands, creator marketplaces, trusted discovery.",
    x: 87,
    y: 29,
  },
  {
    id: "knowledge",
    name: "Knowledge",
    icon: "education",
    desc: "Learning, Islamic resources, AI education, personal development, upskilling.",
    x: 87,
    y: 71,
  },
  {
    id: "media",
    name: "Media",
    icon: "media",
    desc: "Muslim digital economy insights, storytelling, reports, creator narratives.",
    x: 50,
    y: 91,
  },
  {
    id: "ai",
    name: "AI",
    icon: "ai",
    desc: "AI assistants, personalization, guidance, learning, moderation, productivity.",
    x: 13,
    y: 71,
  },
  {
    id: "trust",
    name: "Trust Infrastructure",
    icon: "shield",
    desc: "Identity, safety, verification, moderation, payments, compliance, reputation.",
    x: 13,
    y: 29,
  },
];

// Brand HTML's eco-frame corner markers — 14px L-shapes in green-700.
function CornerMarks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-3.5">
      <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-green-700" />
      <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r border-t border-green-700" />
      <span className="absolute left-0 bottom-0 h-3.5 w-3.5 border-l border-b border-green-700" />
      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 border-r border-b border-green-700" />
    </div>
  );
}

export function EcosystemMap() {
  const [activeId, setActiveId] = useState<string>("communication");
  const active = VERTICALS.find((v) => v.id === activeId) ?? VERTICALS[0];
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });

  return (
    <section id="map" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Ecosystem Map</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            The shape of the{" "}
            <em className="italic font-light text-green-500">ecosystem.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-muted">
            Six verticals orbit one center. Select any vertical to read how
            it sits in the system.
          </p>
        </Reveal>

        {/* Desktop / tablet: diagram + side detail panel */}
        <div
          ref={ref}
          className="mt-16 grid grid-cols-[1fr_0.42fr] gap-8 items-stretch max-lg:grid-cols-1 max-md:hidden"
        >
          {/* Diagram canvas */}
          <div
            className={`relative border border-rule bg-ivory aspect-[5/4] overflow-hidden transition-opacity duration-700 motion-reduce:transition-none ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Quiet grid background with radial fade */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
                backgroundSize: "calc(100%/12) calc(100%/8), calc(100%/12) calc(100%/8)",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              }}
            />

            {/* Concentric rings — port from brand HTML eco-ring r1/r2/r3 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[42%] rounded-full border border-rule-2"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[68%] rounded-full border border-dashed border-sand-2"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[94%] rounded-full border border-sand-2 opacity-60"
            />

            <CornerMarks />

            {/* SVG spokes — one line from center to each satellite. The
                active spoke renders solid gold; inactive spokes are dashed
                hairlines. */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              {VERTICALS.map((v) => {
                const isActive = v.id === activeId;
                return (
                  <line
                    key={v.id}
                    x1="50%"
                    y1="50%"
                    x2={`${v.x}%`}
                    y2={`${v.y}%`}
                    stroke={isActive ? "var(--color-gold)" : "var(--color-rule)"}
                    strokeWidth={isActive ? 1.4 : 1}
                    strokeDasharray={isActive ? undefined : "3 4"}
                    style={{
                      transition: "stroke 300ms ease, stroke-width 300ms ease",
                    }}
                  />
                );
              })}
            </svg>

            {/* Central holding-company node */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-[26%] w-[26%] min-h-[140px] min-w-[140px] flex-col items-center justify-center gap-2 rounded-full bg-green-700 px-4 text-ivory shadow-[0_30px_80px_-30px_rgba(15,42,32,0.45)]">
                <LogoMark size={28} className="text-ivory" />
                <span className="font-serif text-[15px] tracking-[-0.01em]">
                  Fitrah Global
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold-soft">
                  Holding
                </span>
              </div>
            </div>

            {/* Satellite nodes — buttons for click+keyboard interactivity */}
            {VERTICALS.map((v) => {
              const isActive = v.id === activeId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveId(v.id)}
                  onMouseEnter={() => setActiveId(v.id)}
                  onFocus={() => setActiveId(v.id)}
                  aria-pressed={isActive}
                  aria-label={`Show details for ${v.name}`}
                  style={{ left: `${v.x}%`, top: `${v.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex min-w-[140px] flex-col items-center gap-1.5 rounded-lg border bg-ivory px-3 py-3 text-center transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "border-gold shadow-[0_8px_28px_-12px_rgba(184,146,74,0.45)] -translate-y-[calc(50%+2px)]"
                      : "border-rule shadow-[0_8px_24px_-12px_rgba(15,42,32,0.18)] hover:border-rule-2"
                  }`}
                >
                  <span
                    className={`relative transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-green-700"
                    }`}
                  >
                    <Icon name={v.icon} size={20} />
                    {/* indicator dot — ported from brand .eco-node .dot */}
                    <span
                      className={`absolute -right-1 -top-1 block h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-gold" : "bg-gold/40"
                      }`}
                    />
                  </span>
                  <span
                    className={`font-serif text-[14px] leading-tight transition-colors duration-300 ${
                      isActive ? "text-green-700" : "text-ink"
                    }`}
                  >
                    {v.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex flex-col border border-rule bg-ivory p-8 max-lg:p-7">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Vertical &middot; {String(
                  VERTICALS.findIndex((v) => v.id === activeId) + 1,
                ).padStart(2, "0")} / {VERTICALS.length.toString().padStart(2, "0")}
              </div>
              <span className="text-green-700">
                <Icon name={active.icon} size={22} />
              </span>
            </div>

            <h3 className="mt-8 font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.018em] text-[clamp(28px,2.6vw,36px)]">
              {active.name}
            </h3>

            <p className="mt-5 text-[16px] leading-[1.65] text-ink/85">
              {active.desc}
            </p>

            <div className="mt-auto pt-10">
              <div className="border-t border-rule pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Select any vertical to update
              </div>
            </div>
          </div>
        </div>

        {/* Mobile fallback: ordered list of verticals as expandable cards */}
        <div className="mt-12 hidden max-md:block">
          <ul className="flex flex-col border-t border-rule">
            {VERTICALS.map((v) => {
              const isActive = v.id === activeId;
              return (
                <li key={v.id} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveId(isActive ? "" : v.id)
                    }
                    aria-expanded={isActive}
                    className="flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`shrink-0 transition-colors ${
                        isActive ? "text-gold" : "text-green-700"
                      }`}
                    >
                      <Icon name={v.icon} size={22} />
                    </span>
                    <span className="flex-1 font-serif text-[20px] text-green-700 tracking-[-0.012em]">
                      {v.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[18px] leading-none transition-transform ${
                        isActive ? "rotate-45 text-gold" : "text-muted"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isActive && (
                    <p className="pb-5 pl-10 pr-2 text-[15px] leading-[1.6] text-ink/85">
                      {v.desc}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
