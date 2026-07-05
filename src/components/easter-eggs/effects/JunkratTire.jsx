import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import tireImg from "../../../assets/easter-eggs/junrat-Riptire.png";

const TRAVEL_MS = 3300;

const X_KEYFRAMES = ["-15vw", "5vw", "25vw", "45vw", "65vw", "82vw", "95vw", "112vw"];
const Y_KEYFRAMES = ["0vh", "-2vh", "0vh", "-2.6vh", "0vh", "-1.4vh", "-9vh", "0vh"];
const ROT_KEYFRAMES = [0, 130, 340, 560, 780, 980, 1120, 1220];
const TIMES = [0, 0.14, 0.3, 0.46, 0.62, 0.78, 0.9, 1];

function buildDust(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: 0.15 + i * 0.32,
    left: -10 + i * 15,
  }));
}

function buildSparks(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: 0.4 + i * 0.55,
    left: -8 + i * 20,
  }));
}

function buildBlastParticles(count, kind) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      id: `${kind}-${i}`,
      x: Math.cos(angle) * (kind === "ember" ? 9 : 5),
      y: Math.sin(angle) * (kind === "ember" ? 9 : 5) - (kind === "smoke" ? 6 : 0),
      delay: (i % 4) * 0.03,
    };
  });
}

export default function JunkratTire({ reducedMotion, onDone }) {
  const [exploding, setExploding] = useState(false);
  const dust = useMemo(() => buildDust(5), []);
  const sparks = useMemo(() => buildSparks(3), []);
  const embers = useMemo(() => buildBlastParticles(8, "ember"), []);
  const smoke = useMemo(() => buildBlastParticles(4, "smoke"), []);

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
    const blastTimer = setTimeout(() => setExploding(true), TRAVEL_MS);
    const doneTimer = setTimeout(onDone, TRAVEL_MS + 1300);
    return () => { clearTimeout(blastTimer); clearTimeout(doneTimer); };
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx junk-fx" aria-hidden="true">
        <motion.img
          src={tireImg}
          alt=""
          className="junk-fx-tire junk-fx-tire-static"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.9, times: [0, 0.25, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx junk-fx" aria-hidden="true">
      <motion.img
        src={tireImg}
        alt=""
        className="junk-fx-tire"
        initial={{ x: X_KEYFRAMES[0], y: Y_KEYFRAMES[0], rotate: 0, opacity: 0 }}
        animate={{
          x: X_KEYFRAMES,
          y: Y_KEYFRAMES,
          rotate: ROT_KEYFRAMES,
          opacity: [0, 1, 1, 1, 1, 1, 1, 0],
        }}
        transition={{ duration: TRAVEL_MS / 1000, times: TIMES, ease: "linear" }}
      />

      {dust.map(d => (
        <motion.span
          key={d.id}
          className="junk-fx-dust"
          style={{ left: `calc(${d.left}vw)` }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.4, 1.3, 1.6] }}
          transition={{ duration: 0.8, delay: d.delay }}
        />
      ))}

      {sparks.map(s => (
        <motion.span
          key={s.id}
          className="junk-fx-spark"
          style={{ left: `calc(${s.left}vw)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.25, delay: s.delay }}
        />
      ))}

      {exploding && (
        <div className="junk-fx-blast" style={{ left: "94vw" }}>
          <motion.span
            className="junk-fx-blast-core"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {smoke.map(p => (
            <motion.span
              key={p.id}
              className="junk-fx-smoke"
              initial={{ x: 0, y: 0, opacity: 0.6, scale: 0.5 }}
              animate={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0, scale: 1.8 }}
              transition={{ duration: 1.1, delay: p.delay, ease: "easeOut" }}
            />
          ))}
          {embers.map(p => (
            <motion.span
              key={p.id}
              className="junk-fx-ember"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: `${p.x}vw`, y: `${p.y + 4}vh`, opacity: 0 }}
              transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
