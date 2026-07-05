import { useEffect } from "react";
import { motion } from "framer-motion";
import lavaImg from "../../../assets/easter-eggs/molten-lava.png";

export default function TorbjornLava({ reducedMotion, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, reducedMotion ? 2400 : 4200);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  return (
    <div className="egg-fx torb-fx" aria-hidden="true">
      <motion.div
        className="torb-fx-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={
          reducedMotion
            ? { duration: 2.4, times: [0, 0.25, 0.75, 1] }
            : { duration: 4.2, times: [0, 0.35, 0.75, 1] }
        }
      />
      <div className="torb-fx-wrap">
        <motion.img
          src={lavaImg}
          alt=""
          className="torb-fx-lava"
          initial={reducedMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
          animate={
            reducedMotion
              ? { opacity: [0, 1, 1, 0] }
              : { y: ["-100%", "0%", "0%", "0%"], opacity: [0, 1, 1, 0] }
          }
          transition={
            reducedMotion
              ? { duration: 2.4, times: [0, 0.2, 0.75, 1] }
              : { duration: 4.2, times: [0, 0.3, 0.75, 1], ease: ["easeOut", "linear", "easeIn"] }
          }
        />
      </div>
    </div>
  );
}
