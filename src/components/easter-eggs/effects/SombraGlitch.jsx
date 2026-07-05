import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const FADE_IN = 0.6;
const HOLD = 3.2;
const FADE_OUT = 0.5;
const TOTAL = FADE_IN + HOLD + FADE_OUT;
const REDUCED_TOTAL = 1.8;

const GLITCH_COLORS = ["#e9b8ff", "#c084fc", "#a855f7", "#7dd3fc"];

function buildBands(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: 6 + i * (88 / count),
    delay: (i % 5) * 0.14,
    duration: 0.4 + (i % 3) * 0.15,
    repeatDelay: 0.3 + (i % 3) * 0.15,
  }));
}

// Small flickering RGB-split blocks scattered across the screen — read as
// data-glitch artifacts, distinct from the horizontal scan bands.
function buildGlitchParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 17) % 92,
    top: (i * 29) % 90,
    width: 24 + (i % 5) * 14,
    height: 3 + (i % 3) * 3,
    color: GLITCH_COLORS[i % GLITCH_COLORS.length],
    delay: (i % 7) * 0.18,
    duration: 0.16 + (i % 4) * 0.08,
    repeatDelay: 0.25 + (i % 4) * 0.1,
  }));
}

export default function SombraGlitch({ reducedMotion, onDone }) {
  const bands = useMemo(() => buildBands(reducedMotion ? 0 : 7), [reducedMotion]);
  const particles = useMemo(() => buildGlitchParticles(reducedMotion ? 0 : 16), [reducedMotion]);

  useEffect(() => {
    const t = setTimeout(onDone, (reducedMotion ? REDUCED_TOTAL : TOTAL) * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx sombra-fx" aria-hidden="true">
        <motion.div
          className="sombra-fx-tint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.3, 0.75, 1] }}
        />
        <motion.span
          className="sombra-fx-ping"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.4, 1.8] }}
          transition={{ duration: REDUCED_TOTAL * 0.6, delay: REDUCED_TOTAL * 0.15 }}
        />
      </div>
    );
  }

  const holdStart = FADE_IN;
  const holdEnd = FADE_IN + HOLD;

  return (
    <div className="egg-fx sombra-fx" aria-hidden="true">
      {/* ── Purple tint fades in slowly, holds through the glitch window ── */}
      <motion.div
        className="sombra-fx-tint"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: TOTAL, times: [0, FADE_IN / TOTAL, holdEnd / TOTAL, 1], ease: "easeInOut" }}
      />

      {bands.map(b => (
        <motion.span
          key={`band-${b.id}`}
          className="sombra-fx-band"
          style={{ top: `${b.top}%` }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, -18, 12, -6, 0], opacity: [0, 0.85, 0.85, 0.85, 0] }}
          transition={{ duration: b.duration, delay: holdStart + b.delay, repeat: Infinity, repeatDelay: b.repeatDelay }}
        />
      ))}

      {particles.map(p => (
        <motion.span
          key={`glitch-${p.id}`}
          className="sombra-fx-glitch"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.width, height: p.height, background: p.color, boxShadow: `0 0 8px ${p.color}` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0], x: [0, (p.id % 2 ? 6 : -6), 0] }}
          transition={{ duration: p.duration, delay: holdStart + p.delay, repeat: Infinity, repeatDelay: p.repeatDelay }}
        />
      ))}

      <motion.span
        className="sombra-fx-ping"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 1, 0.3, 1, 0], scale: [0.4, 1.4, 1.4, 1.6, 1.8] }}
        transition={{ duration: HOLD, delay: holdStart, times: [0, 0.15, 0.5, 0.85, 1] }}
      />
    </div>
  );
}
