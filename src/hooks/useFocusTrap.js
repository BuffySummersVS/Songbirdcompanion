import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(active = true) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    const trigger = document.activeElement;

    function getFocusable() {
      return container ? Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)) : [];
    }

    if (!container?.contains(document.activeElement)) {
      const focusable = getFocusable();
      (focusable[0] || container)?.focus();
    }

    function onKeyDown(e) {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) { e.preventDefault(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      trigger?.focus?.();
    };
  }, [active]);

  return containerRef;
}
