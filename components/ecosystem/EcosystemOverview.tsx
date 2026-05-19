import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 3 §1 — Ecosystem overview. The PRD requires this section but
// provides no copy. Framing is built from PRD-established language only:
// "parent company with multiple verticals and companies" (§8 structural
// recommendation), the six verticals (§9 Page 3), and the three operating
// companies (§9 Page 4: Fitrah Technologies · Fitrah Labs · Fitrah Ventures).
// No invented stats or claims.

export function EcosystemOverview() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <div className="grid grid-cols-[0.36fr_0.64fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)] max-w-[14ch]">
              A holding,{" "}
              <em className="italic font-light text-green-500">built as a system.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-6 text-[17px] leading-[1.65] text-ink/85 max-w-[58ch]">
              <p>
                Fitrah Global is the parent company for a connected family of
                platforms serving the Muslim world. Six verticals &mdash;
                communication, commerce, knowledge, media, AI, and trust
                infrastructure &mdash; frame the operating companies, research
                labs, and ventures that ship under the Fitrah name.
              </p>
              <p>
                Distinct products. One philosophy. Each platform operates with
                its own focus, but every product carries the same commitment
                to trust, clarity, human wellbeing, and long-term value.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Structural breakdown — three plain-prose columns. All entities
            named here come verbatim from the PRD; no counts beyond what
            the PRD enumerates. */}
        <div className="mt-24 grid grid-cols-3 gap-10 border-t border-rule pt-12 max-md:mt-16 max-md:grid-cols-1 max-md:gap-7 max-md:pt-8">
          <Reveal delay={200}>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Parent
              </div>
              <div className="mt-3 font-serif text-[22px] leading-[1.2] text-green-700 tracking-[-0.012em]">
                Fitrah Global
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-muted max-w-[32ch]">
                The holding company.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Verticals
              </div>
              <div className="mt-3 font-serif text-[22px] leading-[1.2] text-green-700 tracking-[-0.012em]">
                Six
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-muted max-w-[36ch]">
                Communication, commerce, knowledge, media, AI, and trust
                infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Operating companies
              </div>
              <div className="mt-3 font-serif text-[22px] leading-[1.2] text-green-700 tracking-[-0.012em]">
                Technologies &middot; Labs &middot; Ventures
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-muted max-w-[36ch]">
                Product and engineering, research and incubation, investment
                and venture-building.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
