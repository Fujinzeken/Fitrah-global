import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

export function Intro() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="grid grid-cols-[0.82fr_1.18fr] gap-20 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(30px,3.6vw,52px)] max-w-[15ch]">
              A holding company for the{" "}
              <em className="italic font-light text-green-500">
                Muslim digital economy.
              </em>
            </h2>
          </div>

          <div className="max-w-[54ch] self-end max-lg:self-start">
            <p className="text-[19px] leading-[1.6] text-ink tracking-[-0.005em]">
              Fitrah Global is a holding company creating trusted digital
              platforms for the Muslim world across communication, commerce,
              media, education, AI, and community infrastructure.
            </p>
            <p className="mt-6 text-[16px] leading-[1.7] text-muted">
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
