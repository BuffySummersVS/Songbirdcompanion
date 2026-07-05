import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import aprilFoolsImg from "../../../assets/easter-eggs/april-fools.png";

const DIM_DUR = 0.4;
const IMAGE_AT = 0.4;
const IMAGE_DUR = 0.6;
const PARTICLES_START = IMAGE_AT + IMAGE_DUR; // 1.0 — image is fully visible
const CELEBRATION_HOLD = 4.5;
const PARTICLES_FADE_START = PARTICLES_START + CELEBRATION_HOLD; // 5.5
const PARTICLES_FADE_DUR = 0.6;
const IMAGE_FADE_START = PARTICLES_FADE_START + PARTICLES_FADE_DUR; // 6.1
const IMAGE_FADE_DUR = 0.6;
const DIM_FADE_START = IMAGE_FADE_START + IMAGE_FADE_DUR; // 6.7
const TOTAL = DIM_FADE_START + 0.5; // 7.2

const REDUCED_TOTAL = 2.6;

const LIGHT_COLORS = ["#f472b6", "#facc15", "#4ade80", "#38bdf8"];

// Traces the screen's rectangular perimeter clockwise from the top-left,
// `inset`% in from the edge — used to ring lights/stars around the border
// instead of scattering them randomly across the screen.
function perimeterPoint(t, inset) {
  const span = 100 - inset * 2;
  const p = (t % 1) * 4;
  if (p < 1) return { top: inset, left: inset + p * span };
  if (p < 2) return { top: inset + (p - 1) * span, left: 100 - inset };
  if (p < 3) return { top: 100 - inset, left: 100 - inset - (p - 2) * span };
  return { top: 100 - inset - (p - 3) * span, left: inset };
}

const CONFETTI_COLORS = ["#f472b6", "#facc15", "#4ade80", "#38bdf8", "#fb923c"];

// Gentle continuous fall of playful confetti, staggered across the whole
// hold window so new pieces keep drifting in while earlier ones are still
// falling — varying size/opacity/speed reads as confetti at different distances.
function buildConfetti(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 13) % 100,
    size: 3 + (i % 5) * 2,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: (i / count) * (CELEBRATION_HOLD - 0.5),
    duration: 5 + (i % 6) * 0.7,
    sway: 6 + (i % 4) * 5,
  }));
}

// Small twinkling jester lights ringing the screen edge.
function buildLights(count) {
  return Array.from({ length: count }, (_, i) => {
    const { top, left } = perimeterPoint(i / count, 2.5);
    return {
      id: i,
      top,
      left,
      color: LIGHT_COLORS[i % LIGHT_COLORS.length],
      delay: (i % 9) * 0.16,
      duration: 1.4 + (i % 4) * 0.35,
    };
  });
}

// Sparkling stars ringed a little further in from the lights.
function buildStars(count) {
  return Array.from({ length: count }, (_, i) => {
    const { top, left } = perimeterPoint(i / count + 0.5 / count, 8);
    return {
      id: i,
      top,
      left,
      size: 10 + (i % 3) * 4,
      delay: (i % 7) * 0.24,
      duration: 1.8 + (i % 5) * 0.3,
    };
  });
}

