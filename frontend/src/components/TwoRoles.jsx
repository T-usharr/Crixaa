import { PenLine, ClipboardCheck, Check } from "lucide-react";
import { Reveal, Chapter } from "./Reveal";

const ROLES = [
  {
    icon: PenLine,
    title: "For the Head of Underwriting",
    points: [
      "A decision they can act on today — with reason codes in plain language",
      "Works with the data their team already pulls; nothing new to collect",
      "They always decide, and can override — the system never auto-approves",
    ],
    testid: "role-console-underwriter",
  },
  {
    icon: ClipboardCheck,
    title: "For Model Risk / Compliance",
    points: [
      "An audit trail built to satisfy RBI's non-delegation rule before it's asked for",
      "Designed around the incoming Model Risk Management Guidance — not retrofitted later",
      "Every override and outcome recorded against the cohort it was scored against",
    ],
    testid: "role-console-compliance",
  },
];

export default function TwoRoles() {
  return (
    <section
      data-testid="two-roles-section"
      className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="07" label="One recommendation, two readers" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What two different people inside the same lender each get.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={0.1 + i * 0.12}>
              <div
                data-testid={r.testid}
                className="flex h-full flex-col border border-slate-200 bg-white"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4 sm:px-8">
                  <r.icon className="h-5 w-5 text-emerald-700" />
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {r.title}
                  </h3>
                </div>
                <ul className="flex-1 space-y-4 px-6 py-6 sm:px-8 sm:py-8">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      <span className="text-sm leading-relaxed text-ink-soft">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
