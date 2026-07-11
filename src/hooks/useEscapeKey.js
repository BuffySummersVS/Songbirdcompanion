import { useEffect, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

export function useEscapeKey(onEscape, active = true) {
  const callbackRef = useRef(onEscape);

  useEffect(() => {
    callbackRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return;
    function onKey(e) {
      if (e.key === "Escape") callbackRef.current(e);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // Mirrors the Escape-key behavior above for the Android hardware/gesture
  // back button — Capacitor registers no default back handling of its own,
  // so without this, back exits the app instead of closing whatever modal
  // is open. Reuses the same callback so nested-modal guards (e.g. "don't
  // close me while my child modal is open") already written per-component
  // work identically for both dismiss paths.
  useEffect(() => {
    if (!active || !Capacitor.isNativePlatform()) return;
    let handle;
    let cancelled = false;
    App.addListener("backButton", () => callbackRef.current()).then((h) => {
      if (cancelled) h.remove();
      else handle = h;
    });
    return () => {
      cancelled = true;
      handle?.remove();
    };
  }, [active]);
}
