import { useState } from "react";
import { useEasterEggs } from "../../contexts/EasterEggContext";
import { DESKTOP_EASTER_EGGS, MOBILE_EASTER_EGGS } from "../../data/easterEggs";

export default function EggDebugPanel() {
  const ctx = useEasterEggs();
  const [open, setOpen] = useState(false);
  if (!ctx) return null;

  const { trigger, isDesktop } = ctx;

  return (
    <div className="egg-debug-panel">
      {open && (
        <div className="egg-debug-list">
          <div className="egg-debug-group-label">Mobile{!isDesktop ? "" : " (inactive on desktop)"}</div>
          {MOBILE_EASTER_EGGS.map(egg => (
            <button
              key={egg.id}
              type="button"
              className="egg-debug-item"
              disabled={isDesktop}
              onClick={() => trigger(egg.id)}
            >
              {egg.name}
            </button>
          ))}
          <div className="egg-debug-group-label">Desktop{isDesktop ? "" : " (inactive on mobile)"}</div>
          {DESKTOP_EASTER_EGGS.map(egg => (
            <button
              key={egg.id}
              type="button"
              className="egg-debug-item"
              disabled={!isDesktop}
              onClick={() => trigger(egg.id)}
            >
              {egg.name}
            </button>
          ))}
        </div>
      )}
      <button type="button" className="egg-debug-toggle" onClick={() => setOpen(o => !o)}>
        {open ? "×" : "🥚"}
      </button>
    </div>
  );
}
