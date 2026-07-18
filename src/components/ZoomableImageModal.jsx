import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useFocusTrap } from "../hooks/useFocusTrap";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_TAP_MS = 300;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// Keeps the pan offset from ever leaving the image fully outside the
// viewport — at MIN_SCALE this always collapses back to (0,0).
function clampOffset(offset, scale, rect) {
  const maxX = Math.max(0, rect.width * (scale - 1));
  const maxY = Math.max(0, rect.height * (scale - 1));
  return {
    x: clamp(offset.x, -maxX, 0),
    y: clamp(offset.y, -maxY, 0),
  };
}

function touchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function touchMidpoint(touches, rect) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2 - rect.left,
    y: (touches[0].clientY + touches[1].clientY) / 2 - rect.top,
  };
}

export default function ZoomableImageModal({ src, alt, title, onClose }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();
  const viewportRef = useRef(null);

  const [scale, setScale] = useState(MIN_SCALE);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // The touch listeners below are attached once (mount-only effect, so a
  // mid-gesture touchmove never tears down and reattaches). That means
  // their closures would otherwise only ever see scale/offset from the
  // very first render — these refs are kept in sync on every render so
  // the listeners can read the truly-current value instead.
  const scaleRef = useRef(scale);
  const offsetRef = useRef(offset);
  useLayoutEffect(() => {
    scaleRef.current = scale;
    offsetRef.current = offset;
  });

  const gesture = useRef({ mode: null });
  const lastTap = useRef(0);

  function reset() {
    setScale(MIN_SCALE);
    setOffset({ x: 0, y: 0 });
  }

  // Deliberately not a nested setScale(prev => { ...; setOffset(...); return ... })
  // — that's an impure updater (a state setter called as a side effect from
  // inside another setter's updater), which is exactly what React Strict
  // Mode's dev-only double-invocation of updater functions is designed to
  // catch: the setOffset side effect fired twice while setScale's own
  // (pure, deduplicated) return value didn't, so the image visibly zoomed
  // off-center. Reading the current values via the refs (already needed for
  // the touch handlers below, for the same "attached once, closure would
  // otherwise be stale" reason) and calling both setters once, independently,
  // avoids the whole class of bug.
  function zoomAt(cx, cy, factor, rect) {
    const prevScale = scaleRef.current;
    const prevOffset = offsetRef.current;
    const newScale = clamp(prevScale * factor, MIN_SCALE, MAX_SCALE);
    const ratio = newScale / prevScale;
    setScale(newScale);
    setOffset(clampOffset(
      { x: cx - (cx - prevOffset.x) * ratio, y: cy - (cy - prevOffset.y) * ratio },
      newScale,
      rect,
    ));
  }

  // Wheel and touchmove need a real (non-passive) DOM listener, not React's
  // synthetic onWheel/onTouchMove props, or preventDefault() here silently
  // no-ops and the page/browser's own scroll or pinch-zoom fights this.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    function handleWheel(e) {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      // Anchored at the viewport's center rather than the cursor — simpler
      // and more predictable for a plain scroll-to-zoom than cursor-anchored
      // zoom (which only reads right if the cursor happens to already be
      // centered when the scroll starts).
      zoomAt(rect.width / 2, rect.height / 2, e.deltaY < 0 ? 1.15 : 1 / 1.15, rect);
    }

    function handleTouchStart(e) {
      const rect = el.getBoundingClientRect();
      if (e.touches.length === 2) {
        gesture.current = {
          mode: "pinch",
          startDist: touchDistance(e.touches),
          startScale: scaleRef.current,
          startOffset: offsetRef.current,
          startMid: touchMidpoint(e.touches, rect),
        };
      } else if (e.touches.length === 1 && scaleRef.current > MIN_SCALE) {
        gesture.current = {
          mode: "pan",
          startTouch: { x: e.touches[0].clientX, y: e.touches[0].clientY },
          startOffset: offsetRef.current,
        };
      } else {
        gesture.current = { mode: null };
      }
    }

    function handleTouchMove(e) {
      const g = gesture.current;
      if (!g.mode) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();

      if (g.mode === "pinch" && e.touches.length === 2) {
        const ratio = clamp(touchDistance(e.touches) / g.startDist, MIN_SCALE / MAX_SCALE, MAX_SCALE / MIN_SCALE);
        const newScale = clamp(g.startScale * ratio, MIN_SCALE, MAX_SCALE);
        const actualRatio = newScale / g.startScale;
        setScale(newScale);
        setOffset(clampOffset(
          {
            x: g.startMid.x - (g.startMid.x - g.startOffset.x) * actualRatio,
            y: g.startMid.y - (g.startMid.y - g.startOffset.y) * actualRatio,
          },
          newScale,
          rect,
        ));
      } else if (g.mode === "pan" && e.touches.length === 1) {
        const dx = e.touches[0].clientX - g.startTouch.x;
        const dy = e.touches[0].clientY - g.startTouch.y;
        setOffset(clampOffset(
          { x: g.startOffset.x + dx, y: g.startOffset.y + dy },
          scaleRef.current,
          rect,
        ));
      }
    }

    function handleTouchEnd(e) {
      if (e.touches.length === 1 && scaleRef.current > MIN_SCALE) {
        gesture.current = {
          mode: "pan",
          startTouch: { x: e.touches[0].clientX, y: e.touches[0].clientY },
          startOffset: offsetRef.current,
        };
      } else {
        gesture.current = { mode: null };
      }

      if (e.touches.length === 0) {
        const now = Date.now();
        if (now - lastTap.current < DOUBLE_TAP_MS) {
          reset();
          lastTap.current = 0;
        } else {
          lastTap.current = now;
        }
      }
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
    // Mount-once and intentionally so — reattaching on every pan/zoom tick
    // would tear down mid-gesture. scale/offset are read via the refs above.
  }, []);

  const mouseDrag = useRef({ dragging: false });

  function handleMouseDown(e) {
    if (scale <= MIN_SCALE) return;
    mouseDrag.current = { dragging: true, start: { x: e.clientX, y: e.clientY }, startOffset: offset };
  }

  useEffect(() => {
    function handleMouseMove(e) {
      if (!mouseDrag.current.dragging) return;
      const rect = viewportRef.current.getBoundingClientRect();
      const dx = e.clientX - mouseDrag.current.start.x;
      const dy = e.clientY - mouseDrag.current.start.y;
      setOffset(clampOffset(
        { x: mouseDrag.current.startOffset.x + dx, y: mouseDrag.current.startOffset.y + dy },
        scale,
        rect,
      ));
    }
    function handleMouseUp() {
      mouseDrag.current.dragging = false;
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [scale]);

  return (
    <div className="zoom-modal-overlay" onClick={onClose}>
      <div
        ref={panelRef}
        className="zoom-modal-panel"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        <div className="zoom-modal-header">
          <span className="zoom-modal-title">{title}</span>
          <button type="button" className="zoom-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div
          ref={viewportRef}
          className="zoom-modal-viewport"
          onMouseDown={handleMouseDown}
          onDoubleClick={reset}
        >
          <img
            src={src}
            alt={alt}
            className="zoom-modal-img"
            draggable={false}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              cursor: scale > MIN_SCALE ? "grab" : "default",
            }}
          />
        </div>
        <p className="zoom-modal-hint">Scroll or pinch to zoom · drag to pan · double-click/tap to reset</p>
      </div>
    </div>
  );
}
