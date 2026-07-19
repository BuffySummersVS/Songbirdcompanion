import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import logo from "../assets/logo.png";
import { hideSplashScreen } from "../nativeSetup.js";

// Total time this overlay stays fully opaque once mounted, plus the fade.
// Kept well under the 2s end-to-end budget to leave headroom for whatever
// the device already spent getting the WebView to first paint. The "hold it
// longer" effect lives entirely here now — the native splash itself is
// dismissed as early as possible (see the rAF below) because Android 12+'s
// SplashScreenView always plays its own built-in exit animation (a quick
// icon zoom-and-fade) that Capacitor's fadeOutDuration option can't
// suppress or slow down. Delaying that dismissal just moved the zoom glitch
// into the middle of the show instead of hiding it; firing it immediately
// keeps it brief and blended into the very first frame, before this
// overlay's own glow/star animation is what the user actually registers.
const VISIBLE_MS = 1250;
const FADE_MS = 300;

export default function SplashOverlay() {
  // visible -> fading -> gone; skipped entirely on web, where there's no
  // native splash to hand off from.
  const [phase, setPhase] = useState(() => (Capacitor.isNativePlatform() ? "visible" : "gone"));

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    // Double rAF guarantees this overlay has actually painted (matching the
    // native splash's own dark background) before the native splash is
    // dismissed, so there's no gap where anything else could show through.
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(hideSplashScreen);
    });
    const startFade = setTimeout(() => setPhase("fading"), VISIBLE_MS);
    const finish = setTimeout(() => setPhase("gone"), VISIBLE_MS + FADE_MS);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(startFade);
      clearTimeout(finish);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`splash-overlay${phase === "fading" ? " sb-splash-fade" : ""}`}>
      <div className="splash-glow" aria-hidden="true" />
      <div className="splash-logo-wrap">
        <img src={logo} alt="" className="splash-logo" />
      </div>
    </div>
  );
}
