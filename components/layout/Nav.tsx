import { Logo } from "../common/Logo";
import { Icon } from "../common/Icon";
import { ArrowRight } from "../common/ArrowRight";
import { ScrollHeader } from "./ScrollHeader";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS, type NavItem } from "./navItems";

function Chevron() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="opacity-50 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
      aria-hidden="true"
    >
      <path d="M2 3.5l3 3 3-3" />
    </svg>
  );
}

function NavDropdown({
  item,
}: {
  item: NavItem & { dropdown: NonNullable<NavItem["dropdown"]> };
}) {
  const { cols, items } = item.dropdown;
  return (
    <div className="group relative h-full flex items-center">
      <a
        href={item.href}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 opacity-[0.78] hover:opacity-100 group-hover:opacity-100 transition-opacity"
      >
        {item.label}
        <Chevron />
      </a>

      <div className="absolute top-full left-0 pt-3 opacity-0 invisible -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
        <div
          className={`bg-ivory border border-rule rounded-xl p-2.5 shadow-[0_16px_44px_-12px_rgba(15,42,32,0.22)] grid gap-0.5 ${
            cols === 2 ? "w-[560px] grid-cols-2" : "w-[296px] grid-cols-1"
          }`}
        >
          {items.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-sand transition-colors"
            >
              {sub.icon && (
                <span className="shrink-0 mt-0.5 grid place-items-center w-9 h-9 rounded-md bg-sand text-green-700 border border-rule group-hover/item:bg-ivory group-hover/item:border-rule-2 transition-colors">
                  <Icon name={sub.icon} size={18} />
                </span>
              )}
              <span className="min-w-0">
                <span className="block text-[13.5px] font-medium text-ink leading-tight">
                  {sub.label}
                </span>
                <span className="block text-[12px] text-muted leading-snug mt-1">
                  {sub.desc}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <ScrollHeader>
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] flex items-center justify-between h-[68px]">
        <Logo />

        <nav
          aria-label="Primary"
          className="flex h-full items-stretch gap-9 text-[13.5px] text-ink max-lg:hidden"
        >
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <NavDropdown
                key={item.label}
                item={item as NavItem & { dropdown: NonNullable<NavItem["dropdown"]> }}
              />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="h-full flex items-center opacity-[0.78] hover:opacity-100 transition-opacity"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-[18px] max-lg:gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted max-md:hidden">
            EN
          </span>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[13px] font-medium bg-green-700 text-ivory hover:bg-green-800 transition-colors max-sm:hidden"
          >
            Partner with us
            <ArrowRight />
          </a>
          <MobileMenu />
        </div>
      </div>
    </ScrollHeader>
  );
}
