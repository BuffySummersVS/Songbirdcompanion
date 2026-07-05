import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DvaUlt({ reducedMotion, onDone }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!reducedMotion) {
      const node = rootRef.current;
      node?.classList.add("egg-shake-soft");
      const clear = setTimeout(() => node?.classList.remove("egg-shake-soft"), 400);
      const done = setTimeout(onDone, 750);
      return () => { clearTimeout(clear); clearTimeout(done); node?.classList.remove("egg-shake-soft"); };
    }
    const t = setTimeout(onDone, 550);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  return (
    <div className="egg-fx dva-fx" aria-hidden="true" ref={rootRef}>
      <motion.div
        className="dva-fx-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: reducedMotion ? 0.55 : 0.75, times: [0, 0.3, 1] }}
      />
      {!reducedMotion && (
        <>
          <motion.div
            className="dva-fx-flash"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: [0, 1, 0], scale: [0.3, 1.1, 1.3] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="dva-fx-bloom"
            initial={{ scale: 0.3, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
          <motion.div
            className="dva-fx-shock"
            initial={{ scale: 0.15, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          />
        </>
      )}
    </div>
  );
}
