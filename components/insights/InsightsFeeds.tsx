import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon } from "../common/Icon";

// PRD §9 Page 10 §§2–5 — Latest essays, Research reports, Company
// announcements, Product updates.
//   • Latest Essays + Research Reports → real titles from client content
//     (new-info.md, "Fitrah Media Content Strategy"). Article bodies, images,
//     abstracts, and downloads still pending.
//   • Company Announcements + Product Updates → still empty states; PRD and
//     client supply no specific items. Each tracker is structurally complete.

function Bar({ w }: { w: string }) {
  return <span className="block h-2.5 rounded-full bg-rule" style={{ width: w }} />;
}

function PendingFlag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
    </span>
  );
}

function SectionHead({
  eyebrow,
  flag,
}: {
  eyebrow: string;
  flag: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={120}>
        <PendingFlag label={flag} />
      </Reveal>
    </div>
  );
}

type Essay = { title: string; category: string };
const ESSAYS: Essay[] = [
  { title: "Solving Loneliness in the Ummah", category: "Digital Wellbeing" },
  {
    title: "The Next 100 Unicorns of the Muslim World",
    category: "Muslim Digital Economy",
  },
  { title: "The Future of Islamic AI", category: "AI and Society" },
];

type Report = { title: string; coverage: string };
const REPORTS: Report[] = [
  {
    title: "State of the Muslim Digital Economy 2026",
    coverage: "Startups · Investment · AI · FinTech · Commerce",
  },
  {
    title: "Global Muslim Venture Capital Report",
    coverage: "Funds · LPs · Exits · Investments",
  },
];

export function InsightsFeeds() {
  return (
    <>
      {/* Latest essays — card grid */}
      <section id="essays" className="border-t border-rule scroll-mt-20">
        <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[110px] max-md:py-[72px]">
          <SectionHead eyebrow="Latest Essays" flag="Essays in writing" />
          <div className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-10">
            {ESSAYS.map((essay, i) => (
              <Reveal key={essay.title} delay={200 + i * 80} className="contents">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-ivory">
                  <div className="relative grid aspect-[16/9] place-items-center bg-ivory-2">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                      Image
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="self-start rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/60">
                      {essay.category}
                    </span>
                    <h3 className="mt-5 font-serif font-normal text-green-700 leading-[1.2] tracking-[-0.012em] text-[clamp(18px,1.6vw,22px)]">
                      {essay.title}
                    </h3>
                    <div className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      Coming soon
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research reports — rows */}
      <section id="reports" className="border-t border-rule scroll-mt-20">
        <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[110px] max-md:py-[72px]">
          <SectionHead eyebrow="Research Reports" flag="Reports in research" />
          <div className="mt-12 border-t border-rule max-md:mt-10">
            {REPORTS.map((r, i) => (
              <Reveal key={r.title} delay={200 + i * 80} className="contents">
                <div className="grid grid-cols-[44px_1fr_auto] items-center gap-8 border-b border-rule py-8 max-md:gap-5 max-md:py-7">
                  <span className="text-green-700 opacity-70">
                    <Icon name="docs" size={26} />
                  </span>
                  <div>
                    <h3 className="font-serif font-normal text-green-700 leading-[1.2] tracking-[-0.012em] text-[clamp(18px,1.7vw,22px)]">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                      {r.coverage}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Coming soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company announcements — dated news list (still empty state) */}
      <section id="announcements" className="border-t border-rule scroll-mt-20">
        <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[110px] max-md:py-[72px]">
          <SectionHead eyebrow="Company Announcements" flag="Announcements pending" />
          <div className="mt-12 border-t border-rule max-md:mt-10">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={200 + i * 70} className="contents">
                <div className="grid grid-cols-[120px_1fr_auto] items-center gap-8 border-b border-rule py-7 max-md:grid-cols-[1fr_auto] max-md:gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted max-md:hidden">
                    Date —
                  </span>
                  <div className="space-y-2.5">
                    <Bar w="52%" />
                  </div>
                  <span className="rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/55">
                    Fitrah Global News
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product updates — changelog style (still empty state) */}
      <section id="updates" className="border-t border-rule scroll-mt-20">
        <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[110px] max-md:py-[72px]">
          <SectionHead eyebrow="Product Updates" flag="Updates pending" />
          <div className="mt-12 border-t border-rule max-md:mt-10">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={200 + i * 70} className="contents">
                <div className="flex items-center gap-6 border-b border-rule py-7 max-md:gap-4">
                  <span className="shrink-0 rounded-md border border-rule-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    v—
                  </span>
                  <div className="flex-1 space-y-2.5">
                    <Bar w="58%" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted max-md:hidden">
                    Coming soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
