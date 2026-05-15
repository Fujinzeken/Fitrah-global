"use client";

import { useInView } from "./useInView";

// Fade-in-on-scroll wrapper (PRD §16 Motion). Triggers once when the element
// enters the viewport; respects prefers-reduced-motion by showing immediately.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
