import { motion, useReducedMotion } from "framer-motion";
import playStoreQr from "../assets/playstore-qr.svg";

const UPDATE_MESSAGE = "🎉 Now Available on the Google Play Store! 🎉";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=songbird.app&hl=en_GB";

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
      <a
        className="updates-banner-qr"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get SongBird on Google Play"
      >
        <img src={playStoreQr} alt="QR code linking to SongBird on the Google Play Store" width="120" height="120" />
        <span>Scan or tap to download</span>
      </a>
    </div>
  );
}
