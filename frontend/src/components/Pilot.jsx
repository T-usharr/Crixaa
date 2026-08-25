import { Reveal, Chapter } from "./Reveal";

const PHASES = [
  {
    n: "01",
    title: "Connect one portfolio",
    body: "Point Crixaa at one real portfolio's new-to-credit segment. No process changes, no borrower-facing changes.",
  },
  {
    n: "02",
    title: "90 days in shadow",
    body: "Crixaa scores every application alongside your existing process. No live decision is changed, touched, or delayed.",
  },
  {
    n: "03",
    title: "Compare against reality",
    body: "Line Crixaa's recommendations up against what actually happened to those borrowers — approvals, declines, early repayments.",
  },
  {
    n: "04",
    title: "Decide on your own numbers",
    body: "Go live only if your portfolio-specific results justify it. Real numbers, not a sales deck.",
  },
];

export default function Pilot() {
  return (
    <section
      id="pilot"
      data-testid="pilot-section"
      className="border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="09" label="How we work" />
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A structured pilot,{" "}
              <span className="text-emerald-700">not a leap of faith.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              You don't buy a new-to-credit underwriting layer on a demo. You watch it
              score your own applicants, in shadow, for a full quarter — then you
              decide.
            </p>
          </Reveal>

          <div data-testid="pilot-offer-card" className="space-y-px border border-slate-200 bg-slate-200">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={0.08 + i * 0.08} className="bg-white">
                <div className="flex gap-5 p-5 transition-colors duration-300 hover:bg-slate-50 sm:gap-8 sm:p-6">
                  <span className="font-mono text-xl font-semibold text-emerald-700 tabular-nums">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
