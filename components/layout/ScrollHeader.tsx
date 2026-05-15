"use client";

import { useEffect, useState } from "react";

export function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md backdrop-saturate-150 border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {children}
    </header>
  );
}
