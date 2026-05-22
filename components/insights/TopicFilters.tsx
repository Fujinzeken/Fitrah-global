"use client";

import { useState } from "react";
import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 10 §6 — Topic filters. Real content: the seven Categories are
// verbatim from PRD §9 Page 10. Rendered as a working filter bar (selection is
// interactive UI). Placed near the top as the index nav for the feeds below.
// No live filtering yet (no content to filter) — the active state is purely
// presentational until content is connected; flagged in placeholders.md.

const CATEGORIES = [
  "All",
  "Muslim Digital Economy",
  "Ethical Technology",
  "AI and Society",
  "Commerce and Creators",
  "Digital Wellbeing",
  "Fitrah Global News",
  "Research Reports",
];

export function TopicFilters() {
  const [active, setActive] = useState("All");

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[72px] max-md:py-[48px]">
        <Reveal>
          <Eyebrow>Topics</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat === active;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.13em] transition-colors ${
                      isActive
                        ? "border-green-700 bg-green-700 text-ivory"
                        : "border-rule-2 text-ink/70 hover:border-green-700 hover:text-green-700"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
