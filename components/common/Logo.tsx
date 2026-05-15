type LogoProps = {
  size?: number;
  stroke?: number;
  className?: string;
};

export function LogoMark({ size = 22, stroke = 1.4, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" />
      <circle cx="50" cy="50" r="26" />
      <line x1="8" y1="50" x2="92" y2="50" />
      <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="Fitrah Global"
      className={`inline-flex items-center gap-3 text-green-700 ${className ?? ""}`}
    >
      <LogoMark />
      <span className="font-serif text-[20px] tracking-[-0.01em] leading-none">
        Fitrah{" "}
        <em className="italic font-light text-green-500">Global</em>
      </span>
    </a>
  );
}
