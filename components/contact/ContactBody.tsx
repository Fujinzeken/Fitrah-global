import { Reveal } from "../common/Reveal";
import { ContactForm } from "./ContactForm";

// PRD §9 Page 12 — contact body. Left: the six Contact Categories (verbatim
// from PRD §9 Page 12) with short grounded descriptors, some linking to the
// relevant page. Right: the contact form. The descriptors are light authored
// framing derived from the category names + site IA; logged in placeholders.md.

type Category = { name: string; desc: string; href?: string };

const CATEGORIES: Category[] = [
  { name: "Partnerships", desc: "Strategic and ecosystem partnerships." },
  { name: "Media", desc: "Press, interviews, and media inquiries." },
  { name: "Careers", desc: "Roles and the talent community.", href: "/careers" },
  {
    name: "Ventures",
    desc: "Founders, investment, and venture-building.",
    href: "/fitrah-ventures",
  },
  { name: "Product Inquiries", desc: "Questions about our products and platforms." },
  { name: "General Contact", desc: "Anything else." },
];

export function ContactBody() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[100px] max-md:py-[64px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left: categories */}
          <Reveal>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Who you&rsquo;ll reach
              </h2>
              <ul className="mt-7 flex flex-col border-t border-rule">
                {CATEGORIES.map((c) => (
                  <li key={c.name} className="border-b border-rule py-5">
                    {c.href ? (
                      <a href={c.href} className="group block">
                        <span className="font-serif text-[20px] text-green-700 tracking-[-0.012em] transition-colors group-hover:text-gold">
                          {c.name}
                        </span>
                        <p className="mt-1 text-[14px] leading-[1.5] text-muted">
                          {c.desc}
                        </p>
                      </a>
                    ) : (
                      <>
                        <span className="font-serif text-[20px] text-green-700 tracking-[-0.012em]">
                          {c.name}
                        </span>
                        <p className="mt-1 text-[14px] leading-[1.5] text-muted">
                          {c.desc}
                        </p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
