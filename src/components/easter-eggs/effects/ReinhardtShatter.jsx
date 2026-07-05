import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

function buildDissolveParticles() {
  return Array.from({ length: 18 }, (_, i) => {
    const angle = (i / 18) * Math.PI * 2;
    const dist = 26 + (i % 5) * 9;
    return {
      id: i,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      delay: (i % 6) * 0.02,
    };
  });
}

function buildEmbers(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 42 + ((i * 11) % 18),
    delay: 0.2 + (i % 6) * 0.14,
    duration: 1.6 + (i % 4) * 0.3,
    drift: ((i % 2 === 0) ? 1 : -1) * (4 + (i % 5) * 3),
  }));
}

function buildFragments(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 30 + ((i * 13) % 42),
    rise: 14 + ((i * 7) % 22),
    rotate: ((i % 2 === 0) ? 1 : -1) * (60 + (i % 5) * 40),
    delay: 0.04 * i,
    scale: 0.8 + ((i % 4) * 0.15),
  }));
}

export default function ReinhardtShatter({ reducedMotion, onDone }) {
  const rootRef = useRef(null);
  const dissolveParticles = useMemo(() => buildDissolveParticles(), []);
  const embers = useMemo(() => buildEmbers(reducedMotion ? 0 : 10), [reducedMotion]);
  const fragments = useMemo(() => buildFragments(reducedMotion ? 0 : 11), [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onDone, 2200);
      return () => clearTimeout(t);
    }
    const node = rootRef.current;
    const shakeTimer = setTimeout(() => {
      node?.classList.add("egg-shake-heavy");
      setTimeout(() => node?.classList.remove("egg-shake-heavy"), 250);
    }, 2300);
    const doneTimer = setTimeout(onDone, 5900);
    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(doneTimer);
      node?.classList.remove("egg-shake-heavy");
    };
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx rein-fx" aria-hidden="true">
        <motion.div
          className="rein-fx-barrier"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0.55, 0] }}
          transition={{ duration: 1, times: [0, 0.3, 0.7, 1] }}
        />
        <motion.svg className="rein-fx-crack" viewBox="0 0 200 140" aria-hidden="true">
          <motion.path
            d="M100 0 L92 30 L104 46 L88 70 L100 92 L84 140"
            stroke="#ff7a3d"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, delay: 1, times: [0, 0.2, 0.6, 1] }}
          />
        </motion.svg>
      </div>
    );
  }

  return (
    <div className="egg-fx rein-fx" aria-hidden="true" ref={rootRef}>
      {/* ── Phase 1+2: Barrier field & collapse ── */}
      <motion.div
        className="rein-fx-barrier"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0.18, 0.65, 0] }}
        transition={{ duration: 2.3, times: [0, 0.13, 0.68, 0.72, 0.76, 1], ease: "easeInOut" }}
      >
        <div className="rein-fx-hexgrid" />
        <motion.div
          className="rein-fx-ripple"
          initial={{ scale: 0.2, opacity: 0.7 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {dissolveParticles.map(p => (
        <motion.span
          key={p.id}
          className="rein-fx-dissolve-particle"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], x: `${p.x}vw`, y: `${p.y}vh` }}
          transition={{ duration: 0.8, delay: 1.65 + p.delay, ease: "easeOut" }}
        />
      ))}

      {/* ── Phase 3+4: Earthshatter crack & recovery ── */}
      <motion.svg
        className="rein-fx-crack"
        viewBox="0 0 200 140"
        preserveAspectRatio="xMidYMax meet"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.6, delay: 2.3, times: [0, 0.12, 0.42, 1], ease: "easeInOut" }}
      >
        <motion.path
          d="M100 0 L94 22 L108 34 L86 58 L102 76 L80 100 L96 118 L88 140"
          stroke="#2b1a10"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          d="M100 0 L94 22 L108 34 L86 58 L102 76 L80 100 L96 118 L88 140"
          stroke="#8a5a34"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="1 1"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: [1, 1, 0.3] }}
          transition={{ duration: 0.6, delay: 2.35, opacity: { duration: 3, delay: 2.6 } }}
        />
      </motion.svg>

      {fragments.map(f => (
        <motion.span
          key={f.id}
          className="rein-fx-fragment"
          style={{ left: `${f.left}%` }}
          initial={{ y: 0, opacity: 0, rotate: 0, scale: f.scale }}
          animate={{
            y: [0, `-${f.rise}vh`, `-${f.rise * 0.75}vh`, `-${f.rise * 0.5}vh`],
            opacity: [0, 1, 1, 0],
            rotate: [0, f.rotate * 0.6, f.rotate * 0.9, f.rotate],
          }}
          transition={{ duration: 2.4, delay: 2.3 + f.delay, times: [0, 0.4, 0.75, 1], ease: ["easeOut", "linear", "easeIn"] }}
        />
      ))}

      {embers.map(e => (
        <motion.span
          key={e.id}
          className="rein-fx-ember"
          style={{ left: `${e.left}%` }}
          initial={{ y: 0, opacity: 0, x: 0 }}
          animate={{ y: "-22vh", x: `${e.drift}vw`, opacity: [0, 1, 0] }}
          transition={{ duration: e.duration, delay: 2.4 + e.delay, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="rein-fx-dust"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.6, delay: 2.3 }}
      />
    </div>
  );
}
