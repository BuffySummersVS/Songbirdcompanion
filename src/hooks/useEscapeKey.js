import { useEffect, useRef } from "react";

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
}
