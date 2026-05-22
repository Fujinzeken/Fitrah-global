import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 5 §§2–8 — the seven capability sections. PRD lists these as
// required sections but supplies no body copy, so each is built as a real,
// anchored <section> carrying only PRD-sourced content: the section title
// and its mapped Key Capabilities (PRD §9 Page 5, verbatim) as chips. The
// descriptive prose is flagged as client-pending — not authored. Logged in
// placeholders.md.

type Capability = {
  id: string;
  title: string;
  icon: IconName;
  // Key Capabilities from PRD §9 Page 5 that map to this section.
  capabilities: string[];
};

const SECTIONS: Capability[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    icon: "compass",
    capabilities: ["Web & mobile platforms"],
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    icon: "ai",
    capabilities: ["AI-native product systems", "Recommendation engines"],
  },
  {
    id: "trust-and-safety",
    title: "Trust and Safety",
    icon: "shield",
    capabilities: ["Trust & safety infrastructure", "Moderation systems"],
  },
  {
    id: "identity-and-verification",
    title: "Identity and Verification",
    icon: "docs",
    capabilities: ["Identity & verification"],
  },
  {
    id: "platform-infrastructure",
    title: "Platform Infrastructure",
    icon: "globe",
    capabilities: ["Secure data architecture", "Community infrastructure"],
  },
  {
    id: "design-and-ux",
    title: "Design and User Experience",
    icon: "leaf",
    capabilities: ["Product design systems"],
  },
  {
    id: "responsible-innovation",
    title: "Responsible Innovation",
    icon: "sun",
    // No Key Capability maps to this approach-level section.
    capabilities: [],
  },
];

export function CapabilitySections() {
  return (
    <>
      {/* Anchor target for the hero's "Explore capabilities" CTA. */}
      <div id="capabilities" className="scroll-mt-20" aria-hidden="true" />

      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-rule scroll-mt-20">
          <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[88px] max-md:py-[60px]">
            <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
              {/* Left: icon + title */}
              <Reveal>
                <div className="flex flex-col">
                  <span className="text-green-700">
                    <Icon name={s.icon} size={28} />
                  </span>
                  <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.08] tracking-[-0.016em] text-[clamp(26px,2.8vw,38px)]">
                    {s.title}
                  </h2>
                </div>
              </Reveal>

              {/* Right: PRD capability chips (real) + pending flag */}
              <Reveal delay={140}>
                <div>
                  {s.capabilities.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-rule-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div
                    className={`border-t border-dashed border-rule-2 ${
                      s.capabilities.length > 0 ? "mt-7 pt-6" : "pt-1"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        Copy pending
                      </span>
                    </span>
                    <p className="mt-3 max-w-[52ch] text-[15px] italic leading-[1.65] text-muted">
                      Detailed copy for this section will be supplied by the
                      client.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
