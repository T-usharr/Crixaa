const ITEMS = [
  "Recommend, never decide",
  "Account Aggregator consent rails",
  "GSTN-verified filing history",
  "Reason codes, not black boxes",
  "RBI Digital Lending Guidelines, 2022",
  "Draft Model Risk Management Guidance, 2026",
  "Cohort-calibrated confidence",
  "Every override logged",
];

export default function Marquee() {
  const row = (key) => (
    <div key={key} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {item}
          </span>
          <span className="block h-1.5 w-1.5 rotate-45 bg-emerald-700/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      data-testid="editorial-marquee"
      className="overflow-hidden border-y border-slate-200 bg-slate-50 py-5"
    >
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
