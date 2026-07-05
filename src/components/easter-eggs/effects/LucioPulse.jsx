import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const BEAT = 0.22;
const PULSE_COUNT = 7;
const RING_DURATION = 0.9;
const TOTAL = BEAT * (PULSE_COUNT - 1) + RING_DURATION + 0.15;
const REDUCED_TOTAL = 0.9;

// Green (heal) / yellow (speed boost) — alternates every beat, matching Lúcio's kit.
const COLORS = ["#50e6c8", "#ffdd59"];

function buildPulses(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * BEAT,
    color: COLORS[i % 2],
  }));
}

export default function LucioPulse({ reducedMotion, onDone }) {
  const pulses = useMemo(() => buildPulses(reducedMotion ? 0 : PULSE_COUNT), [reducedMotion]);

  useEffect(() => {
    const t = setTimeout(onDone, (reducedMotion ? REDUCED_TOTAL : TOTAL) * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx lucio-fx" aria-hidden="true">
        <motion.div
          className="lucio-fx-flash"
          style={{ background: `radial-gradient(circle, ${COLORS[0]}, transparent 70%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{ duration: REDUCED_TOTAL * 0.5 }}
        />
        <motion.div
          className="lucio-fx-flash"
          style={{ background: `radial-gradient(circle, ${COLORS[1]}, transparent 70%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{ duration: REDUCED_TOTAL * 0.5, delay: REDUCED_TOTAL * 0.45 }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx lucio-fx" aria-hidden="true">
      {/* ── Full-screen colour flash, alternating green/yellow each beat ── */}
      {pulses.map(p => (
        <motion.div
          key={`flash-${p.id}`}
          className="lucio-fx-flash"
          style={{ background: `radial-gradient(circle, ${p.color}, transparent 68%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0] }}
          transition={{ duration: RING_DURATION * 0.6, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      {/* ── Expanding sound-wave rings, scaled up to sweep the whole screen ── */}
      {pulses.map(p => (
        <motion.span
          key={`ring-${p.id}`}
          className="lucio-fx-ring"
          style={{ borderColor: p.color, boxShadow: `0 0 40px ${p.color}` }}
          initial={{ scale: 0.15, opacity: 0.8 }}
          animate={{ scale: 14, opacity: 0 }}
          transition={{ duration: RING_DURATION, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