export default function AprilFoolsConfetti({ reducedMotion, onDone }) {
  const confetti = useMemo(() => buildConfetti(reducedMotion ? 0 : 40), [reducedMotion]);
  const lights = useMemo(() => buildLights(reducedMotion ? 0 : 24), [reducedMotion]);
  const stars = useMemo(() => buildStars(reducedMotion ? 0 : 14), [reducedMotion]);
  const staticConfetti = useMemo(() => buildConfetti(reducedMotion ? 16 : 0), [reducedMotion]);
  const staticLights = useMemo(() => buildLights(reducedMotion ? 12 : 0), [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_TOTAL : TOTAL;
    const t = setTimeout(onDone, duration * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx afools-fx" aria-hidden="true">
        <motion.div
          className="afools-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.2, 0.75, 1] }}
        />
        <motion.div
          className="afools-fx-particle-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_TOTAL, delay: 0.5, times: [0, 0.2, 0.7, 1] }}
        >
          {staticConfetti.map(c => (
            <span
              key={`sc-${c.id}`}
              className="afools-fx-confetti"
              style={{ left: `${c.left}%`, top: `${10 + (c.id % 6) * 13}%`, width: c.size, height: c.size, background: c.color }}
            />
          ))}
          {staticLights.map(l => (
            <span
              key={`sl-${l.id}`}
              className="afools-fx-light"
              style={{ top: `${l.top}%`, left: `${l.left}%`, background: l.color, boxShadow: `0 0 6px 2px ${l.color}` }}
            />
          ))}
        </motion.div>
        <div className="afools-fx-image-wrap">
          <motion.img
            src={aprilFoolsImg}
            alt="April Fools"
            className="afools-fx-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: REDUCED_TOTAL, times: [0, 0.25, 0.8, 1], delay: 0.15 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="egg-fx afools-fx" aria-hidden="true">
      {/* ── Dim the screen first ── */}
      <motion.div
        className="afools-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0.9, 0] }}
        transition={{ duration: TOTAL, times: [0, DIM_DUR / TOTAL, DIM_FADE_START / TOTAL, 1] }}
      />

      {/* ── Confetti + lights + stars — sit behind the image, never obscure it ── */}
      <motion.div
        className="afools-fx-particle-layer"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 0] }}
        transition={{
          duration: TOTAL - PARTICLES_FADE_START,
          delay: PARTICLES_FADE_START,
          times: [0, PARTICLES_FADE_DUR / (TOTAL - PARTICLES_FADE_START), 1],
        }}
      >
        {confetti.map(c => (
          <motion.span
            key={`confetti-${c.id}`}
            className="afools-fx-confetti"
            style={{ left: `${c.left}%`, width: c.size, height: c.size, background: c.color }}
            initial={{ y: "-8vh", x: 0, rotate: 0 }}
            animate={{ y: "108vh", x: [0, c.sway, 0, -c.sway, 0], rotate: 360 }}
            transition={{
              duration: c.duration,
              delay: PARTICLES_START + c.delay,
              ease: "linear",
              x: { duration: c.duration, delay: PARTICLES_START + c.delay, ease: "easeInOut" },
              rotate: { duration: c.duration, delay: PARTICLES_START + c.delay, ease: "linear" },
            }}
          />
        ))}

        {lights.map(l => (
          <motion.span
            key={`light-${l.id}`}
            className="afools-fx-light"
            style={{ top: `${l.top}%`, left: `${l.left}%`, background: l.color, boxShadow: `0 0 7px 2px ${l.color}` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1], scale: [0.85, 1.15] }}
            transition={{ duration: l.duration, delay: PARTICLES_START + l.delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}

        {stars.map(st => (
          <motion.span
            key={`star-${st.id}`}
            className="afools-fx-star"
            style={{ top: `${st.top}%`, left: `${st.left}%`, fontSize: st.size }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 1], scale: [0.6, 1.05] }}
            transition={{ duration: st.duration, delay: PARTICLES_START + st.delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            ✦
          </motion.span>
        ))}
      </motion.div>

      {/* ── april-fools.png — always on top of the particle layer ── */}
      <div className="afools-fx-image-wrap">
        <motion.img
          src={aprilFoolsImg}
          alt="April Fools"
          className="afools-fx-image"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.92] }}
          transition={{
            duration: TOTAL - IMAGE_AT,
            delay: IMAGE_AT,
            times: [0, IMAGE_DUR / (TOTAL - IMAGE_AT), (IMAGE_FADE_START - IMAGE_AT) / (TOTAL - IMAGE_AT), 1],
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
