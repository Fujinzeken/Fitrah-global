import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// Headline and buttons verbatim from PRD §9 Page 1 — Final CTA.
export function FinalCTA() {
  return (
    <section className="bg-cta-glow text-ivory">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            Build the future with{" "}
            <em className="italic font-light text-gold-soft">Fitrah Global.</em>
          </h2>
          <div className="mt-10 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-5 py-3 text-[14px] font-medium text-green-900 transition-colors hover:bg-sand"
            >
              Partner With Us
              <ArrowRight />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Join Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
