import { Eyebrow } from "../common/Eyebrow";
import { Icon, type IconName } from "../common/Icon";
import { Reveal } from "../common/Reveal";

const VERTICALS: { name: string; icon: IconName; desc: string }[] = [
  {
    name: "Communication",
    icon: "comms",
    desc: "Messaging, social connection, communities, family-safe interaction.",
  },
  {
    name: "Commerce",
    icon: "commerce",
    desc: "Halal social commerce, ethical brands, creator marketplaces, trusted discovery.",
  },
  {
    name: "Knowledge",
    icon: "education",
    desc: "Learning, Islamic resources, AI education, personal development, upskilling.",
  },
  {
    name: "Media",
    icon: "media",
    desc: "Muslim digital economy insights, storytelling, reports, creator narratives.",
  },
  {
    name: "AI",
    icon: "ai",
    desc: "AI assistants, personalization, guidance, learning, moderation, productivity.",
  },
  {
    name: "Trust Infrastructure",
    icon: "shield",
    desc: "Identity, safety, verification, moderation, payments, compliance, reputation.",
  },
];

export function WhatWeBuild() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="max-w-[42ch]">
          <Eyebrow>What We Build</Eyebrow>
          <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(30px,3.6vw,52px)]">
            Six verticals.{" "}
            <em className="italic font-light text-green-500">One ecosystem.</em>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-rule">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.name} delay={Math.min(i, 5) * 60}>
              <div className="group grid grid-cols-[56px_1fr_1.05fr] gap-12 items-start border-b border-rule py-9 transition-colors hover:bg-ivory-2 max-md:grid-cols-[40px_1fr] max-md:gap-x-5 max-md:gap-y-3 max-md:py-7">
                <span className="font-mono text-[12px] tracking-[0.14em] text-muted pt-[7px]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 translate-y-[3px] text-green-700 opacity-65 group-hover:opacity-100 transition-opacity">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="font-serif text-[clamp(24px,2.6vw,34px)] text-green-700 tracking-[-0.015em] leading-[1.1]">
                    {v.name}
                  </h3>
                </div>

                <p className="text-[15px] leading-[1.6] text-muted max-w-[44ch] pt-[6px] max-md:col-start-2 max-md:pt-0">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
