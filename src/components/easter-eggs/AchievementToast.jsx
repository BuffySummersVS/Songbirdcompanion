import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TrophyGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M7 4h10v3.2c0 3.1-1.9 5.6-4.6 6.5v2.3h2.4a1 1 0 0 1 0 2H9.2a1 1 0 0 1 0-2h2.4v-2.3C8.9 12.8 7 10.3 7 7.2V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M7 5.4H4.6C4.3 8 5.7 9.8 7.6 10.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M17 5.4h2.4c.3 2.6-1.1 4.4-3 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8.4 20h7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function Toast({ hero, name, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="egg-toast"
      layout
      initial={{ opacity: 0, y: -24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      <span className="egg-toast-glow" aria-hidden="true" />
      <span className="egg-toast-icon"><TrophyGlyph /></span>
      <span className="egg-toast-body">
        <span className="egg-toast-eyebrow">Easter Egg Discovered</span>
        <span className="egg-toast-name">{name}</span>
        <span className="egg-toast-hero">{hero}</span>
      </span>
    </motion.div>
  );
}

export default function AchievementToastStack({ toasts, onDismiss }) {
  return (
    <div className="egg-toast-stack" aria-live="polite">
      <AnimatePresence>
        {toasts.map(t => (
          <Toast key={t.key} hero={t.hero} name={t.name} onDone={() => onDismiss(t.key)} />
        ))}
      </AnimatePresence>
    </div>
  );
}
