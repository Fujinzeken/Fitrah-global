import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 2 — Why We Exist. Copy verbatim from client-supplied content
// (new-info.md, "Why We Exist"). Treated as a manifesto: a large opening
// conviction in serif, followed by the supporting paragraphs and an inline
// manifesto-style pivot line.
export function WhyWeExist() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Why We Exist</Eyebrow>
        </Reveal>

        {/* Opening conviction — large serif lead */}
        <Reveal delay={120}>
          <p className="mt-10 max-w-[28ch] font-serif font-normal text-green-700 leading-[1.08] tracking-[-0.022em] text-[clamp(28px,3.6vw,48px)] max-md:mt-8">
            Fitrah Global was founded on a simple belief: Muslims deserve
            technology, institutions, and opportunities built around{" "}
            <em className="italic font-light text-green-500">
              their values, not despite them.
            </em>
          </p>
        </Reveal>

        {/* Supporting prose */}
        <Reveal delay={260}>
          <div className="mt-14 max-w-[62ch] space-y-6 text-[17px] leading-[1.65] text-ink/85 max-md:mt-10">
            <p>
              Over the last two decades, the digital world has transformed how
              people learn, communicate, work, invest, build families, and
              participate in society. Yet across many of these domains,
              Muslims remain underserved by products that understand their
              worldview, aspirations, and ethical principles.
            </p>
            <p>
              We believe the next generation of great companies will not
              merely translate existing products into new markets. They will
              be built from first principles around the needs of the
              communities they serve.
            </p>
          </div>
        </Reveal>

        {/* Manifesto pivot line */}
        <Reveal delay={380}>
          <p className="mt-10 max-w-[28ch] font-serif italic font-light text-green-500 leading-[1.2] text-[clamp(22px,2.4vw,30px)]">
            Fitrah Global exists to build those companies.
          </p>
        </Reveal>

        {/* Closing prose */}
        <Reveal delay={500}>
          <div className="mt-10 max-w-[62ch] space-y-6 text-[17px] leading-[1.65] text-ink/85">
            <p>
              Our mission is to create technology, media, education, and
              economic infrastructure that enables Muslims to live, learn,
              earn, connect, and thrive while remaining rooted in their values.
            </p>
            <p>
              We are building for a future where Muslim talent, capital,
              knowledge, and opportunity are more connected than ever before
              &mdash; and where the global Ummah participates fully in shaping
              the next century of innovation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
