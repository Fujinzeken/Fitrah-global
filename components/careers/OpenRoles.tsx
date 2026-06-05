import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 11 §6 — Open Roles. The four Founding Roles + their
// responsibilities are verbatim from client-supplied content (new-info.md,
// "First Roles"). Defaults used pending client confirmation:
//   • Department — derived from the role name (matches the PRD Teams list).
//   • Location — "Open / Remote" as a founding-stage default.
//   • Type — "Full-time" as a founding-stage default.
//   • Apply CTA — routes to /contact (no ATS connected).
// These defaults are logged in placeholders.md.

type Role = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

const ROLES: Role[] = [
  {
    title: "Founding Research Analyst",
    department: "Research",
    location: "Open / Remote",
    type: "Full-time",
    description:
      "Researches the Muslim economy, startups, venture capital, and technology.",
  },
  {
    title: "Founding Designer",
    department: "Design",
    location: "Open / Remote",
    type: "Full-time",
    description: "Builds design systems, brand, and products.",
  },
  {
    title: "Founding Product Builder",
    department: "Product",
    location: "Open / Remote",
    type: "Full-time",
    description:
      "Builds AI and software. Ships MVPs rapidly across the ecosystem.",
  },
  {
    title: "Venture Studio Associate",
    department: "Ventures",
    location: "Open / Remote",
    type: "Full-time",
    description:
      "Launches new companies. Works across products and venture-building.",
  },
];

export function OpenRoles() {
  return (
    <section id="roles" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow>Open Roles</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                Our first{" "}
                <em className="italic font-light text-green-500">
                  founding roles.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {ROLES.length} open &middot; before engineering
            </span>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <p className="mt-7 max-w-[58ch] text-[16px] leading-[1.65] text-ink/75">
            The roles we&rsquo;re hiring before anything else &mdash; the
            founders behind the institution.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-5">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={320 + i * 80} className="contents">
              <article className="group flex h-full flex-col rounded-xl border border-rule bg-ivory p-8 transition-colors duration-300 hover:border-rule-2 max-md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {r.department}
                  </span>
                  <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
                    {r.type}
                  </span>
                </div>

                <h3 className="mt-7 font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.014em] text-[clamp(22px,2vw,28px)]">
                  {r.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.6] text-ink/80">
                  {r.description}
                </p>

                <div className="mt-7 flex items-center justify-between gap-3 border-t border-rule pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {r.location}
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors group-hover:text-gold"
                  >
                    Apply
                    <span className="transition-transform group-hover:translate-x-0.5">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={680}>
          <p className="mt-10 max-w-[56ch] text-[14px] italic leading-[1.6] text-muted">
            Don&rsquo;t see your role? Join the talent community below
            &mdash; we&rsquo;re always meeting mission-aligned people.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
