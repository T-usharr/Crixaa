import { motion } from "framer-motion";
import { Reveal, Chapter, EASE } from "./Reveal";
import { Caption, SOURCES } from "./Caption";

function TimelineBars() {
  return (
    <div data-testid="timeline-comparison" className="space-y-6">
      <div>
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-ink">
            Traditional underwriting — manual GST checks, field visits, paper statements
          </span>
          <span className="font-mono text-sm font-semibold text-ink tabular-nums">
            14–21 days
          </span>
        </div>
        <div className="h-3 w-full bg-slate-100">
          <motion.div
            data-testid="timeline-traditional-bar"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: EASE }}
            className="h-full bg-slate-400"
          />
        </div>
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-ink">
            Account Aggregator + GST rails — as run live by SIDBI's GST Sahay
          </span>
          <span className="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
            &lt;15 minutes
          </span>
        </div>
        <div className="h-3 w-full bg-slate-100">
          <motion.div
            data-testid="timeline-crixaa-bar"
            initial={{ width: 0 }}
            whileInView={{ width: "2.5%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="h-full min-w-[6px] bg-emerald-700"
          />
        </div>
        <p className="mt-2 font-mono text-[11px] text-ink-mute">
          Bar shown to scale: ~1,400× faster end to end.
        </p>
      </div>
    </div>
  );
}

export default function Proof() {
  return (
    <section
      id="evidence"
      data-testid="proof-section"
      className="border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="04" label="Proof this already works — at institutional scale" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The rails aren't hypothetical. The institution that funds Indian MSME
            lending already runs them.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div
              data-testid="proof-card-fit-rank"
              className="flex h-full flex-col border border-slate-200 bg-white p-6 sm:p-10"
            >
              <span className="font-mono text-6xl font-semibold tracking-tight text-ink tabular-nums lg:text-7xl">
                5×
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                Sharper risk separation inside one "medium-risk" band
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                FIT Rank — launched by TransUnion CIBIL under SIDBI's direct
                mentorship, using GST, bank statements, and ITR data with machine
                learning — achieves more than five times the risk differentiation
                within what bureau scoring treats as one uniform medium-risk segment.
              </p>
              <p className="mt-5 border-l-2 border-emerald-700 pl-4 text-sm font-medium text-ink">
                The same category of approach Crixaa is built on — already validated by
                the institution that funds Indian MSME lending.
              </p>
              <Caption
                source="TransUnion CIBIL / SIDBI · FIT Rank launch"
                href={SOURCES.fitRank}
                className="mt-6"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              data-testid="proof-card-gst-sahay"
              className="flex h-full flex-col border border-slate-200 bg-white p-6 sm:p-10"
            >
              <span className="font-mono text-6xl font-semibold tracking-tight text-emerald-700 tabular-nums lg:text-7xl">
                &lt;15 min
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                SIDBI's GST Sahay, at real volume
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                Built on the same Account Aggregator and GST rails Crixaa uses, GST
                Sahay has sanctioned{" "}
                <span className="font-mono font-medium text-ink tabular-nums">₹600 crore</span>{" "}
                in credit limits to{" "}
                <span className="font-mono font-medium text-ink tabular-nums">1,750+</span>{" "}
                customers and disbursed{" "}
                <span className="font-mono font-medium text-ink tabular-nums">₹315 crore</span>{" "}
                across{" "}
                <span className="font-mono font-medium text-ink tabular-nums">15,000+</span>{" "}
                invoices — at a median application-to-disbursal time under 15 minutes.
              </p>
              <div className="mt-6">
                <TimelineBars />
              </div>
              <Caption
                source="SIDBI · GST Sahay program"
                href={SOURCES.gstSahay}
                className="mt-6"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
