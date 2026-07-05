import { useEffect } from "react";
import { motion } from "framer-motion";

const TOTAL = 1.4;
const REDUCED_TOTAL = 0.6;

export default function GenjiSlash({ reducedMotion, onDone }) {
  useEffect(() => {
    const duration = reducedMotion ? REDUCED_TOTAL : TOTAL;
    const t = setTimeout(onDone, duration * 1000);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx genji-fx" aria-hidden="true">
        <motion.div
          className="genji-fx-vignette"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.2, 0.75, 1] }}
        />
        <motion.div
          className="genji-fx-cross"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: REDUCED_TOTAL, times: [0, 0.25, 0.8, 1] }}
        >
          <span className="genji-fx-cross-bar genji-fx-cross-bar--v" />
          <span className="genji-fx-cross-bar genji-fx-cross-bar--h" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="egg-fx genji-fx egg-shake-slight" aria-hidden="true">
      {/* ── Red outline around the whole screen — held start to finish ── */}
      <motion.div
        className="genji-fx-vignette"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, 0.15, 0.85, 1] }}
      />

      {/* ── Large red cross, fades/scales in and back out ── */}
      <motion.div
        className="genji-fx-cross"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.05, 1, 0.9] }}
        transition={{ duration: TOTAL, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
      >
        <span className="genji-fx-cross-bar genji-fx-cross-bar--v" />
        <span className="genji-fx-cross-bar genji-fx-cross-bar--h" />
      </motion.div>
    </div>
  );
}
