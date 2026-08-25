import { motion } from "framer-motion";
import { Reveal, Chapter, EASE } from "./Reveal";
import { Caption, SOURCES } from "./Caption";

function DivergenceBars() {
  return (
    <div data-testid="paradox-divergence-chart" className="space-y-5">
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-sm font-medium text-ink">Individual entrepreneurs</span>
          <span className="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
            1.8×
          </span>
        </div>
        <div className="h-2.5 w-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="h-full bg-emerald-700"
          />
        </div>
      </div>
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-sm font-medium text-ink">Their own business entities</span>
          <span className="font-mono text-sm font-semibold text-ink-mute tabular-nums">
            1.0×
          </span>
        </div>
        <div className="h-2.5 w-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "56%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
            className="h-full bg-slate-400"
          />
        </div>
      </div>
      <Caption source="TransUnion CIBIL · Mar 2023 – Mar 2026" href={SOURCES.cibilParadox} />
    </div>
  );
}

export default function Paradox() {
  return (
    <section
      id="problem"
      data-testid="paradox-section"
      className="border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <Chapter index="01" label="The person is trusted. The business isn't." />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              A 750+ personal score still gets the business declined.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              A founder can carry a personal credit score above 750, pay every EMI on
              time for years, and still watch their own business get declined — or
              priced well into double digits — the moment a lender is asked to score
              the entity instead of the person standing behind it. This isn't a
              one-off story. It's a measurable shift in where credit actually flows.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 border-l-2 border-emerald-700 pl-5 text-base font-medium leading-relaxed text-ink md:text-lg">
              Lenders already trust the person. They still can't see the business
              behind them — even when it's the exact same person they'd already
              approve.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal delay={0.15} className="border border-slate-200 bg-white p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
              Credit growth, Mar 2023 – Mar 2026
            </p>
            <div className="mt-8">
              <DivergenceBars />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ink-soft">
              Credit extended to individual entrepreneurs grew{" "}
              <span className="font-mono font-semibold text-ink tabular-nums">1.8×</span>{" "}
              faster than credit extended to their own business entities over the same
              three years.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
