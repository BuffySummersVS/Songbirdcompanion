import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MercyGlow({ reducedMotion, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, reducedMotion ? 900 : 2400);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  return (
    <div className="egg-fx mercy-glow-fx" aria-hidden="true">
      <motion.div
        className="mercy-glow-fx-wash"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: reducedMotion ? 0.9 : 2.4, times: [0, 0.3, 0.7, 1] }}
      />
      {!reducedMotion && (
        <motion.div
          className="mercy-glow-fx-rays"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 2.4, times: [0, 0.35, 0.75, 1] }}
        />
      )}
    </div>
  );
}
