// Tone variants:
// - "default": text-muted + gold dot, for ivory backgrounds
// - "on-sand": darker text for WCAG AA contrast on sand backgrounds
// - "on-dark": lighter text + gold-soft dot, mirrors brand HTML's
//   .eyebrow.on-dark treatment (#B8B5A7 color, gold-soft dot)
export function Eyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "on-sand" | "on-dark";
}) {
  const textColor =
    tone === "on-sand"
      ? "text-ink/70"
      : tone === "on-dark"
        ? "text-[#B8B5A7]"
        : "text-muted";
  const dotColor = tone === "on-dark" ? "bg-gold-soft" : "bg-gold";

  return (
    <span
      className={`font-mono text-[11px] tracking-[0.18em] uppercase ${textColor} inline-flex items-center gap-2.5`}
    >
      <span className={`w-[5px] h-[5px] ${dotColor} rounded-full`} />
      {children}
    </span>
  );
}
