import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 5 §§2–8 — the seven capability sections. Body copy verbatim
// from client-supplied content (new-info.md, "Priority 2 (Most Important
// Strategic Page) — Fitrah Technologies"). Section titles + PRD Key
// Capability chips remain in place.

type Capability = {
  id: string;
  title: string;
  icon: IconName;
  // Key Capabilities from PRD §9 Page 5 that map to this section.
  capabilities: string[];
  body: string;
};

const SECTIONS: Capability[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    icon: "compass",
    capabilities: ["Web & mobile platforms"],
    body: "Fitrah Technologies designs, builds, and operates the software products that power the Fitrah ecosystem. We focus on scalable, secure, and user-centered systems capable of serving millions of users across diverse markets and languages.",
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    icon: "ai",
    capabilities: ["AI-native product systems", "Recommendation engines"],
    body: "Artificial intelligence is a foundational capability across the ecosystem. We develop AI-powered assistants, recommendation systems, educational tools, workflow automation, and decision-support systems that augment human capability while respecting ethical boundaries.",
  },
  {
    id: "trust-and-safety",
    title: "Trust and Safety",
    icon: "shield",
    capabilities: ["Trust & safety infrastructure", "Moderation systems"],
    body: "Trust is earned through consistent stewardship. Our Trust & Safety function establishes standards for moderation, user protection, platform integrity, fraud prevention, and responsible digital participation across all Fitrah products.",
  },
  {
    id: "identity-and-verification",
    title: "Identity and Verification",
    icon: "docs",
    capabilities: ["Identity & verification"],
    body: "Digital trust requires reliable identity systems. We build privacy-conscious verification, reputation, and authentication infrastructure that enables safer interactions between users, educators, creators, professionals, families, and communities.",
  },
  {
    id: "platform-infrastructure",
    title: "Platform Infrastructure",
    icon: "globe",
    capabilities: ["Secure data architecture", "Community infrastructure"],
    body: "Rather than building isolated applications, we develop shared infrastructure that supports multiple companies and products. Common services include identity, payments, notifications, AI services, analytics, community systems, and security frameworks.",
  },
  {
    id: "design-and-ux",
    title: "Design and User Experience",
    icon: "leaf",
    capabilities: ["Product design systems"],
    body: "We believe technology should feel intuitive, dignified, and human. Our design philosophy combines clarity, accessibility, and elegance to create experiences that are globally competitive while remaining culturally aware.",
  },
  {
    id: "responsible-innovation",
    title: "Responsible Innovation",
    icon: "sun",
    capabilities: [],
    body: "Innovation without responsibility creates unintended consequences. We evaluate emerging technologies through ethical, societal, and long-term lenses to ensure that progress serves people rather than merely maximizing engagement or consumption.",
  },
];

export function CapabilitySections() {
  return (
    <>
      {/* Anchor target for the hero's "Explore capabilities" CTA. */}
      <div id="capabilities" className="scroll-mt-20" aria-hidden="true" />

      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-rule scroll-mt-20">
          <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[96px] max-md:py-[64px]">
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

              {/* Right: body copy + PRD capability chips */}
              <Reveal delay={140}>
                <div>
                  <p className="max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                    {s.body}
                  </p>
                  {s.capabilities.length > 0 && (
                    <ul className="mt-7 flex flex-wrap gap-2">
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
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
