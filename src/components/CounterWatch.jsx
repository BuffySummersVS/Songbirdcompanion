import { useState, useMemo, useEffect, useRef } from "react";
import { heroes } from "../data/heroes";
import { CW_TIPS } from "../data/tips";
import HeroPickerGrid from "./HeroPickerGrid";

const TIP_INTERVAL = 11000;

function TipBanner() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * CW_TIPS.length));
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  function advance(dir) {
    setFading(true);
    setTimeout(() => {
      setIdx(i => (i + dir + CW_TIPS.length) % CW_TIPS.length);
      setFading(false);
    }, 280);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(1), TIP_INTERVAL);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => advance(1), TIP_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="cw-tip-bar">
      <span className="cw-tip-label">TIP</span>
      <p className={`cw-tip-text${fading ? "" : " visible"}`}>{CW_TIPS[idx]}</p>
      <div className="cw-tip-controls">
        <button type="button" className="cw-tip-btn" onClick={() => { resetTimer(); advance(-1); }} aria-label="Previous tip">‹</button>
        <span className="cw-tip-count">{idx + 1}/{CW_TIPS.length}</span>
        <button type="button" className="cw-tip-btn" onClick={() => { resetTimer(); advance(1); }} aria-label="Next tip">›</button>
      </div>
    </div>
  );
}

export default function CounterWatch({ initialHero }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(initialHero ?? null);
  const [syncedHeroId, setSyncedHeroId] = useState(initialHero?.id);

  if (initialHero?.id && initialHero.id !== syncedHeroId) {
    setSyncedHeroId(initialHero.id);
    setSelected(initialHero);
  }

  useEffect(() => {
    if (!selected) return;
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  const filtered = useMemo(
    () => heroes.filter(h => h.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const resolve = (name) => heroes.find(h => h.name === name);

  return (
    <>
      <div className="control-panel">
        <h2>CounterWatch</h2>
        <TipBanner />
        <p>Select a hero to see who they counter, who counters them, and their best teammates.</p>
        <input
          className="hero-search"
          placeholder="Search heroes…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <HeroPickerGrid
          heroes={filtered}
          selectedId={selected?.id}
          onSelect={h => setSelected(selected?.id === h.id ? null : h)}
        />
      </div>

      {selected && (
        <div className="cw-popup-overlay" onClick={() => setSelected(null)}>
          <div className="cw-popup-panel" onClick={e => e.stopPropagation()}>
            <div className="cw-popup-header">
              <div className={`cw-popup-portrait ${selected.role.toLowerCase()}`}>
                <img src={selected.image} alt={selected.name} className="cw-popup-img" />
              </div>
              <div className="cw-popup-hero-text">
                <p className="eyebrow">{selected.role}</p>
                <h3>{selected.name}</h3>
              </div>
              <button
                type="button"
                className="cw-popup-close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

            <div className="cw-panels">
              <div className="cw-panel cw-strong">
                <h3>Strong Against</h3>
                <p className="cw-panel-sub">{selected.name} counters these heroes</p>
                <div className="cw-chip-list">
                  {selected.counters?.length ? selected.counters.map(name => {
                    const h = resolve(name);
                    return (
                      <div key={name} className="cw-chip strong">
                        {h && (
                          <div className={`cw-chip-portrait ${h.role.toLowerCase()}`}>
                            <img src={h.image} alt={name} />
                          </div>
                        )}
                        <span>{name}</span>
                      </div>
                    );
                  }) : <p className="cw-empty">No data yet</p>}
                </div>
              </div>

              <div className="cw-panel cw-weak">
                <h3>Weak Against</h3>
                <p className="cw-panel-sub">These heroes counter {selected.name}</p>
                <div className="cw-chip-list">
                  {selected.counteredBy?.length ? selected.counteredBy.map(name => {
                    const h = resolve(name);
                    return (
                      <div key={name} className="cw-chip weak">
                        {h && (
                          <div className={`cw-chip-portrait ${h.role.toLowerCase()}`}>
                            <img src={h.image} alt={name} />
                          </div>
                        )}
                        <span>{name}</span>
                      </div>
                    );
                  }) : <p className="cw-empty">No data yet</p>}
                </div>
              </div>

              <div className="cw-panel cw-synergy">
                <h3>Best Teammates</h3>
                <p className="cw-panel-sub">Heroes that synergize with {selected.name}</p>
                <div className="cw-chip-list">
                  {selected.synergies?.length ? selected.synergies.map(name => {
                    const h = resolve(name);
                    return (
                      <div key={name} className="cw-chip synergy">
                        {h && (
                          <div className={`cw-chip-portrait ${h.role.toLowerCase()}`}>
                            <img src={h.image} alt={name} />
                          </div>
                        )}
                        <span>{name}</span>
                      </div>
                    );
                  }) : <p className="cw-empty">No data yet</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
