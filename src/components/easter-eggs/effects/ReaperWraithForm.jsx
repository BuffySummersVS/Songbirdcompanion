import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

const DISTORT_DUR = 0.5;
const SMOKE_IN_AT = 0.2;
const SMOKE_IN_DUR = 1.0;
const HOLD = 0.6;
const SMOKE_OUT_AT = SMOKE_IN_AT + SMOKE_IN_DUR + HOLD; // 1.8
const SMOKE_OUT_DUR = 0.8;
const TOTAL = SMOKE_OUT_AT + SMOKE_OUT_DUR + 0.2; // ~2.8

const REDUCED_MS = 800;

// Fixed anchor points covering both corners and edge midpoints, so full
// screen coverage (including corners) doesn't depend on a pseudo-random
// distribution happening to land everywhere — it's guaranteed by design.
// Sized in vmax (not vw) so blobs stay proportionally huge relative to the
// screen's longer edge regardless of portrait/landscape aspect ratio.
const ANCHORS = [
  { left: 16, top: 18 },
  { left: 84, top: 16 },
  { left: 15, top: 85 },
  { left: 85, top: 84 },
  { left: 50, top: 50 },
  { left: 50, top: 14 },
  { left: 50, top: 88 },
  { left: 14, top: 50 },
  { left: 86, top: 50 },
];

function buildSmokeBlobs() {
  return ANCHORS.map((anchor, i) => ({
    id: i,
    left: anchor.left,
    top: anchor.top,
    size: 80 + (i % 5) * 12,
    delay: (i % 6) * 0.06,
    rotateAmount: (i % 2 === 0 ? 1 : -1) * (50 + (i % 4) * 22),
    driftX: ((i % 3) - 1) * 4,
    driftY: (((i + 1) % 3) - 1) * 4,
  }));
}

export default function ReaperWraithForm({ reducedMotion, onDone }) {
  const rootRef = useRef(null);
  const blobs = useMemo(() => (reducedMotion ? [] : buildSmokeBlobs()), [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onDone, REDUCED_MS);
      return () => clearTimeout(t);
    }
    const node = rootRef.current;
    node?.classList.add("reaper-fx-distort");
    const clear = setTimeout(() => node?.classList.remove("reaper-fx-distort"), DISTORT_DUR * 1000);
    const done = setTimeout(onDone, TOTAL * 1000);
    return () => {
      clearTimeout(clear);
      clearTimeout(done);
      node?.classList.remove("reaper-fx-distort");
    };
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx reaper-fx" aria-hidden="true">
        <motion.div
          className="reaper-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0.85, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx reaper-fx" aria-hidden="true" ref={rootRef}>
      <motion.div
        className="reaper-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.55, 0.55, 0] }}
        transition={{ duration: TOTAL, times: [0, DISTORT_DUR / TOTAL, SMOKE_OUT_AT / TOTAL, 1] }}
      />

      {/* Two quick red flashes over the distortion window only — kept to
          just 2 pulses (well under the 3-flashes-per-second guideline) so
          it reads as a power-surge flicker without being a strobe hazard. */}
      <motion.div
        className="reaper-fx-flicker"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.05, 0.32, 0] }}
        transition={{ duration: DISTORT_DUR, times: [0, 0.28, 0.5, 0.74, 1], ease: "linear" }}
      />

      {blobs.map(b => {
        const duration = TOTAL - SMOKE_IN_AT - b.delay;
        const times = [
          0,
          SMOKE_IN_DUR / duration,
          (SMOKE_OUT_AT - SMOKE_IN_AT - b.delay) / duration,
          1,
        ];
        return (
          <motion.div
            key={b.id}
            className="reaper-fx-smoke"
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: `${b.size}vmax`,
              height: `${b.size}vmax`,
              marginLeft: `-${b.size / 2}vmax`,
              marginTop: `-${b.size / 2}vmax`,
            }}
            initial={{ scale: 0, opacity: 0, rotate: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 1.08, 1.2],
              opacity: [0, 0.7, 0.65, 0],
              rotate: [0, b.rotateAmount * 0.4, b.rotateAmount, b.rotateAmount * 1.15],
              x: [0, `${b.driftX * 0.5}vw`, `${b.driftX}vw`, `${b.driftX * 1.3}vw`],
              y: [0, `${b.driftY * 0.5}vw`, `${b.driftY}vw`, `${b.driftY * 1.3}vw`],
            }}
            transition={{ duration, delay: SMOKE_IN_AT + b.delay, times, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
