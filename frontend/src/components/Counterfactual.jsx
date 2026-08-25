import { Reveal, Chapter } from "./Reveal";
import { Caption, SOURCES } from "./Caption";

const LENDERS = [
  {
    name: "SBFC Finance",
    logo: "sbfc.svg",
    metric: "<40%",
    metricLabel: "of applications approved",
    body: "A listed NBFC lending across ₹5L–30L — overlapping Crixaa's band — now approves under 40% of applications, stating plainly it is \"not chasing growth at the cost of credit.\" 89% of its book is concentrated in borrowers with a CIBIL score above 700.",
    source: "SBFC Finance · investor disclosure",
    href: SOURCES.sbfc,
    testid: "lender-card-sbfc",
  },
  {
    name: "Aye Finance",
    logo: "aye.jpg",
    metric: "4.21% → ~4.85%",
    metricLabel: "gross NPA, FY25 to H1 FY26",
    body: "Gross NPA climbed from 4.21% to roughly 4.85% between FY25 and H1 FY26, with profit down about 40% year-on-year on rising impairment costs.",
    source: "Aye Finance · FY26 results",
    href: SOURCES.aye,
    testid: "lender-card-aye",
  },
  {
    name: "Five-Star Business Finance",
    logo: "fivestar.png",
    metric: "99%",
    metricLabel: "of the loan book is collateralised",
    body: "Operates almost exactly inside Crixaa's ₹1L–10L band — and solves borrower uncertainty today by requiring collateral on 99% of its loan book.",
    source: "Five-Star Business Finance · CARE Ratings, June 2025",
    href: SOURCES.fiveStar,
    testid: "lender-card-fivestar",
  },
  {
    name: "NeoGrowth Credit",
    logo: "neogrowth.png",
    metric: "96%",
    metricLabel: "unsecured exposure to MSME borrowers",
    body: "Carries 96% unsecured exposure to MSME borrowers a rating agency itself describes as having a \"moderate credit profile.\"",
    source: "NeoGrowth Credit · ICRA rating rationale",
    href: SOURCES.neoGrowth,
    testid: "lender-card-neogrowth",
  },
];

export default function Counterfactual() {
  return (
    <section
      id="lenders"
      data-testid="counterfactual-section"
      className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="05" label="What it costs lenders today, without this" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Real lenders in this exact segment are already paying for the gap.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LENDERS.map((l, i) => (
            <Reveal key={l.name} delay={0.08 + i * 0.08}>
              <div
                data-testid={l.testid}
                className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.25)] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-9 items-center gap-3">
                    <img
                      src={`/logos/${l.logo}`}
                      alt={`${l.name} logo`}
                      data-testid={`${l.testid}-logo`}
                      className="h-7 w-auto max-w-[130px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <span className="shrink-0 font-mono text-2xl font-semibold tracking-tight text-ink tabular-nums">
                    {l.metric}
                  </span>
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute">
                  {l.name} · {l.metricLabel}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {l.body}
                </p>
                <Caption source={l.source} href={l.href} className="mt-6" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-ink-mute">
            Logos are the property of their respective owners, referenced from their
            official websites. Crixaa has no commercial relationship with these
            lenders — they appear here as public, cited evidence of the segment's
            problem, not as customers or endorsers.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-14 max-w-3xl border-l-2 border-emerald-700 pl-5 font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl">
            Decline the volume, or absorb the risk.{" "}
            <span className="text-ink-mute">Neither is a permanent answer.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
