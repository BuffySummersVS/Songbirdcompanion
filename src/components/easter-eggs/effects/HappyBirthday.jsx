import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import birthdayImg from "../../../assets/easter-eggs/happy-birthday.png";

const DIM_DUR = 0.4;
const IMAGE_AT = 0.4;
const IMAGE_DUR = 0.6;
const CONFETTI_START = IMAGE_AT + IMAGE_DUR; // 1.0
const CELEBRATION_HOLD = 4.5;
const CONFETTI_FADE_START = CONFETTI_START + CELEBRATION_HOLD; // 5.5
const CONFETTI_FADE_DUR = 0.6;
const IMAGE_FADE_START = CONFETTI_FADE_START + CONFETTI_FADE_DUR; // 6.1
const IMAGE_FADE_DUR = 0.6;
const DIM_FADE_START = IMAGE_FADE_START + IMAGE_FADE_DUR; // 6.7
const TOTAL = DIM_FADE_START + 0.5; // 7.2

const REDUCED_TOTAL = 2.6;

const CONFETTI_COLORS = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#ff9ff3", "#54a0ff", "#f368e0", "#00d2d3", "#ffa502"];

// Continuous rain from the top, staggered across the whole celebration
// window so new pieces keep appearing while earlier ones are still falling.
function buildRain(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 27) % 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 7 + (i % 4) * 3,
    delay: (i / count) * (CELEBRATION_HOLD - 0.6),
    duration: 2.6 + (i % 5) * 0.35,
    rotate: (i % 2 === 0 ? 1 : -1) * (220 + (i % 4) * 90),
    drift: ((i % 7) - 3) * 6,
    circle: i % 3 === 0,
  }));
}

// A single rapid-fire burst from a screen edge — fast outward/upward
// "explosion" toward centre, then gravity takes over and the pieces fall.
function buildCannon(count, side) {
  const sign = side === "left" ? 1 : -1;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[(i * 3) % CONFETTI_COLORS.length],
    size: 7 + (i % 4) * 3,
    delay: (i % 8) * 0.02,
    burstX: sign * (26 + (i % 5) * 7),
    burstY: -16 - (i % 6) * 7,
    fallX: sign * (8 + (i % 4) * 7),
    fallY: 65 + (i % 5) * 18,
    rotate: (i % 2 === 0 ? 1 : -1) * (360 + (i % 3) * 200),
    circle: i % 3 === 1,
  }));
}

export default function HappyBirthday({ reducedMotion, onDone }) {
  const rain = useMemo(() => buildRain(reducedMotion ? 0 : 34), [reducedMotion]);
  const cannonLeft = useMemo(() => buildCannon(reducedMotion ? 0 : 22, "left"), [reducedMotion]);
  const cannonRight = useMemo(() => buildCannon(reducedMotion ? 0 : 22, "right"), [reducedMotion]);
  const staticConfetti = useMemo(() => buildRain(reducedMotion ? 14 : 0), [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_TOTAL : TOTAL;
    const t = setTimeout(onDone, duration * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx bday-fx" aria-hidden="true">
        <motion.div
          className="bday-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.2, 0.75, 1] }}
        />
        <motion.div
          className="bday-fx-confetti-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_TOTAL, delay: 0.5, times: [0, 0.2, 0.7, 1] }}
        >
          {staticConfetti.map(p => (
            <span
              key={p.id}
              className={`bday-fx-confetti${p.circle ? " bday-fx-confetti-circle" : ""}`}
              style={{ left: `${p.left}%`, top: `${20 + (p.id % 5) * 12}%`, width: p.size, height: p.size, background: p.color }}
            />
          ))}
        </motion.div>
        <div className="bday-fx-image-wrap">
          <motion.img
            src={birthdayImg}
            alt="Happy Birthday"
            className="bday-fx-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: REDUCED_TOTAL, times: [0, 0.25, 0.8, 1], delay: 0.15 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="egg-fx bday-fx" aria-hidden="true">
      {/* ── Dim the screen first ── */}
      <motion.div
        className="bday-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0.9, 0] }}
        transition={{ duration: TOTAL, times: [0, DIM_DUR / TOTAL, DIM_FADE_START / TOTAL, 1] }}
      />

      {/* ── Confetti layer — sits behind the image ── */}
      <motion.div
        className="bday-fx-confetti-layer"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 0] }}
        transition={{
          duration: TOTAL - CONFETTI_FADE_START,
          delay: CONFETTI_FADE_START,
          times: [0, CONFETTI_FADE_DUR / (TOTAL - CONFETTI_FADE_START), 1],
        }}
      >
        {rain.map(p => (
          <motion.span
            key={`rain-${p.id}`}
            className={`bday-fx-confetti${p.circle ? " bday-fx-confetti-circle" : ""}`}
            style={{ left: `${p.left}%`, width: p.size, height: p.size, background: p.color }}
            initial={{ y: "-8vh", x: 0, opacity: 0, rotate: 0 }}
            animate={{ y: "108vh", x: `${p.drift}vw`, opacity: [0, 1, 1, 0], rotate: p.rotate }}
            transition={{ duration: p.duration, delay: CONFETTI_START + p.delay, ease: "linear" }}
          />
        ))}

        {cannonLeft.map(p => (
          <motion.span
            key={`cl-${p.id}`}
            className={`bday-fx-confetti${p.circle ? " bday-fx-confetti-circle" : ""}`}
            style={{ left: 0, top: "50%", width: p.size, height: p.size, background: p.color }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: [0, `${p.burstX}vw`, `${p.burstX + p.fallX}vw`],
              y: [0, `${p.burstY}vh`, `${p.burstY + p.fallY}vh`],
              opacity: [1, 1, 0],
              rotate: p.rotate,
            }}
            transition={{ duration: 3, delay: CONFETTI_START + p.delay, times: [0, 0.16, 1], ease: ["easeOut", "easeIn"] }}
          />
        ))}

        {cannonRight.map(p => (
          <motion.span
            key={`cr-${p.id}`}
            className={`bday-fx-confetti${p.circle ? " bday-fx-confetti-circle" : ""}`}
            style={{ right: 0, top: "50%", width: p.size, height: p.size, background: p.color }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: [0, `${p.burstX}vw`, `${p.burstX + p.fallX}vw`],
              y: [0, `${p.burstY}vh`, `${p.burstY + p.fallY}vh`],
              opacity: [1, 1, 0],
              rotate: p.rotate,
            }}
            transition={{ duration: 3, delay: CONFETTI_START + p.delay, times: [0, 0.16, 1], ease: ["easeOut", "easeIn"] }}
          />
        ))}
      </motion.div>

      {/* ── Happy Birthday image — always on top of the confetti ── */}
      <div className="bday-fx-image-wrap">
        <motion.img
          src={birthdayImg}
          alt="Happy Birthday"
          className="bday-fx-image"
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
