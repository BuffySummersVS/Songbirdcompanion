import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const CLOSE_DUR = 0.7;
const HOLD_DUR = 4;
const OPEN_DUR = 0.7;
const TOTAL = CLOSE_DUR + HOLD_DUR + OPEN_DUR;
const CLOSE_T = CLOSE_DUR / TOTAL;
const OPEN_T = (CLOSE_DUR + HOLD_DUR) / TOTAL;

const REDUCED_CLOSE = 0.3;
const REDUCED_HOLD = 4;
const REDUCED_OPEN = 0.3;
const REDUCED_TOTAL = REDUCED_CLOSE + REDUCED_HOLD + REDUCED_OPEN;

function buildZs(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 20 + ((i * 17) % 60),
    size: 46 + ((i * 13) % 40),
    delay: CLOSE_DUR + i * 0.55,
    duration: 2.6 + (i % 3) * 0.2,
    wave: 5 + (i % 3) * 4,
    spin: (i % 2 === 0 ? 1 : -1) * (6 + (i % 3) * 4),
  }));
}

export default function AnaSleepDart({ reducedMotion, onDone }) {
  const zs = useMemo(() => buildZs(reducedMotion ? 3 : 5), [reducedMotion]);

  useEffect(() => {
    const t = setTimeout(onDone, (reducedMotion ? REDUCED_TOTAL : TOTAL) * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    const closeT = REDUCED_CLOSE / REDUCED_TOTAL;
    const openT = (REDUCED_CLOSE + REDUCED_HOLD) / REDUCED_TOTAL;
    return (
      <div className="egg-fx ana-fx" aria-hidden="true">
        <motion.div
          className="ana-fx-fade"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, closeT, openT, 1] }}
        />
        {zs.map(z => (
          <motion.span
            key={z.id}
            className="ana-fx-z"
            style={{ left: `${z.left}%`, fontSize: `${z.size}px` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 1.8, delay: REDUCED_CLOSE + (z.id * 0.4), times: [0, 0.3, 0.7, 1] }}
          >
            Z
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className="egg-fx ana-fx" aria-hidden="true">
      <motion.div
        className="ana-fx-lid ana-fx-lid-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, CLOSE_T, OPEN_T, 1], ease: "easeInOut" }}
      />
      <motion.div
        className="ana-fx-lid ana-fx-lid-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, CLOSE_T, OPEN_T, 1], ease: "easeInOut" }}
      />
      <motion.div
        className="ana-fx-seam"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 0] }}
        transition={{ duration: TOTAL, times: [0, CLOSE_T * 0.9, CLOSE_T, 1] }}
      />

      {zs.map(z => (
        <motion.span
          key={z.id}
          className="ana-fx-z"
          style={{ left: `${z.left}%`, fontSize: `${z.size}px` }}
          initial={{ y: "12vh", x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ["12vh", "-20vh", "-55vh", "-90vh"],
            x: [0, z.wave, -z.wave, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, z.spin, -z.spin, 0],
          }}
          transition={{ duration: z.duration, delay: z.delay, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
        >
          Z
        </motion.span>
      ))}
    </div>
  );
}
