import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import kasaImg from "../../../assets/easter-eggs/Kasa.png";
import { buildBouncePath } from "./bouncePath";

const TRAVEL_MS = 2600;
const REDUCED_MS = 900;

export default function MizukiKasa({ reducedMotion, onDone }) {
  const [path] = useState(() =>
    buildBouncePath({ startX: 50, startY: 42, angleDeg: Math.random() * 360, bounces: 8 })
  );
  const xKeyframes = useMemo(() => path.map(p => `${p.x}vw`), [path]);
  const yKeyframes = useMemo(() => path.map(p => `${p.y}vh`), [path]);
  const times = useMemo(() => path.map(p => p.t), [path]);
  const rotateKeyframes = useMemo(() => path.map((_, i) => i * 220), [path]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_MS : TRAVEL_MS + 200;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx mzk-fx" aria-hidden="true">
        <motion.div
          className="mzk-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
        <motion.img
          src={kasaImg}
          alt=""
          className="mzk-fx-kasa"
          style={{ left: "42vw", top: "42vh" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx mzk-fx" aria-hidden="true">
      <motion.div
        className="mzk-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: (TRAVEL_MS + 200) / 1000, times: [0, 0.1, 0.82, 1] }}
      />

      <motion.img
        src={kasaImg}
        alt=""
        className="mzk-fx-kasa"
        initial={{ x: xKeyframes[0], y: yKeyframes[0], rotate: 0, opacity: 0, scale: 0.7 }}
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          rotate: rotateKeyframes,
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1, 1, 0.85],
        }}
        transition={{
          x: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
          y: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
          rotate: { duration: TRAVEL_MS / 1000, ease: "linear" },
          opacity: { duration: TRAVEL_MS / 1000, times: [0, 0.06, 0.8, 1], ease: "linear" },
          scale: { duration: TRAVEL_MS / 1000, times: [0, 0.06, 0.8, 1], ease: "linear" },
        }}
      />
    </div>
  );
}
