import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// Body copy verbatim from PRD §9 Page 2 (About) → About Copy.
export function WhoWeAre() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="grid grid-cols-[0.42fr_0.58fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
          </div>

          <div className="space-y-6 max-w-[60ch]">
            <p className="text-[20px] leading-[1.55] tracking-[-0.005em] text-ink">
              Fitrah Global is a holding company creating trusted digital
              platforms for the Muslim world across{" "}
              <em className="italic text-green-700">
                communication, commerce, media, education, AI, and community
                infrastructure
              </em>
              .
            </p>
            <p className="text-[17px] leading-[1.7] text-muted">
              Our work is rooted in a simple belief: technology should serve
              human beings, strengthen trust, protect values, and help people
              live with clarity and purpose.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
