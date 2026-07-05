import { motion, useReducedMotion } from "framer-motion";

const UPDATE_MESSAGE = "🎉 Coming on July 10th: App goes live for Android on Google Play Store! 🎉";

export default function UpdatesBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="updates-banner">
      <div className="updates-banner-ticker-wrap">
        {prefersReducedMotion ? (
          <p className="updates-banner-ticker-static">{UPDATE_MESSAGE}</p>
        ) : (
          <motion.div
            className="updates-banner-ticker"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
            aria-hidden="true"
          >
            <span className="updates-banner-ticker-item">{UPDATE_MESSAGE}</span>
            <span className="updates-banner-ticker-item">{UPDATE_MESSAGE}</span>
          </motion.div>
        )}
        <span className="sr-only">{UPDATE_MESSAGE}</span>
      </div>
    </div>
  );
}
