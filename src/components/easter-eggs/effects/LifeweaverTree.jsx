import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import treeImg from "../../../assets/easter-eggs/tree-of-life.png";

// Petals burst outward from the canopy in a full radial spread, travelling
// far enough to clear the tree's own silhouette into open space (where
// they actually read against the background) rather than staying lost
// inside the busy canopy texture.
function buildPetals(count) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (i % 3) * 0.2;
    const dist = 140 + (i % 5) * 55;
    return {
      id: i,
      originX: -70 + (i % 9) * 18,
      driftX: Math.cos(angle) * dist,
      driftYDown: 40 + Math.sin(angle) * dist * 0.4 + (i % 4) * 14,
      rotate: (i % 2 === 0 ? 1 : -1) * (140 + (i % 6) * 40),
      delay: (i % 9) * 0.02,
      size: 16 + (i % 4) * 6,
    };
  });
}

const GROW_AT = 0.2;
const GROW_END = 1.6;
const FADE_START = 3.0;
const PETAL_BURST_AT = FADE_START - 0.4; // 2.6 — bursts just before the fade
const PETAL_PEAK_AT = PETAL_BURST_AT + 0.25; // 2.85 — fully visible, partway out
const PETAL_HOLD_UNTIL = PETAL_BURST_AT + 0.6; // 3.2 — still fully visible, further out
const TOTAL = 4.0;

const REDUCED_MS = 1000;

export default function LifeweaverTree({ reducedMotion, onDone }) {
  const petals = useMemo(() => buildPetals(reducedMotion ? 0 : 18), [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_MS : TOTAL * 1000;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx lw-fx" aria-hidden="true">
        <motion.div
          className="lw-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
        <motion.img
          src={treeImg}
          alt=""
          className="lw-fx-tree-img"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.3, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx lw-fx" aria-hidden="true">
      <motion.div
        className="lw-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.65, 0.65, 0] }}
        transition={{ duration: TOTAL, times: [0, GROW_AT / TOTAL, FADE_START / TOTAL, 1] }}
      />

      {/* Grows up from the ground via a bottom-up clip reveal, holds, then
          fades — the petal burst (below) plays over the last stretch. */}
      <motion.img
        src={treeImg}
        alt=""
        className="lw-fx-tree-img"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 0.92, opacity: 0 }}
        animate={{
          clipPath: ["inset(100% 0% 0% 0%)", "inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
          scale: [0.92, 0.92, 1, 1, 0.96],
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: TOTAL,
          times: [0, GROW_AT / TOTAL, GROW_END / TOTAL, FADE_START / TOTAL, 1],
          ease: "easeOut",
        }}
      />

      <div className="lw-fx-petal-origin">
        {petals.map(p => (
          <motion.span
            key={p.id}
            className="lw-fx-petal"
            style={{ left: p.originX, width: p.size, height: p.size * 0.75, marginLeft: -p.size / 2 }}
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              x: [0, 0, p.driftX * 0.6, p.driftX, p.driftX * 1.15],
              y: [0, 0, p.driftYDown * 0.6, p.driftYDown, p.driftYDown * 1.3],
              rotate: [0, 0, p.rotate * 0.6, p.rotate, p.rotate * 1.1],
            }}
            transition={{
              duration: TOTAL,
              delay: p.delay,
              times: [0, PETAL_BURST_AT / TOTAL, PETAL_PEAK_AT / TOTAL, PETAL_HOLD_UNTIL / TOTAL, 1],
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
