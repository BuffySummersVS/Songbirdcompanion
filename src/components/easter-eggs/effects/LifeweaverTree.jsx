import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// Canopy blossom clusters — a fixed layout (not random) so the tree reads
// as a deliberate shape rather than a scatter of dots. x/y are px offsets
// from the trunk's base (x: left/right of centre, y: height above ground).
const BLOOMS = [
  { id: 0,  x: -34, y: 58, size: 46, delay: 0.05 },
  { id: 1,  x: -14, y: 74, size: 52, delay: 0.10 },
  { id: 2,  x: 10,  y: 78, size: 50, delay: 0.14 },
  { id: 3,  x: 32,  y: 66, size: 44, delay: 0.08 },
  { id: 4,  x: -44, y: 40, size: 38, delay: 0.16 },
  { id: 5,  x: -20, y: 50, size: 48, delay: 0.02 },
  { id: 6,  x: 4,   y: 54, size: 54, delay: 0.12 },
  { id: 7,  x: 26,  y: 46, size: 42, delay: 0.06 },
  { id: 8,  x: 42,  y: 34, size: 36, delay: 0.18 },
  { id: 9,  x: -30, y: 22, size: 34, delay: 0.20 },
  { id: 10, x: 14,  y: 30, size: 40, delay: 0.10 },
  { id: 11, x: 36,  y: 18, size: 32, delay: 0.22 },
];

// Petals scatter outward from a bloom and drift down, each on its own arc.
function buildPetals(count) {
  return Array.from({ length: count }, (_, i) => {
    const origin = BLOOMS[i % BLOOMS.length];
    const angle = (i / count) * Math.PI * 2 + (i % 3) * 0.2;
    const dist = 30 + (i % 5) * 16;
    return {
      id: i,
      originX: origin.x,
      originY: origin.y,
      driftX: Math.cos(angle) * dist,
      driftYDown: 40 + (i % 6) * 18, // translateY px, positive = falls down the screen
      rotate: (i % 2 === 0 ? 1 : -1) * (120 + (i % 6) * 45),
      delay: (i % 11) * 0.045,
      size: 8 + (i % 4) * 3,
    };
  });
}

const GROW_AT = 0.3;
const GROW_DUR = 1.1;
const HOLD = 2;
const SCATTER_START = GROW_AT + GROW_DUR + HOLD; // 3.4
const SCATTER_DUR = 1.1;
const FADE_START = SCATTER_START + 0.5;
const TOTAL = SCATTER_START + SCATTER_DUR + 0.4; // ~4.9

const REDUCED_TOTAL = 2.2;

export default function LifeweaverTree({ reducedMotion, onDone }) {
  const petals = useMemo(() => buildPetals(reducedMotion ? 0 : 14), [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_TOTAL : TOTAL;
    const t = setTimeout(onDone, duration * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx lw-fx" aria-hidden="true">
        <motion.div
          className="lw-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.25, 0.75, 1] }}
        />
        <div className="lw-fx-tree">
          <motion.span
            className="lw-fx-glow"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.8, 0.8, 0], scale: 1 }}
            transition={{ duration: REDUCED_TOTAL, times: [0, 0.3, 0.75, 1] }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="egg-fx lw-fx" aria-hidden="true">
      {/* Dim the screen first */}
      <motion.div
        className="lw-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.72, 0.72, 0] }}
        transition={{ duration: TOTAL, times: [0, GROW_AT / TOTAL, FADE_START / TOTAL, 1] }}
      />

      <div className="lw-fx-tree">
        {/* Ambient pale-pink glow behind the canopy */}
        <motion.span
          className="lw-fx-glow"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.85, 0.85, 0], scale: [0.4, 1, 1, 1.1] }}
          transition={{
            duration: TOTAL - GROW_AT,
            delay: GROW_AT,
            times: [0, GROW_DUR / (TOTAL - GROW_AT), (SCATTER_START - GROW_AT) / (TOTAL - GROW_AT), 1],
          }}
        />

        {/* Trunk + branches grow up from the ground */}
        <motion.svg className="lw-fx-trunk" viewBox="0 0 40 90" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <motion.path
            d="M20 90 C18 70 22 60 19 46 C17 36 22 28 20 18"
            stroke="#6b4a52"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: GROW_DUR, delay: GROW_AT, ease: "easeOut" }}
          />
          <motion.path
            d="M20 46 C10 42 4 34 6 26"
            stroke="#6b4a52"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: GROW_DUR * 0.7, delay: GROW_AT + GROW_DUR * 0.3, ease: "easeOut" }}
          />
          <motion.path
            d="M20 40 C30 36 35 28 33 20"
            stroke="#6b4a52"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: GROW_DUR * 0.7, delay: GROW_AT + GROW_DUR * 0.35, ease: "easeOut" }}
          />
        </motion.svg>

        {/* Canopy blooms into pale pink blossom clusters, then dissolves */}
        {BLOOMS.map(b => (
          <motion.span
            key={b.id}
            className="lw-fx-bloom"
            style={{ left: b.x, bottom: b.y, width: b.size, height: b.size, marginLeft: -b.size / 2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.08, 1, 0.7] }}
            transition={{
              duration: TOTAL - GROW_AT,
              delay: GROW_AT + GROW_DUR * 0.5 + b.delay,
              times: [0, 0.25, (SCATTER_START - GROW_AT) / (TOTAL - GROW_AT), 1],
              ease: "easeOut",
            }}
          />
        ))}

        {/* Petals scatter outward and fall away */}
        {petals.map(p => (
          <motion.span
            key={p.id}
            className="lw-fx-petal"
            style={{ left: p.originX, bottom: p.originY, width: p.size, height: p.size * 0.75, marginLeft: -p.size / 2 }}
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0, 1, 0],
              x: [0, 0, p.driftX],
              y: [0, 0, p.driftYDown],
              rotate: [0, 0, p.rotate],
            }}
            transition={{
              duration: TOTAL - GROW_AT,
              delay: GROW_AT + p.delay,
              times: [0, (SCATTER_START - GROW_AT) / (TOTAL - GROW_AT), 1, 1],
              ease: "easeIn",
            }}
          />
        ))}
      </div>
    </div>
  );
}
