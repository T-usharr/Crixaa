import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, FileSearch, ListChecks } from "lucide-react";
import { EASE } from "./Reveal";
import { scrollTo } from "./Nav";

const HEADLINE = [
  "The underwriting layer",
  "for MSME borrowers",
  "your bureau can't see yet.",
];

const TABS = [
  { id: "overview", label: "Overview", icon: FileSearch },
  { id: "signals", label: "Reason codes", icon: ListChecks },
  { id: "audit", label: "Audit trail", icon: ShieldCheck },
];

const REASON_CODES = [
  { code: "RC-104", text: "14-month unbroken GSTR-3B filing record" },
  { code: "RC-208", text: "AA cash-flow stability coefficient > 0.78" },
  { code: "RC-302", text: "Promoter personal bureau score 768" },
];

const AUDIT_LINES = [
  ["recommendation_id", "crx-8942-ND"],
  ["model_version", "ntc-cohort v0.9.3"],
  ["cohort_ref", "tier2-retail-msme / 92p"],
  ["decision_authority", "lender underwriter (unchanged)"],
  ["override_path", "logged with rationale, auto"],
];

function Specimen() {
  const [tab, setTab] = useState("overview");

  return (
    <div
      data-testid="hero-specimen-card"
      className="w-full max-w-md border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
          Crixaa recommendation — specimen
        </span>
        <span className="border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-700">
          Illustrative
        </span>
      </div>

      <div className="flex border-b border-slate-200">
        {TABS.map((t) => (
          <button
            key={t.id}
            data-testid={`hero-specimen-tab-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-2.5 text-xs font-medium transition-colors duration-200 ${
              tab === t.id
                ? "border-b-2 border-emerald-700 text-ink"
                : "text-ink-mute hover:text-ink"
            }`}
          >
            <t.icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[240px] px-5 py-4">
        {tab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="space-y-3"
          >
            {[
              ["Applicant", "#8942-ND (name redacted)"],
              ["Requested", "₹5,00,000 (₹5 lakh)"],
              ["Bureau history", "None on file — new to credit"],
              ["Cohort confidence", "92nd percentile · Tier-2 retail MSME"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4">
                <span className="text-xs text-ink-mute">{k}</span>
                <span className="text-right font-mono text-xs font-medium text-ink tabular-nums">
                  {v}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 border-t border-dashed border-slate-200 pt-3">
              <span className="text-xs text-ink-mute">Recommendation</span>
              <span className="bg-emerald-50 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200">
                Approve, with conditions
              </span>
            </div>
          </motion.div>
        )}

        {tab === "signals" && (
          <motion.div
            key="signals"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="space-y-2.5"
          >
            {REASON_CODES.map((r) => (
              <div
                key={r.code}
                className="flex items-start gap-3 border border-slate-100 bg-slate-50 px-3 py-2.5"
              >
                <span className="shrink-0 font-mono text-[11px] font-semibold text-emerald-700">
                  {r.code}
                </span>
                <span className="text-xs leading-relaxed text-ink-soft">{r.text}</span>
              </div>
            ))}
            <p className="pt-1 text-[11px] leading-relaxed text-ink-mute">
              Every recommendation ships with reason codes a Model Risk Committee can
              read — and audit.
            </p>
          </motion.div>
        )}

        {tab === "audit" && (
          <motion.div
            key="audit"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="space-y-2 font-mono text-[11px]"
          >
            {AUDIT_LINES.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4">
                <span className="text-ink-mute">{k}</span>
                <span className="text-right text-ink">{v}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-5 py-3">
        <p className="font-mono text-[10px] leading-relaxed tracking-wide text-ink-mute">
          This recommendation does not decide the loan. Your underwriter does.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const specimenY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const specimenRotate = useTransform(scrollYProgress, [0, 1], [0, -2.5]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="blueprint-grid relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute -right-24 top-16 hidden h-[480px] w-[480px] border border-slate-200/70 lg:block"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFBFD] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-block border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-800"
            data-testid="hero-overline"
          >
            Underwriting infrastructure · ₹2L–10L new-to-credit MSME
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.2 + i * 0.13, ease: EASE }}
                >
                  {i === 2 ? (
                    <>
                      your bureau{" "}
                      <span className="text-emerald-700">can't see yet.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
            data-testid="hero-subhead"
          >
            Crixaa turns GST, cash-flow, and Account Aggregator data into an
            explainable underwriting recommendation for ₹2L–10L new-to-credit MSME
            loans — built for NBFC and Small Finance Bank credit teams, and for the
            model governance rules already arriving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="mt-9"
          >
            <button
              data-testid="hero-cta-start-conversation"
              onClick={() => scrollTo("#contact")}
              className="group relative overflow-hidden bg-emerald-700 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a conversation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-emerald-800 transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="flex items-start justify-start lg:justify-end"
        >
          <motion.div style={{ y: specimenY, rotate: specimenRotate }} className="w-full max-w-md">
            <Specimen />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
