import { Reveal, Chapter } from "./Reveal";
import { Caption, SOURCES } from "./Caption";

const PILLARS = [
  {
    title: "RBI Digital Lending Guidelines, 2022",
    body: "A regulated lender cannot outsource underwriting judgment to a technology partner. Crixaa is built to recommend — never to decide. The lender's underwriter always makes the final call.",
    source: "Reserve Bank of India",
    href: SOURCES.rbi,
    testid: "compliance-pillar-digital-lending",
  },
  {
    title: "Draft Model Risk Management Guidance, June 2026",
    body: "Now in public consultation, it brings AI/ML scoring models under formal Board-approved governance for every NBFC category. Crixaa is built for this version of the rules — not the outdated one.",
    source: "Reserve Bank of India · draft in consultation",
    href: SOURCES.rbi,
    testid: "compliance-pillar-mrm",
  },
  {
    title: "Account Aggregator + GSTN rails",
    body: "Built on the RBI-recognised, consent-based Account Aggregator framework and GSTN compliance data — the same rails the ecosystem already runs on, not a parallel or unofficial pipe.",
    source: "Sahamati · RBI-recognised SRO for the AA ecosystem",
    href: SOURCES.sahamati,
    testid: "compliance-pillar-aa",
  },
];

export default function Compliance() {
  return (
    <section
      data-testid="compliance-section"
      className="blueprint-grid-dark border-b border-[#1E293B] bg-[#09131F] py-20 text-slate-100 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Chapter index="08" label="Built inside the rules, not around them" dark />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Compliance isn't a footnote here. It's the product.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            Indian regulation already forbids a lender from handing its underwriting
            judgment to a vendor — and the governance framework being finalized right
            now demands exactly the kind of explainability Crixaa ships by default.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-[#1E293B] bg-[#1E293B] lg:grid-cols-3">
          {PILLARS.map((p) => (
            <Reveal key={p.title} delay={0.1} className="bg-[#0C1826]">
              <div data-testid={p.testid} className="flex h-full flex-col p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.body}
                </p>
                <Caption source={p.source} href={p.href} dark className="mt-6" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
