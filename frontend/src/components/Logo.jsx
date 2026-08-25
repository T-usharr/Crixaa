import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const LogoMark = ({ dark = false, className = "h-7 w-7", animated = false }) => {
  const bars = [
    { x: 4, y: 6, width: 40, fill: dark ? "#F8FAFC" : "#0F172A" },
    { x: 12, y: 17, width: 24, fill: dark ? "#CBD5E1" : "#475569" },
    { x: 19, y: 28, width: 10, fill: dark ? "#64748B" : "#94A3B8" },
  ];
  const checkStroke = dark ? "#34D399" : "#047857";

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
      data-testid="logo-mark"
    >
      {bars.map((b, i) =>
        animated ? (
          <motion.rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.width}
            height="5"
            fill={b.fill}
            initial={{ opacity: 0, y: -9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.16, duration: 0.55, ease: EASE }}
          />
        ) : (
          <rect key={i} x={b.x} y={b.y} width={b.width} height="5" fill={b.fill} />
        )
      )}
      {animated ? (
        <motion.path
          d="M19 39 L24.5 44.5 L35 33"
          stroke={checkStroke}
          strokeWidth="4.5"
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5, ease: "easeOut" }}
        />
      ) : (
        <path
          d="M19 39 L24.5 44.5 L35 33"
          stroke={checkStroke}
          strokeWidth="4.5"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
};

export default function Logo({ dark = false, animated = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark dark={dark} animated={animated} />
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Crixaa
      </span>
    </span>
  );
}
