import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// All copy and figures verbatim from client-supplied content (new-info.md,
// "Global Muslim Digital Opportunity"). Sources: Pew Research Center (Muslim
// population) · DinarStandard SGIE 2024/25 (Islamic economy) · DataReportal
// (digital usage). Client instruction: use only cited stats; do not overclaim.
const STATS = [
  {
    figure: "2.0B",
    label: "Muslims",
    desc: "Global Muslim population reached 2.0 billion in 2020, according to Pew Research Center.",
  },
  {
    figure: "25.6%",
    label: "of the world",
    desc: "Muslims represented 25.6% of the global population in 2020.",
  },
  {
    figure: "$2.43T",
    label: "consumer spend",
    desc: "Muslim consumer spending across key halal economy sectors reached US$2.43 trillion in 2023.",
  },
  {
    figure: "$3.36T",
    label: "by 2028",
    desc: "Muslim consumer spending across key halal economy sectors is projected to reach US$3.36 trillion by 2028.",
  },
  {
    figure: "$4.93T",
    label: "Islamic finance",
    desc: "Islamic finance assets stood at US$4.93 trillion in 2023.",
  },
  {
    figure: "2 / 3",
    label: "of the world online",
    desc: "More than two-thirds of people on Earth now use social media each month.",
  },
];

export function GlobalOpportunity() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <Reveal>
            <Eyebrow>Global Muslim Digital Opportunity</Eyebrow>
            <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.06] tracking-[-0.022em] text-[clamp(30px,3.4vw,48px)]">
              A global community. A multi-trillion-dollar economy.{" "}
              <em className="italic font-light text-green-500">
                A new digital layer still waiting to be built.
              </em>
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-5 text-[16px] leading-[1.65] text-muted max-w-[58ch]">
              <p>
                The Muslim world represents one of the largest and
                fastest-growing communities on earth. It is also one of the
                most important consumer, cultural, and digital markets of the
                next generation.
              </p>
              <p>
                But while Muslim consumers are already deeply active online,
                the digital infrastructure serving them remains fragmented.
                Communication, commerce, education, media, AI, and community
                life are still largely dependent on platforms built for broad
                global audiences, not for the specific trust, safety, cultural,
                and values-based needs of Muslims.
              </p>
              <p className="text-ink">
                Fitrah Global is building for this gap: a connected ecosystem
                of platforms designed for the future of Muslim digital life.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-px bg-rule border border-rule max-lg:grid-cols-2 max-sm:grid-cols-1">
          {STATS.map((s, i) => (
            <Reveal key={s.figure + s.label} className="h-full" delay={Math.min(i, 5) * 50}>
              <div className="flex h-full flex-col gap-3 bg-ivory p-8">
                <div className="font-serif font-normal text-green-700 leading-[1] tracking-[-0.028em] text-[clamp(42px,4.4vw,60px)]">
                  {s.figure}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {s.label}
                </div>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-ink/75">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Sources · Pew Research Center · DinarStandard, State of the Global
            Islamic Economy 2024/25 · DataReportal, Digital 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
