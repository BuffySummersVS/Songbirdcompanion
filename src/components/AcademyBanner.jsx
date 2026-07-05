import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TICKER_ITEMS = [
  "🎓 Level up your game knowledge",
  "📚 Guided lessons across 6 learning paths",
  "🏆 Earn badges and certificates",
  "📈 Track XP, streaks, and daily goals",
  "🦸 Master every hero, one course at a time",
];

export default function AcademyBanner({ onOpenAcademy }) {
  const prefersReducedMotion = useReducedMotion();
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let timeoutId;
    let sparkleTimeoutId;

    function scheduleSparkle() {
      const delay = 3000 + Math.random() * 4000;
      timeoutId = setTimeout(() => {
        setShowSparkle(true);
        sparkleTimeoutId = setTimeout(() => setShowSparkle(false), 800);
        scheduleSparkle();
      }, delay);
    }

    scheduleSparkle();
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(sparkleTimeoutId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="academy-banner">
      <div className="academy-banner-content">
        <div className="academy-banner-badge-wrap">
          <span className="academy-banner-badge" aria-hidden="true">🎓</span>
          <AnimatePresence>
            {showSparkle && (
              <motion.span
                className="academy-banner-sparkle"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                ✨
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="academy-banner-ticker-wrap">
          {prefersReducedMotion ? (
            <p className="academy-banner-ticker-static">
              {TICKER_ITEMS.join("   •   ")}
            </p>
          ) : (
            <motion.div
              className="academy-banner-ticker"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span className="academy-banner-ticker-item" key={i}>{item}</span>
              ))}
            </motion.div>
          )}
          <span className="sr-only">{TICKER_ITEMS.join(". ")}</span>
        </div>

        <button type="button" className="academy-banner-cta" onClick={onOpenAcademy}>
          Open Academy →
        </button>
      </div>
    </div>
  );
}
