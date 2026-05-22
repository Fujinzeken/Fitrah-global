import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 11 §7 — Talent Community CTA. Closing conversion path for
// Careers (anchor target #talent, linked from Open Roles). Routes to /contact
// since no applicant-tracking system is connected. Mirrors the site-wide
// closing-CTA composition.

export function TalentCommunityCTA() {
  return (
    <section id="talent" className="bg-cta-glow text-ivory scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            Don&rsquo;t see your role?{" "}
            <em className="italic font-light text-gold-soft">
              Let&rsquo;s still talk.
            </em>
          </h2>
          <p className="mx-auto mt-7 max-w-[52ch] text-[16px] leading-[1.65] text-ivory/75">
            Join our talent community. Tell us what you do and what you care
            about &mdash; we&rsquo;ll reach out when a role fits.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-5 py-3 text-[14px] font-medium text-green-900 transition-colors hover:bg-sand"
            >
              Join the talent community
              <ArrowRight />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Learn about us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
