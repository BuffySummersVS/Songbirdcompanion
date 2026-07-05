import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// A fixed-aspect viewBox (not a bare 0-100 square) scaled with
// preserveAspectRatio="xMidYMid slice" — this scales uniformly and crops
// any excess instead of stretching, so the radial pattern renders as a
// true, undistorted, symmetric shape regardless of the viewer's actual
// window aspect ratio.
const VB_W = 160;
const VB_H = 100;
const CX = VB_W / 2;
const CY = VB_H / 2;

const SPOKE_COUNT = 14;
const RING_RADII = [13, 23, 34, 45];

const DIM_DUR = 0.5;
const HOLE_AT = 0.5;
const HOLE_ALONE = 0.4;
const CRACK_START = HOLE_AT + HOLE_ALONE; // 0.9
const CRACK_DUR = 1.1;
const WEB_DONE = CRACK_START + CRACK_DUR; // 2.0
const HOLD_DUR = 0.4;
const FADE_START = WEB_DONE + HOLD_DUR; // 2.4
const FADE_DUR = 3.0;
const TOTAL = FADE_START + FADE_DUR; // 5.4

// Long/short alternating spokes at perfectly even angles (no jitter) —
// organised and symmetrical, matching a real radial bullet-impact
// fracture rather than a random scribble. Each gets one small, identical
// (rotationally consistent) kink partway along its length for texture.
function buildSpokes() {
  return Array.from({ length: SPOKE_COUNT }, (_, i) => {
    const angle = (i / SPOKE_COUNT) * Math.PI * 2;
    const len = i % 2 === 0 ? 46 : 32;
    const kinkLen = len * 0.58;
    const kinkOffset = 1.3;
    const px = -Math.sin(angle);
    const py = Math.cos(angle);
    const x1 = (CX + Math.cos(angle) * kinkLen + px * kinkOffset).toFixed(1);
    const y1 = (CY + Math.sin(angle) * kinkLen + py * kinkOffset).toFixed(1);
    const x2 = (CX + Math.cos(angle) * len).toFixed(1);
    const y2 = (CY + Math.sin(angle) * len).toFixed(1);
    return { id: i, d: `M${CX},${CY} L${x1},${y1} L${x2},${y2}`, delay: (i % 4) * 0.05 };
  });
}

// A small jagged (chipped-glass) rim instead of a perfect circle.
function buildHoleRim() {
  const notches = 12;
  const outerR = 2.6;
  const innerR = 2.1;
  const pts = Array.from({ length: notches * 2 }, (_, i) => {
    const angle = (i / (notches * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? outerR : innerR;
    return `${(CX + Math.cos(angle) * r).toFixed(2)},${(CY + Math.sin(angle) * r).toFixed(2)}`;
  });
  return `M${pts.join(" L")} Z`;
}

export default function WidowmakerShatter({ reducedMotion, onDone }) {
  const spokes = useMemo(() => buildSpokes(), []);
  const holeRim = useMemo(() => buildHoleRim(), []);

  useEffect(() => {
    const duration = reducedMotion ? 2.6 : TOTAL;
    const t = setTimeout(onDone, duration * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx widow-fx" aria-hidden="true">
        <motion.div
          className="widow-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.92, 0.92, 0] }}
          transition={{ duration: 2.6, times: [0, 0.25, 0.7, 1] }}
        />
        <motion.div
          className="widow-fx-hole-glow"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: 2.6, times: [0, 0.2, 0.75, 1], delay: 0.15 }}
        />
        <svg className="widow-fx-crack" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, times: [0, 0.25, 0.75, 1], delay: 0.3 }}
          >
            {spokes.map(s => <path key={s.id} d={s.d} className="widow-fx-crack-line" />)}
            {RING_RADII.map(r => <circle key={r} cx={CX} cy={CY} r={r} className="widow-fx-crack-ring" />)}
            <path d={holeRim} className="widow-fx-hole-rim" />
          </motion.g>
        </svg>
      </div>
    );
  }

  return (
    <div className="egg-fx widow-fx" aria-hidden="true">
      {/* ── Screen dims to near-black before the shot lands ── */}
      <motion.div
        className="widow-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.93, 0.93, 0] }}
        transition={{ duration: TOTAL, times: [0, DIM_DUR / TOTAL, FADE_START / TOTAL, 1] }}
      />

      {/* ── The bullet hole appears first, alone, and stays the focal point ── */}
      <motion.div
        className="widow-fx-hole-glow"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1.15, 1, 1] }}
        transition={{
          duration: TOTAL - HOLE_AT,
          delay: HOLE_AT,
          times: [0, 0.18, (FADE_START - HOLE_AT) / (TOTAL - HOLE_AT), 1],
        }}
      />

      <svg className="widow-fx-crack" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice">
        <motion.path
          d={holeRim}
          className="widow-fx-hole-rim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: TOTAL - HOLE_AT,
            delay: HOLE_AT,
            times: [0, 0.15, (FADE_START - HOLE_AT) / (TOTAL - HOLE_AT), 1],
          }}
        />

        {/* ── Cracks fracture outward from the hole, radial + concentric ── */}
        {spokes.map(s => (
          <motion.path
            key={s.id}
            d={s.d}
            className="widow-fx-crack-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              pathLength: { duration: CRACK_DUR * 0.55, delay: CRACK_START + s.delay, ease: "easeOut" },
              opacity: {
                duration: TOTAL - CRACK_START,
                delay: CRACK_START,
                times: [0, 0.08, (FADE_START - CRACK_START) / (TOTAL - CRACK_START), 1],
              },
            }}
          />
        ))}

        {RING_RADII.map((r, i) => (
          <motion.circle
            key={r}
            cx={CX} cy={CY} r={r}
            className="widow-fx-crack-ring"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              pathLength: { duration: CRACK_DUR * 0.5, delay: CRACK_START + 0.15 + i * 0.13, ease: "easeOut" },
              opacity: {
                duration: TOTAL - CRACK_START,
                delay: CRACK_START,
                times: [0, 0.15 + i * 0.05, (FADE_START - CRACK_START) / (TOTAL - CRACK_START), 1],
              },
            }}
          />
        ))}
      </svg>

      {/* ── Glow intensifies as the web finishes forming ── */}
      <motion.span
        className="widow-fx-glow-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 0.6, delay: WEB_DONE - 0.1, times: [0, 0.3, 0.6, 1] }}
      />
    </div>
  );
}
