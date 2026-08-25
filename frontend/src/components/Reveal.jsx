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

export const Chapter = ({ label, dark = false }) => (
  <div
    className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase ${
      dark ? "text-slate-400" : "text-ink-mute"
    }`}
  >
    <span className={`h-1.5 w-1.5 rotate-45 ${dark ? "bg-emerald-400" : "bg-emerald-700"}`} />
    <span>{label}</span>
  </div>
);
