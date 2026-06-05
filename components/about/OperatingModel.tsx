"use client";

import { Eyebrow } from "../common/Eyebrow";
import { Icon, type IconName } from "../common/Icon";
import { useInView } from "../common/useInView";

// PRD §9 Page 2 — Our Operating Model. Three-arm structure verbatim from
// client-supplied content (new-info.md, "Priority 4 (Operating Model)").
// Per the client: "This structure is simple, scalable, and understandable to
// investors, partners, media, and future employees." Labs is part of the
// ecosystem but is not one of the three operating arms in this framing.
//
// The PatternRadial overlay (ported from brand book §06.B) sits behind the
// three arms as a quiet schematic armature — never decoration.

function PatternRadial() {
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
    name: "Fitrah Technologies",
    theme: "Builds products and shared infrastructure.",
    icon: "globe",
  },
  {
    name: "Fitrah Media",
    theme:
      "Produces knowledge, research, education, storytelling, and thought leadership.",
    icon: "media",
  },
  {
    name: "Fitrah Ventures",
    theme: "Incubates, launches, acquires, and scales new companies.",
    icon: "ventures",
  },
];

export function OperatingModel() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });
  const blockFade = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <div ref={ref}>
          <Eyebrow>Our Operating Model</Eyebrow>

          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Three arms.{" "}
            <em className="italic font-light text-green-500">One mission.</em>
          </h2>

          <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
            Fitrah Global operates through three arms, each building a
            different layer of the institution &mdash; products, ideas, and
            companies.
          </p>

          {/* Three operating arms — schematic with a quiet brand pattern
              overlay. No shared-infrastructure base: Fitrah Technologies now
              owns the shared infrastructure layer, per the client's framing. */}
          <div className="relative mt-16 max-md:mt-12">
            <div className="pointer-events-none absolute inset-x-[-10%] -top-12 -bottom-12 overflow-hidden opacity-90 max-md:hidden">
              <PatternRadial />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--color-ivory) 78%)",
                }}
              />
            </div>

            <div className="relative grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-3">
              {ARMS.map((a, i) => (
                <article
                  key={a.name}
                  className={`rounded-xl border border-rule bg-ivory px-7 py-10 transition-all duration-700 ease-out motion-reduce:transition-none ${blockFade}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-green-700 opacity-70">
                    <Icon name={a.icon} size={24} />
                  </span>
                  <h3 className="mt-6 font-serif text-[22px] text-green-700 tracking-[-0.012em] leading-[1.2]">
                    {a.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-ink/80">
                    {a.theme}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
