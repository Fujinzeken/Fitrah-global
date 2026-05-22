import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 4 §5 — Build or partner CTA. Closing conversion-path for the
// Companies page. The section name signals two audiences — builders who want
// to build, and partners who want to back — so the copy and the two CTAs map
// to both. Mirrors the Home / About / Ecosystem closing-CTA composition
// (drift gradient, centered headline + buttons) for cross-page consistency,
// with a Companies-specific headline.

export function BuildOrPartnerCTA() {
  return (
    <section className="bg-cta-glow text-ivory">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            Build or partner with{" "}
            <em className="italic font-light text-gold-soft">Fitrah Global.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[54ch] text-[16px] leading-[1.65] text-ivory/75">
            Whether you&rsquo;re building a platform for the Muslim world or
            backing the ones that are &mdash; there&rsquo;s a place for you in
            the portfolio.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-5 py-3 text-[14px] font-medium text-green-900 transition-colors hover:bg-sand"
            >
              Partner with us
              <ArrowRight />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Join our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
