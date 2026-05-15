import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// All copy verbatim from client-supplied content (new-info.md, "Why Now").
const SUPPORTING_POINTS = [
  "The Muslim population is large, growing, and globally distributed.",
  "Digital adoption is now mainstream across almost every part of daily life.",
  "AI is reshaping education, media, commerce, discovery, and communication.",
  "Muslim consumers are increasingly seeking trusted, ethical, halal, and values-aligned alternatives.",
  "Existing digital platforms are optimized mostly for attention, advertising, and engagement — not trust, clarity, or long-term wellbeing.",
];

export function WhyNow() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="max-w-[58ch]">
          <Eyebrow>Why Now</Eyebrow>
          <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.06] tracking-[-0.022em] text-[clamp(30px,3.6vw,52px)]">
            The Muslim world is digitally connected,{" "}
            <em className="italic font-light text-green-500">
              but not digitally served.
            </em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-[1.05fr_0.95fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <Reveal>
            <div className="space-y-5 text-[17px] leading-[1.65] text-muted max-w-[58ch]">
              <p>
                The global Muslim community is young, connected, mobile-first,
                and increasingly active across digital platforms. Muslims use
                the same tools as everyone else to communicate, learn, shop,
                work, create, and build community — but most of those platforms
                were not designed around Muslim values, family structures,
                trust needs, or ethical expectations.
              </p>
              <p>
                At the same time, AI is changing how people search, learn,
                shop, create, and communicate. This creates a rare opportunity
                to build a new generation of digital products from the
                beginning: products that are intelligent, trustworthy,
                culturally aware, and values-aligned.
              </p>
              <p className="text-ink">
                Fitrah Global exists because the next phase of Muslim digital
                life needs more than content. It needs{" "}
                <em className="italic font-medium text-green-700">
                  infrastructure
                </em>
                .
              </p>
            </div>
          </Reveal>

          <div className="border-t border-rule">
            {SUPPORTING_POINTS.map((point, i) => (
              <Reveal key={i} delay={Math.min(i, 4) * 60}>
                <div className="grid grid-cols-[44px_1fr] gap-4 items-baseline border-b border-rule py-5">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-[1.55] text-ink/85">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
