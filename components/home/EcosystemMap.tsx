import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { EcosystemDiagram } from "./EcosystemDiagram";

export function EcosystemMap() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Ecosystem Map</Eyebrow>
          <h2 className="mt-6 font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(30px,3.6vw,52px)]">
            How the ecosystem{" "}
            <em className="italic font-light text-green-500">connects.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-muted">
            Fitrah Global connects products around a shared commitment to trust,
            clarity, human wellbeing, and values-aligned digital life.
          </p>
        </Reveal>

        <div className="mt-24 max-md:mt-14">
          <EcosystemDiagram />
        </div>
      </div>
    </section>
  );
}
