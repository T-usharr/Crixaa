import {
  FileSearch,
  ListChecks,
  UserCheck,
  Database,
  Target,
  Scale,
} from "lucide-react";
import { Reveal, Chapter } from "./Reveal";

const ITEMS = [
  {
    icon: FileSearch,
    text: "Built for borrowers with no file — not repurposed from a model trained on borrowers who already had one.",
  },
  {
    icon: ListChecks,
    text: "Every recommendation ships with reason codes your Model Risk Committee can actually read.",
  },
  {
    icon: UserCheck,
    text: "Recommends, never auto-approves. The underwriter always makes the final call.",
  },
  {
    icon: Database,
    text: "Works with data already collected — Account Aggregator, GST, and a bureau pull where one exists.",
  },
  {
    icon: Target,
    text: "Calibrated against real new-to-credit cohort outcomes — never borrowed from existing-borrower scoring.",
  },
  {
    icon: Scale,
    text: "Built for the governance rules already being finalized, not adjusted after the fact.",
  },
];

export default function WhyCrixaa() {
  return (
    <section
      data-testid="why-crixaa-section"
      className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="10" label="Why Crixaa" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Six commitments, kept in the product.
          </h2>
        </Reveal>

        <div
          data-testid="differentiator-grid"
          className="mt-14 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ITEMS.map((item, i) => (
            <Reveal key={item.text} delay={0.06 + i * 0.06} className="bg-white">
              <div className="group flex h-full gap-4 p-6 transition-colors duration-300 hover:bg-emerald-50/40">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
