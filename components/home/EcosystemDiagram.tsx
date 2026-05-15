"use client";

import { Icon, type IconName } from "../common/Icon";
import { LogoMark } from "../common/Logo";
import { useInView } from "../common/useInView";

const NODES: { name: string; icon: IconName }[] = [
  { name: "Communication", icon: "comms" },
  { name: "Commerce", icon: "commerce" },
  { name: "Knowledge", icon: "education" },
  { name: "Media", icon: "media" },
  { name: "AI", icon: "ai" },
  { name: "Trust Infrastructure", icon: "shield" },
];

function railClasses(i: number, last: number) {
  if (i === 0) return "left-1/2 right-[-8px]";
  if (i === last) return "left-[-8px] right-1/2";
  return "left-[-8px] right-[-8px]";
}

// PRD §16 motion: "gentle ecosystem line animation"
// Sequence (~1.5s total when in view): trunk → rail → drops, mirrored below.
const T = {
  parent: 0,
  topTrunk: 150,
  topRail: 400,
  topDrops: 650,
  bottomDrops: 950,
  bottomRail: 1200,
  bottomTrunk: 1400,
  trust: 1550,
} as const;

export function EcosystemDiagram() {
  const last = NODES.length - 1;
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });

  // Subtle fade applied to nodes + the parent + trust layer based on inView.
  const blockFade = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";
  const scaleY = inView ? "scale-y-100" : "scale-y-0";
  const scaleX = inView ? "scale-x-100" : "scale-x-0";

  return (
    <div ref={ref}>
      {/* Parent node */}
      <div
        className={`flex justify-center transition-all duration-700 ease-out motion-reduce:transition-none ${blockFade}`}
        style={{ transitionDelay: `${T.parent}ms` }}
      >
        <div className="inline-flex items-center gap-3.5 rounded-xl bg-green-700 px-7 py-5 text-ivory">
          <LogoMark size={26} className="text-ivory" />
          <span className="font-serif text-[22px] tracking-[-0.01em]">
            Fitrah Global
          </span>
        </div>
      </div>

      {/* Trunk: parent → rail */}
      <div className="mx-auto flex h-14 w-px justify-center">
        <span
          className={`block h-full w-px origin-top bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleY}`}
          style={{ transitionDelay: `${T.topTrunk}ms` }}
        />
      </div>

      {/* Connector: rail + drops (desktop) */}
      <div className="grid grid-cols-6 gap-4 max-md:hidden">
        {NODES.map((n, i) => (
          <div key={n.name} className="relative h-14">
            <span
              className={`absolute top-0 h-px origin-center bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleX} ${railClasses(i, last)}`}
              style={{ transitionDelay: `${T.topRail + i * 30}ms` }}
            />
            <span
              className={`absolute inset-y-0 left-1/2 w-px origin-top -translate-x-1/2 bg-rule transition-transform duration-400 ease-out motion-reduce:transition-none ${scaleY}`}
              style={{ transitionDelay: `${T.topDrops + i * 40}ms` }}
            />
          </div>
        ))}
      </div>

      {/* Mobile trunk between parent and nodes */}
      <div className="mx-auto hidden h-12 w-px justify-center max-md:flex">
        <span
          className={`block h-full w-px origin-top bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleY}`}
          style={{ transitionDelay: `${T.topTrunk}ms` }}
        />
      </div>

      {/* Nodes */}
      <div className="grid grid-cols-6 gap-4 max-md:grid-cols-2">
        {NODES.map((n, i) => (
          <div
            key={n.name}
            className={`group flex flex-col items-center gap-4 rounded-xl border border-rule bg-ivory px-4 py-10 text-center transition-all duration-700 ease-out hover:border-rule-2 hover:bg-ivory-2 motion-reduce:transition-none max-md:py-8 ${blockFade}`}
            style={{ transitionDelay: `${T.topRail + i * 60}ms` }}
          >
            <span className="text-green-700 opacity-70 transition-opacity group-hover:opacity-100">
              <Icon name={n.icon} size={30} />
            </span>
            <span className="text-[14px] font-medium leading-tight text-ink">
              {n.name}
            </span>
          </div>
        ))}
      </div>

      {/* Connector: drops + rail to trust layer (desktop) */}
      <div className="grid grid-cols-6 gap-4 max-md:hidden">
        {NODES.map((n, i) => (
          <div key={n.name} className="relative h-14">
            <span
              className={`absolute inset-y-0 left-1/2 w-px origin-top -translate-x-1/2 bg-rule transition-transform duration-400 ease-out motion-reduce:transition-none ${scaleY}`}
              style={{ transitionDelay: `${T.bottomDrops + i * 40}ms` }}
            />
            <span
              className={`absolute bottom-0 h-px origin-center bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleX} ${railClasses(i, last)}`}
              style={{ transitionDelay: `${T.bottomRail + i * 30}ms` }}
            />
          </div>
        ))}
      </div>

      {/* Trunk: rail → trust layer */}
      <div className="mx-auto flex h-14 w-px justify-center max-md:h-12">
        <span
          className={`block h-full w-px origin-top bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleY}`}
          style={{ transitionDelay: `${T.bottomTrunk}ms` }}
        />
      </div>

      {/* Shared trust layer */}
      <div
        className={`rounded-xl border border-rule bg-sand px-8 py-12 text-center transition-all duration-700 ease-out motion-reduce:transition-none max-md:py-10 ${blockFade}`}
        style={{ transitionDelay: `${T.trust}ms` }}
      >
        <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-green-700">
          Shared Trust Layer
        </div>
        <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
          Identity · Safety · Verification · Payments · Compliance
        </div>
      </div>
    </div>
  );
}
