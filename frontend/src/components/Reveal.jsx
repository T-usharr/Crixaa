import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Chapter = ({ index, label, dark = false }) => (
  <div
    className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase ${
      dark ? "text-slate-400" : "text-ink-mute"
    }`}
  >
    <span className={dark ? "text-emerald-400" : "text-emerald-700"}>{index}</span>
    <span className={`h-px w-10 ${dark ? "bg-slate-700" : "bg-slate-300"}`} />
    <span>{label}</span>
  </div>
);
