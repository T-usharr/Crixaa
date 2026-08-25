import { Zap, Landmark, Building2 } from "lucide-react";
import { Reveal, Chapter } from "./Reveal";

const PERSONAS = [
  {
    icon: Zap,
    title: "Agile NBFC-BL lenders",
    body: "Already piloting alternative-data lending at small ticket sizes — the first to feel both the opportunity and the risk, directly.",
    testid: "persona-card-nbfc-bl",
  },
  {
    icon: Landmark,
    title: "Small Finance Banks",
    body: "Carrying a financial-inclusion mandate into this exact population — with more compliance maturity and less tolerance for anything unexplainable.",
    testid: "persona-card-sfb",
  },
  {
    icon: Building2,
    title: "Larger NBFC-ML / UL lenders",
    body: "Wanting a validated new-to-credit layer without building one in-house.",
    testid: "persona-card-nbfc-ul",
  },
];

export default function Personas() {
  return (
    <section
      data-testid="personas-section"
      className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="03" label="Who this is built for" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Three kinds of lenders. One missing layer.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <div
                data-testid={p.testid}
                className="group h-full border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/40 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.25)] sm:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <p.icon className="h-5 w-5 text-ink transition-colors duration-300 group-hover:text-emerald-700" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
