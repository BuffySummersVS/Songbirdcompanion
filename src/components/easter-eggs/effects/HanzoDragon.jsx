import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import dragonImg from "../../../assets/easter-eggs/hanzo-dragon.png";

// All keyframes need to share one unit so Framer Motion can tween them
// numerically — mixing a calc()/min() string in with plain "vw" values
// across a keyframe array isn't reliably interpolable, so the starting
// (right-edge-flush) position is computed in px here to match the
// dragon's actual rendered width (min(68vw, 880px) in CSS).
function buildXKeyframes() {
  const vw = typeof window !== "undefined" ? window.innerWidth : 1920;
  const dragonWidth = Math.min(vw * 0.68, 880);
  const startX = vw - dragonWidth;
  return [`${startX}px`, `${vw * 0.7}px`, `${vw * 0.2}px`, `${vw * -0.5}px`];
}

export default function HanzoDragon({ reducedMotion, onDone }) {
  const xKeyframes = useMemo(() => buildXKeyframes(), []);

  useEffect(() => {
    const t = setTimeout(onDone, reducedMotion ? 900 : 2000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  return (
    <div className="egg-fx hanzo-fx" aria-hidden="true">
      <motion.div
        className="hanzo-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.4, 0] }}
        transition={{ duration: reducedMotion ? 0.9 : 2, times: [0, 0.15, 0.8, 1], ease: "easeInOut" }}
      />
      {reducedMotion ? (
        <motion.img
          src={dragonImg}
          alt=""
          className="hanzo-fx-dragon hanzo-fx-dragon-static"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.95] }}
          transition={{ duration: 0.9, times: [0, 0.2, 0.75, 1] }}
        />
      ) : (
        <motion.img
          src={dragonImg}
          alt=""
          className="hanzo-fx-dragon"
          style={{ transformOrigin: "right center" }}
          initial={{ opacity: 0 }}
          animate={{
            x: xKeyframes,
            y: ["18vh", "6vh", "-2vh", "12vh"],
            opacity: [0, 1, 1, 0],
            scale: [0.9, 1.05, 1, 0.85],
            scaleX: [1.3, 1.65, 1.55, 1.3],
          }}
          transition={{ duration: 2, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
