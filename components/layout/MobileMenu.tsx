"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../common/Icon";
import { ArrowRight } from "../common/ArrowRight";
import { NAV_ITEMS } from "./navItems";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M5 5l12 12" />
          <path d="M17 5L5 17" />
        </>
      ) : (
        <>
          <path d="M3 7h16" />
          <path d="M3 15h16" />
        </>
      )}
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open + restore on close.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Esc to close + return focus to trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // When opening, move focus into the panel.
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])",
      );
      first?.focus();
    }
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="grid place-items-center w-10 h-10 -mr-1 rounded-md text-ink lg:hidden hover:bg-sand/60 transition-colors"
      >
        <HamburgerIcon open={open} />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-[88vw] max-w-[420px] bg-ivory border-l border-rule shadow-[0_0_60px_-10px_rgba(15,42,32,0.25)] transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        } motion-reduce:transition-none`}
      >
        <div className="flex items-center justify-between h-[68px] px-6 border-b border-rule shrink-0">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Menu
          </span>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
            aria-label="Close menu"
            className="grid place-items-center w-10 h-10 -mr-2 rounded-md text-ink hover:bg-sand/60 transition-colors"
          >
            <HamburgerIcon open={true} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-rule">
                {item.dropdown ? (
                  <details
                    open={expanded === item.label}
                    onToggle={(e) => {
                      const isOpen = (e.target as HTMLDetailsElement).open;
                      setExpanded(isOpen ? item.label : null);
                    }}
                  >
                    <summary className="flex items-center justify-between py-4 cursor-pointer list-none text-[17px] font-serif text-green-700 tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className={`opacity-60 transition-transform duration-200 ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="M3 5l3 3 3-3" />
                      </svg>
                    </summary>
                    <ul className="pb-4 flex flex-col gap-1">
                      {item.dropdown.items.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-start gap-3 rounded-lg px-2 py-2.5 hover:bg-sand/60 transition-colors"
                          >
                            {sub.icon && (
                              <span className="shrink-0 mt-0.5 grid place-items-center w-8 h-8 rounded-md bg-sand text-green-700 border border-rule">
                                <Icon name={sub.icon} size={16} />
                              </span>
                            )}
                            <span className="min-w-0">
                              <span className="block text-[14px] font-medium text-ink leading-tight">
                                {sub.label}
                              </span>
                              <span className="block text-[12px] text-muted leading-snug mt-0.5">
                                {sub.desc}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-[17px] font-serif text-green-700 tracking-[-0.01em] hover:text-green-500 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-rule px-6 py-5 flex items-center justify-between gap-4 shrink-0">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            EN
          </span>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[13px] font-medium bg-green-700 text-ivory hover:bg-green-800 transition-colors"
          >
            Partner with us
            <ArrowRight />
          </a>
        </div>
      </div>
    </>
  );
}
