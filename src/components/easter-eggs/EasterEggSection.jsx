import { useEffect, useState } from "react";
import { DESKTOP_EASTER_EGGS, DESKTOP_EASTER_EGG_COUNT, MOBILE_EASTER_EGGS, MOBILE_EASTER_EGG_COUNT } from "../../data/easterEggs";
import { useEasterEggs } from "../../contexts/EasterEggContext";
import { getEasterEggsFor } from "../../data/storage";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";

function LockGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  );
}

function StarGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3.5l2.4 5.2 5.6.6-4.2 3.9 1.2 5.7L12 16l-5 2.9 1.2-5.7-4.2-3.9 5.6-.6L12 3.5z" fill="currentColor" />
    </svg>
  );
}

function EggGrid({ unlocked, eggs, count, title, subtitle }) {
  const discoveredCount = eggs.filter(egg => unlocked.has(egg.id)).length;

  return (
    <div className="profile-section egg-section">
      <div className="egg-section-header">
        <div>
          <h3>{title}</h3>
          <p className="egg-section-sub">{subtitle}</p>
        </div>
        <span className="egg-section-progress">{discoveredCount} / {count} Discovered</span>
      </div>

      <div className="egg-section-grid">
        {eggs.map(egg => {
          const isUnlocked = unlocked.has(egg.id);
          return (
            <div key={egg.id} className={`egg-card${isUnlocked ? " egg-card-unlocked" : " egg-card-locked"}`}>
              <span className="egg-card-icon">{isUnlocked ? <StarGlyph /> : <LockGlyph />}</span>
              {isUnlocked ? (
                <>
                  <span className="egg-card-name">{egg.name}</span>
                  <span className="egg-card-hero">{egg.hero}</span>
                </>
              ) : (
                <>
                  <span className="egg-card-name egg-card-unknown">???</span>
                  <span className="egg-card-hero egg-card-unknown">Undiscovered</span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OwnEasterEggSection() {
  const eggs = useEasterEggs();
  const unlocked = eggs?.unlocked ?? new Set();

  return (
    <>
      {eggs?.isDesktop && (
        <EggGrid
          unlocked={unlocked}
          eggs={DESKTOP_EASTER_EGGS}
          count={DESKTOP_EASTER_EGG_COUNT}
          title="Secret Archives (Desktop)"
          subtitle="Hidden interactions scattered across SongBird, waiting to be found."
        />
      )}
      <EggGrid
        unlocked={unlocked}
        eggs={MOBILE_EASTER_EGGS}
        count={MOBILE_EASTER_EGG_COUNT}
        title="Secret Archives (Mobile)"
        subtitle="Hidden interactions exclusive to the mobile app, waiting to be found."
      />
    </>
  );
}

function ReadOnlyArchivePanel({ unlocked, eggs, count, title }) {
  const [expanded, setExpanded] = useState(false);

  useEscapeKey(() => setExpanded(false), expanded);
  const panelRef = useFocusTrap(expanded);

  const discoveredCount = eggs.filter(egg => unlocked.has(egg.id)).length;

  return (
    <>
      <div
        className="up-badge-panel up-egg-panel"
        role="button"
        tabIndex={0}
        onClick={() => setExpanded(true)}
        onKeyDown={e => e.key === "Enter" && setExpanded(true)}
      >
        <div className="up-badge-panel-header">
          <span className="up-badge-panel-title">
            {title}<span className="up-badge-panel-count"> ({discoveredCount}/{count})</span>
          </span>
        </div>
        <p className="up-badge-panel-empty">Click to view discovered eggs.</p>
      </div>

      {expanded && (
        <div className="up-egg-modal-overlay" onClick={() => setExpanded(false)}>
          <div
            ref={panelRef}
            className="up-egg-modal-panel"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <button type="button" className="up-egg-modal-close" onClick={() => setExpanded(false)}>✕ Close</button>
            <EggGrid unlocked={unlocked} eggs={eggs} count={count} title={title} subtitle="" />
          </div>
        </div>
      )}
    </>
  );
}

function ReadOnlyEasterEggSection({ userId }) {
  const isDesktop = useIsDesktop();
  const [unlockedIds, setUnlockedIds] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getEasterEggsFor(userId).then(ids => {
      if (!cancelled) setUnlockedIds(ids);
    }).catch(() => {
      if (!cancelled) setUnlockedIds([]);
    });
    return () => { cancelled = true; };
  }, [userId]);

  if (unlockedIds === null) return null;
  const unlocked = new Set(unlockedIds);

  return (
    <>
      {isDesktop && (
        <ReadOnlyArchivePanel
          unlocked={unlocked}
          eggs={DESKTOP_EASTER_EGGS}
          count={DESKTOP_EASTER_EGG_COUNT}
          title="Secret Archives (Desktop)"
        />
      )}
      <ReadOnlyArchivePanel
        unlocked={unlocked}
        eggs={MOBILE_EASTER_EGGS}
        count={MOBILE_EASTER_EGG_COUNT}
        title="Secret Archives (Mobile)"
      />
    </>
  );
}

export default function EasterEggSection({ userId, readOnly = false } = {}) {
  if (readOnly) return <ReadOnlyEasterEggSection userId={userId} />;
  return <OwnEasterEggSection />;
}
