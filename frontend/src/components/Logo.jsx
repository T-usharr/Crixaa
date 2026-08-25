export const LogoMark = ({ dark = false, className = "h-7 w-7" }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    aria-hidden="true"
    data-testid="logo-mark"
  >
    <rect x="4" y="6" width="40" height="5" fill={dark ? "#F8FAFC" : "#0F172A"} />
    <rect x="12" y="17" width="24" height="5" fill={dark ? "#CBD5E1" : "#475569"} />
    <rect x="19" y="28" width="10" height="5" fill={dark ? "#64748B" : "#94A3B8"} />
    <path
      d="M19 39 L24.5 44.5 L35 33"
      stroke={dark ? "#34D399" : "#047857"}
      strokeWidth="4.5"
      strokeLinecap="square"
    />
  </svg>
);

export default function Logo({ dark = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark dark={dark} />
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Crixaa
      </span>
    </span>
  );
}
