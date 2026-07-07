import { useState } from "react";
import { heroes } from "../data/heroes";
import { getCounterReason, getSynergyReason } from "../utils/matchupReasons";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useFocusTrap } from "../hooks/useFocusTrap";

const resolve = (name) => heroes.find(h => h.name === name);

const VARIANT_LABEL = {
  strong: (hero, name) => `Why does ${hero.name} counter ${name}?`,
  weak: (hero, name) => `Why does ${name} counter ${hero.name}?`,
  synergy: (hero, name) => `Why do ${hero.name} and ${name} work well together?`,
};

function getReason(hero, name, variant) {
  if (variant === "strong") return getCounterReason(hero.name, name);
  if (variant === "weak") return getCounterReason(name, hero.name);
  return getSynergyReason(hero.name, name);
}

function MatchupChip({ name, variant, onOpen }) {
  const h = resolve(name);
  return (
    <div
      className={`cw-chip ${variant} cw-chip-clickable`}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(name, variant)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(name, variant);
        }
      }}
    >
      {h && (
        <div className={`cw-chip-portrait ${h.role.toLowerCase()}`}>
          <img src={h.image} alt={name} />
        </div>
      )}
      <span>{name}</span>
    </div>
  );
}

function MatchupReasonModal({ hero, otherName, variant, onClose }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();
  const other = resolve(otherName);
  const reason = getReason(hero, otherName, variant);

  return (
    <div className="mr-modal-overlay" onClick={onClose}>
      <div ref={panelRef} className="mr-modal-panel" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <button type="button" className="mr-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="mr-modal-pair">
          <div className={`cw-chip-portrait ${hero.role.toLowerCase()}`}>
            <img src={hero.image} alt={hero.name} />
          </div>
          <span className="mr-modal-vs">{variant === "synergy" ? "+" : "vs"}</span>
          {other && (
            <div className={`cw-chip-portrait ${other.role.toLowerCase()}`}>
              <img src={other.image} alt={otherName} />
            </div>
          )}
        </div>

        <h3 className={`mr-modal-label ${variant}`}>{VARIANT_LABEL[variant](hero, otherName)}</h3>
        <p className="mr-modal-reason">
          {reason ?? "We haven't written up the reasoning for this matchup yet — check back soon."}
        </p>
      </div>
    </div>
  );
}

export default function MatchupPanels({ hero, onReasonModalChange }) {
  const [open, setOpen] = useState(null);

  function openReason(name, variant) {
    setOpen({ name, variant });
    onReasonModalChange?.(true);
  }

  function closeReason() {
    setOpen(null);
    onReasonModalChange?.(false);
  }

  return (
    <>
      <div className="cw-panels">
        <div className="cw-panel cw-strong">
          <h3>Strong Against</h3>
          <p className="cw-panel-sub">{hero.name} counters these heroes</p>
          <div className="cw-chip-list">
            {hero.counters?.length
              ? hero.counters.map(name => (
                  <MatchupChip key={name} hero={hero} name={name} variant="strong" onOpen={openReason} />
                ))
              : <p className="cw-empty">No data yet</p>}
          </div>
        </div>

        <div className="cw-panel cw-weak">
          <h3>Weak Against</h3>
          <p className="cw-panel-sub">These heroes counter {hero.name}</p>
          <div className="cw-chip-list">
            {hero.counteredBy?.length
              ? hero.counteredBy.map(name => (
                  <MatchupChip key={name} hero={hero} name={name} variant="weak" onOpen={openReason} />
                ))
              : <p className="cw-empty">No data yet</p>}
          </div>
        </div>

        <div className="cw-panel cw-synergy">
          <h3>Best Teammates</h3>
          <p className="cw-panel-sub">Heroes that synergize with {hero.name}</p>
          <div className="cw-chip-list">
            {hero.synergies?.length
              ? hero.synergies.map(name => (
                  <MatchupChip key={name} hero={hero} name={name} variant="synergy" onOpen={openReason} />
                ))
              : <p className="cw-empty">No data yet</p>}
          </div>
        </div>
      </div>

      {open && (
        <MatchupReasonModal
          hero={hero}
          otherName={open.name}
          variant={open.variant}
          onClose={closeReason}
        />
      )}
    </>
  );
}
