import { Logo } from "../common/Logo";

// Columns and footer copy per PRD §8 Footer Requirements.
const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Philosophy", href: "/philosophy" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Ecosystem",
      links: [
        { label: "Communication", href: "/ecosystem#communication" },
        { label: "Commerce", href: "/ecosystem#commerce" },
        { label: "Knowledge", href: "/ecosystem#knowledge" },
        { label: "Media", href: "/ecosystem#media" },
        { label: "AI", href: "/ecosystem#ai" },
        { label: "Trust Infrastructure", href: "/ecosystem#trust-infrastructure" },
      ],
    },
    {
      heading: "Companies",
      links: [
        { label: "Fitrah Technologies", href: "/fitrah-technologies" },
        { label: "Fitrah Labs", href: "/fitrah-labs" },
        { label: "Fitrah Ventures", href: "/fitrah-ventures" },
      ],
    },
    {
      heading: "Insights",
      links: [
        { label: "Essays", href: "/insights" },
        { label: "Research", href: "/insights" },
        { label: "Company News", href: "/insights" },
        { label: "Reports", href: "/insights" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
    {
      heading: "Social",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "X / Twitter", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "Newsletter", href: "#" },
      ],
    },
  ];

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-20 max-md:py-14">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-rule pb-14">
          <div className="max-w-[36ch]">
            <Logo />
            <p className="mt-5 font-serif text-[20px] leading-[1.4] tracking-[-0.01em] text-green-700">
              Fitrah Global builds trusted digital infrastructure for the Muslim
              world.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            EN
          </span>
        </div>

        <div className="grid grid-cols-6 gap-8 pt-14 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {col.heading}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-ink/80 transition-colors hover:text-green-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <span>© 2026 Fitrah Global</span>
          <span className="max-sm:hidden">
            Trusted digital infrastructure for the Muslim world
          </span>
        </div>
      </div>
    </footer>
  );
}
