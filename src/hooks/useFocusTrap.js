import { useLayoutEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(active = true) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    const trigger = document.activeElement;

    function getFocusable() {
      return container ? Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)) : [];
    }

    if (!container?.contains(document.activeElement)) {
      const focusable = getFocusable();
      // preventScroll matters here: focusing an element (often a close button
      // sitting near the right edge of the panel's content) otherwise makes
      // the browser scroll that element into view. On Android WebView this
      // horizontal scroll-into-view isn't blocked by the panel's own
      // overflow-x:hidden, so the panel gets stuck scrolled to its max
      // scrollLeft on the very first paint — the actual cause of modals
      // rendering with their content shifted/clipped on open.
      (focusable[0] || container)?.focus({ preventScroll: true });
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

    // Plain `overflow:hidden` doesn't reliably pin the page on mobile WebKit —
    // if the page was scrolled, position:fixed overlays can render offset from
    // the visual viewport until a later reflow corrects it (e.g. a nested modal
    // opening on top looks centered while the first one didn't). Locking body
    // to position:fixed at the current scroll offset avoids that.
    const scrollY = window.scrollY;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPosition = body.style.position;
    const prevTop = body.style.top;
    const prevWidth = body.style.width;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = prevOverflow;
      body.style.position = prevPosition;
      body.style.top = prevTop;
      body.style.width = prevWidth;
      window.scrollTo(0, scrollY);
      trigger?.focus?.();
    };
  }, [active]);

  return containerRef;
}
