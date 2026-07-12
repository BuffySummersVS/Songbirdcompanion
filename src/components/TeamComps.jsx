import { useState } from "react";
import { heroes } from "../data/heroes";
import { COMP_STYLES, HERO_COMP_FIT } from "../data/compStyles";
import HeroPickerGrid from "./HeroPickerGrid";
import { useHazardSearchTrigger } from "../hooks/useHazardSearchTrigger";

const SLOT_ROLES = ["Tank", "Damage", "Damage", "Support", "Support"];

export default function TeamComps() {
  const [team, setTeam]             = useState([null, null, null, null, null]);
  const [pickingSlot, setPickingSlot] = useState(null);
  const [search, setSearch]         = useState("");
  const checkHazardTrigger = useHazardSearchTrigger();
  const [selectedStyle, setSelectedStyle] = useState(null);

  const teamNames = team.filter(Boolean).map(h => h.name);
  const teamIds   = team.filter(Boolean).map(h => h.id);

  const synergies = [];
  team.filter(Boolean).forEach(hero => {
    hero.synergies?.forEach(name => {
      const key1 = `${hero.name}+${name}`;
      const key2 = `${name}+${hero.name}`;
      if (teamNames.includes(name) && !synergies.includes(key1) && !synergies.includes(key2)) {
        synergies.push(key1);
      }
    });
  });

  // Alert system — heroes that don't fit the selected style
  const misfits = selectedStyle
    ? team.filter(Boolean).filter(hero => {
        const fit = HERO_COMP_FIT[hero.id] ?? [];
        return !fit.includes(selectedStyle);
      })
    : [];

  const filteredHeroes = heroes.filter(h =>
    pickingSlot !== null &&
    h.role === SLOT_ROLES[pickingSlot] &&
    !teamIds.includes(h.id) &&
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  function pickHero(hero) {
    const next = [...team];
    next[pickingSlot] = hero;
    setTeam(next);
    setPickingSlot(null);
    setSearch("");
  }

  function clearSlot(i, e) {
    e.stopPropagation();
    const next = [...team];
    next[i] = null;
    setTeam(next);
  }

  function closeOverlay() {
    setPickingSlot(null);
    setSearch("");
  }

  const activeStyle = selectedStyle
    ? COMP_STYLES.find(s => s.id === selectedStyle)
    : null;

  return (
    <>
      <div className="control-panel">
        <h2>Team Comps</h2>
        <p>
          Build a 5-hero team and detect synergies. Select a composition style
          to get warnings if your picks don't suit that playstyle.
        </p>
      </div>

      {/* Composition styles section */}
      <div className="comp-styles-section">
        <h3 className="comp-styles-heading">Composition Styles</h3>
        <p className="comp-styles-sub">
          Select a style to highlight heroes that don't suit it.
        </p>

        <div className="comp-style-cards">
          {COMP_STYLES.map(style => (
            <div
              key={style.id}
              className={`comp-style-card${selectedStyle === style.id ? " selected" : ""}`}
              style={{ "--style-color": style.color }}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedStyle(selectedStyle === style.id ? null : style.id)}
              onKeyDown={e => {
                if (e.target !== e.currentTarget) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedStyle(selectedStyle === style.id ? null : style.id);
                }
              }}
            >
              <div className="comp-style-card-header">
                <span className="comp-style-icon">{style.icon}</span>
                <h4 className="comp-style-name">{style.name}</h4>
                {selectedStyle === style.id && (
                  <span className="comp-style-active-badge">Selected</span>
                )}
              </div>
              <p className="comp-style-desc">{style.description}</p>

              <div className="comp-style-details">
                <div className="comp-style-detail">
                  <span className="comp-style-detail-label">How it plays</span>
                  <p>{style.howItPlays}</p>
                </div>
                <div className="comp-style-detail">
                  <span className="comp-style-detail-label">Best on</span>
                  <p>{style.bestMaps}</p>
                </div>
                <div className="comp-style-detail">
                  <span className="comp-style-detail-label">Example heroes</span>
                  <div className="comp-style-examples">
                    {style.exampleHeroes.map(name => {
                      const h = heroes.find(x => x.name === name);
                      return h ? (
                        <div key={name} className="comp-example-chip">
                          <img src={h.image} alt={name} />
                          <span>{name}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team builder */}
      <div className="tc-builder">
        <div className="tc-slots">
          {team.map((hero, i) => (
            <div key={i} className={`tc-slot ${SLOT_ROLES[i].toLowerCase()}`}>
              <span className="tc-role-label">{SLOT_ROLES[i]}</span>
              {hero ? (
                <div
                  className={`tc-hero-filled${misfits.some(m => m.id === hero.id) ? " mismatch" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setPickingSlot(i)}
                  onKeyDown={e => {
                    if (e.target !== e.currentTarget) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPickingSlot(i);
                    }
                  }}
                >
                  <img src={hero.image} alt={hero.name} />
                  <span>{hero.name}</span>
                  {misfits.some(m => m.id === hero.id) && (
                    <span className="tc-mismatch-icon" title={`${hero.name} may not suit ${activeStyle?.name} style`}>⚠</span>
                  )}
                  <button type="button" className="tc-clear" onClick={e => clearSlot(i, e)}>
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="tc-empty-slot"
                  onClick={() => setPickingSlot(i)}
                >
                  + Pick {SLOT_ROLES[i]}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Style mismatch alert */}
        {selectedStyle && misfits.length > 0 && (
          <div className="tc-alert">
            <span className="tc-alert-icon">⚠</span>
            <div>
              <strong>Style mismatch detected</strong>
              <p>
                {misfits.map(h => h.name).join(", ")}{" "}
                {misfits.length === 1 ? "doesn't" : "don't"} typically suit{" "}
                <strong>{activeStyle?.name}</strong> compositions.
                Consider swapping {misfits.length === 1 ? "this hero" : "these heroes"} or choosing a different style.
              </p>
            </div>
          </div>
        )}

        {synergies.length > 0 && (
          <div className="tc-synergies">
            <h3>Team Synergies Detected</h3>
            <div className="tc-synergy-list">
              {synergies.map(s => (
                <div key={s} className="tc-synergy-pill">
                  {s.replace("+", " + ")}
                </div>
              ))}
            </div>
          </div>
        )}

        {teamIds.length === 5 && synergies.length === 0 && (
          <div className="tc-no-synergy">
            <p>No recorded synergies between these heroes — try a different lineup.</p>
          </div>
        )}
      </div>

      {pickingSlot !== null && (
        <div className="picker-overlay" onClick={closeOverlay}>
          <div className="picker-panel" onClick={e => e.stopPropagation()}>
            <h3 className="picker-title">
              Pick a{" "}
              <span className={`picker-role-accent ${SLOT_ROLES[pickingSlot].toLowerCase()}`}>
                {SLOT_ROLES[pickingSlot]}
              </span>
            </h3>
            <input
              className="hero-search"
              placeholder="Search heroes…"
              value={search}
              onChange={e => { setSearch(e.target.value); checkHazardTrigger(e.target.value); }}
              autoFocus
            />
            <HeroPickerGrid
              heroes={filteredHeroes}
              onSelect={pickHero}
              emptyMessage="No heroes match your search."
            />
          </div>
        </div>
      )}
    </>
  );
}
