import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const FROST_IN = 0.4;
const HOLD = 3.2;
const FROST_OUT_DUR = 0.6;
const FROST_OUT_AT = FROST_IN + HOLD; // 3.6
const TOTAL = FROST_OUT_AT + FROST_OUT_DUR + 0.2; // ~4.4

const REDUCED_MS = 900;

// Straight vertical fall (no side-to-side sway, per spec) — staggered start
// delays across the whole hold window so flakes keep appearing throughout
// rather than all falling in one wave.
function buildSnowflakes(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 8.7) % 100,
    size: 4 + (i % 5) * 2,
    opacity: 0.5 + (i % 4) * 0.15,
    delay: (i / count) * (HOLD - 0.4),
    duration: 2.8 + (i % 6) * 0.55,
  }));
}

export default function MeiSnowballSurprise({ reducedMotion, onDone }) {
  const snowflakes = useMemo(() => buildSnowflakes(reducedMotion ? 14 : 30), [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_MS : TOTAL * 1000;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx mei-fx" aria-hidden="true">
        <motion.div
          className="mei-fx-frost"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
        {snowflakes.map(s => (
          <span
            key={s.id}
            className="mei-fx-snowflake"
            style={{ left: `${s.left}%`, top: `${10 + (s.id % 6) * 13}%`, width: s.size, height: s.size, opacity: s.opacity }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="egg-fx mei-fx" aria-hidden="true">
      <motion.div
        className="mei-fx-frost"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, FROST_IN / TOTAL, FROST_OUT_AT / TOTAL, 1] }}
      />

      <motion.div
        className="mei-fx-snow-layer"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, FROST_OUT_AT / TOTAL, 1] }}
      >
        {snowflakes.map(s => (
          <motion.span
            key={s.id}
            className="mei-fx-snowflake"
            style={{ left: `${s.left}%`, width: s.size, height: s.size, opacity: s.opacity }}
            initial={{ y: "-8vh" }}
            animate={{ y: "108vh" }}
            transition={{ duration: s.duration, delay: s.delay, ease: "linear" }}
          />
        ))}
      </motion.div>
    </div>
  );
}
