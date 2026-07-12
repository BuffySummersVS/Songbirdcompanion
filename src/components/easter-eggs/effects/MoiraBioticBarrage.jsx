import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { buildBouncePath } from "./bouncePath";
import healingOrbImg from "../../../assets/easter-eggs/healing-orb.png";
import damageOrbImg from "../../../assets/easter-eggs/damage-orb.png";

const TRAVEL_MS = 5200; // slow-to-moderate drift, not a fast bounce like Mizuki's kasa
const REDUCED_MS = 900;
const BOUNCES = 4;

// Per trigger: exactly one orb by default, alternating randomly between
// healing and damage — with a ~25% chance both appear together instead.
function pickVariant() {
  if (Math.random() < 0.25) return "both";
  return Math.random() < 0.5 ? "healing" : "damage";
}

function useOrbPath(startX, startY) {
  const [path] = useState(() =>
    buildBouncePath({ startX, startY, angleDeg: Math.random() * 360, bounces: BOUNCES })
  );
  const x = useMemo(() => path.map(p => `${p.x}vw`), [path]);
  const y = useMemo(() => path.map(p => `${p.y}vh`), [path]);
  const times = useMemo(() => path.map(p => p.t), [path]);
  return { x, y, times };
}

function Orb({ className, src, x, y, times }) {
  return (
    <motion.img
      src={src}
      alt=""
      className={className}
      initial={{ x: x[0], y: y[0], opacity: 0, scale: 0.6 }}
      animate={{
        x, y,
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1, 1, 0.8],
      }}
      transition={{
        x: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
        y: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
        opacity: { duration: TRAVEL_MS / 1000, times: [0, 0.08, 0.85, 1], ease: "linear" },
        scale: { duration: TRAVEL_MS / 1000, times: [0, 0.08, 0.85, 1], ease: "linear" },
      }}
    />
  );
}

export default function MoiraBioticBarrage({ reducedMotion, onDone }) {
  const [variant] = useState(pickVariant);
  const showHealing = variant === "healing" || variant === "both";
  const showDamage = variant === "damage" || variant === "both";

  // Different starting corners so a "both" trigger doesn't launch the two
  // orbs from the same point.
  const healingPath = useOrbPath(28, 58);
  const damagePath = useOrbPath(70, 38);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_MS : TRAVEL_MS + 200;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx moira-fx" aria-hidden="true">
        {showHealing && (
          <motion.img
            src={healingOrbImg}
            alt=""
            className="moira-fx-orb"
            style={{ left: "28vw", top: "58vh" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
          />
        )}
        {showDamage && (
          <motion.img
            src={damageOrbImg}
            alt=""
            className="moira-fx-orb"
            style={{ left: "70vw", top: "38vh" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="egg-fx moira-fx" aria-hidden="true">
      {showHealing && (
        <Orb className="moira-fx-orb" src={healingOrbImg} x={healingPath.x} y={healingPath.y} times={healingPath.times} />
      )}
      {showDamage && (
        <Orb className="moira-fx-orb" src={damageOrbImg} x={damagePath.x} y={damagePath.y} times={damagePath.times} />
      )}
    </div>
  );
}
