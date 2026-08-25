import { Reveal, Chapter } from "./Reveal";

const STEPS = [
  {
    n: "1",
    name: "Connect",
    body: "Account Aggregator, GST, and bureau data the lender already collects. No new manual upload.",
  },
  {
    n: "2",
    name: "Score",
    body: "A cohort-calibrated recommendation with a stated confidence level — never a bare number pretending to certainty it can't have.",
  },
  {
    n: "3",
    name: "Explain",
    body: "Every recommendation ships with reason codes a Model Risk Committee can actually read and audit.",
  },
  {
    n: "4",
    name: "Decide",
    body: "The lender's underwriter reviews, can override — and the decision plus reasoning is logged automatically.",
  },
  {
    n: "5",
    name: "Learn",
    body: "Real repayment outcomes feed back to recalibrate the next recommendation for the next borrower in that cohort.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="06" label="How it actually works" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Five steps. The underwriter stays in charge of exactly one of them — the
            decision.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.08 + i * 0.09} className="bg-white">
              <div
                data-testid={`step-flow-item-${s.n}`}
                className="group relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-slate-50"
              >
                <span className="font-mono text-4xl font-semibold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-emerald-700 tabular-nums">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {s.name}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-2.5 top-8 z-10 hidden font-mono text-slate-300 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
