import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 3 §7 — Partnership CTA. Closing conversion-path for the
// Ecosystem page. Mirrors the Home FinalCTA + About CTA composition (drift
// gradient, centered headline + buttons) for cross-page CTA consistency,
// with ecosystem-specific headline that does not repeat the home/about
// "Build the future with Fitrah Global." line.

export function PartnershipCTA() {
  return (
    <section className="bg-cta-glow text-ivory">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[22ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            Bring a product to{" "}
            <em className="italic font-light text-gold-soft">the ecosystem.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[54ch] text-[16px] leading-[1.65] text-ivory/75">
            Partners, founders, and builders &mdash; if you&rsquo;re building
            for the Muslim digital economy, the network is open.
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
              href="/companies"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              View companies
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
