import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

type Platform = {
  name: string;
  category: string;
  status: string;
  desc: string;
};

// All content verbatim from PRD §9 (Companies page, Portfolio Items).
// Platform set confirmed by client (new-info.md): Safa / Salam / Tayyib /
// Basirah / Fitrah AI / Fitrah Media. Maryam / Sokin / Nikoh removed.
const PLATFORMS: Platform[] = [
  {
    name: "Safa by Fitrah",
    category: "Browser / Digital Gateway",
    status: "Concept",
    desc: "A Muslim-first browser and digital gateway for safer, values-aligned internet discovery.",
  },
  {
    name: "Salam by Fitrah",
    category: "Communication",
    status: "Concept",
    desc: "A messaging and community platform designed for trusted Muslim digital connection.",
  },
  {
    name: "Tayyib by Fitrah",
    category: "Social Commerce",
    status: "Concept",
    desc: "A halal social commerce platform connecting trusted creators, ethical brands, and Muslim consumers.",
  },
  {
    name: "Basirah by Fitrah",
    category: "Spiritual Learning",
    status: "Concept",
    desc: "An azkar, zikr, and spiritual learning platform designed to support daily remembrance and community accountability.",
  },
  {
    name: "Fitrah AI",
    category: "Artificial Intelligence",
    status: "Building",
    desc: "AI-powered tools for learning, discovery, safety, personalization, and guidance.",
  },
  {
    name: "Fitrah Media",
    category: "Media / Intelligence",
    status: "Planned",
    desc: "A media and intelligence platform covering the Muslim digital economy, ethical technology, culture, commerce, and community.",
  },
];

function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Building"
      ? "border-green-500/50 text-green-700"
      : "border-rule-2 text-muted";
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${tone}`}
    >
      {status}
    </span>
  );
}

export function FeaturedPlatforms() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Featured Platforms</Eyebrow>
          <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(30px,3.6vw,52px)]">
            The platforms{" "}
            <em className="italic font-light text-green-500">taking shape.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} className="h-full" delay={Math.min(i, 5) * 60}>
              <a
                href="/companies"
                className="group flex h-full flex-col rounded-lg border border-rule bg-ivory p-7 transition-colors hover:border-rule-2 hover:bg-ivory-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {p.category}
                  </span>
                  <StatusPill status={p.status} />
                </div>

                <h3 className="mt-5 font-serif text-[24px] leading-[1.15] tracking-[-0.012em] text-green-700">
                  {p.name}
                </h3>

                <p className="mt-3 flex-grow text-[14px] leading-[1.6] text-muted">
                  {p.desc}
                </p>

                <div className="mt-7 flex items-center gap-2 border-t border-rule pt-5 text-[13px] font-medium text-green-700">
                  Overview
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
