import { Reveal, Chapter } from "./Reveal";
import { Caption, SOURCES } from "./Caption";

const STATS = [
  {
    number: "₹25–30 lakh crore",
    label: "India's estimated MSME credit gap",
    source: "SIDBI · May 2025",
    href: SOURCES.sidbiReport,
    testid: "stat-credit-gap",
  },
  {
    number: "41%",
    label: "of registered MSMEs have ever accessed formal credit",
    source: "SIDBI / MSME Pulse reporting",
    href: SOURCES.sidbiReport,
    testid: "stat-formal-credit-access",
  },
  {
    number: "72% vs 46%",
    label: "new-to-credit borrowers land in medium-risk bands, vs. existing-to-credit",
    source: "TransUnion CIBIL",
    href: SOURCES.cibilPulse,
    testid: "stat-risk-bands",
  },
];

export default function Population() {
  return (
    <section
      data-testid="population-section"
      className="border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="02" label="Now zoom out to the whole population" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
            And it's not only entrepreneurs with a credit history to fall back on.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote
            data-testid="quote-sidbi"
            className="mt-12 max-w-4xl border-l-2 border-emerald-700 pl-6 sm:pl-10"
          >
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
              "Gig workers, first-time entrepreneurs, and informal-sector business
              owners are largely creditworthy. Lenders simply can't see it — because
              their financial behaviour was never captured by a traditional credit
              bureau."
            </p>
            <footer className="mt-6">
              <Caption
                source="Stated directly by SIDBI, India's apex MSME finance institution — not a Crixaa claim"
                href={SOURCES.sidbiReport}
              />
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.number} delay={0.1 + i * 0.1} className="bg-white">
              <div data-testid={s.testid} className="flex h-full flex-col p-6 sm:p-8">
                <span className="font-mono text-3xl font-semibold tracking-tight text-ink tabular-nums lg:text-4xl">
                  {s.number}
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {s.label}
                </p>
                <Caption source={s.source} href={s.href} className="mt-6" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
            That's not a lending-risk problem.{" "}
            <span className="text-emerald-700">It's a visibility problem.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
