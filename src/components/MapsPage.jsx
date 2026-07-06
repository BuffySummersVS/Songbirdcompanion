import { useMemo, useState } from "react";
import { heroes } from "../data/heroes";
import mapsData from "../data/maps.json";

const GAME_MODES = ["All", "Escort", "Hybrid", "Control", "Push", "Flashpoint", "Clash"];

// Normalise sub-map names to their parent map's canonical name
const NORMALIZE = {
  "Ilios Well":              "Ilios",
  "Lijiang Garden":          "Lijiang Tower",
  "Lijiang Control Center":  "Lijiang Tower",
  "Nepal Village":           "Nepal",
  "Nepal Sanctum":           "Nepal",
};

export default function MapsPage({ focusMapId = null, onSelectMap, onClearFocus }) {
  const [search, setSearch]     = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  // Build hero pick data from heroes.json (applying name normalisation)
  const heroPicks = useMemo(() => {
    const acc = {};
    heroes.forEach(hero => {
      hero.strongMaps?.forEach(raw => {
        const m = NORMALIZE[raw] ?? raw;
        if (!acc[m]) acc[m] = { strong: [], weak: [] };
        acc[m].strong.push(hero);
      });
      hero.weakMaps?.forEach(raw => {
        const m = NORMALIZE[raw] ?? raw;
        if (!acc[m]) acc[m] = { strong: [], weak: [] };
        acc[m].weak.push(hero);
      });
    });
    return acc;
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return mapsData.filter(map => {
      const picks = heroPicks[map.name] ?? { strong: [], weak: [] };
      const matchesSearch =
        !q ||
        map.name.toLowerCase().includes(q) ||
        picks.strong.some(h => h.name.toLowerCase().includes(q));
      const matchesMode = modeFilter === "All" || map.gameMode === modeFilter;
      return matchesSearch && matchesMode;
    });
  }, [search, modeFilter, heroPicks]);

  function renderMapCard(map, { clickable = false } = {}) {
    const picks = heroPicks[map.name] ?? { strong: [], weak: [] };
    const interactiveProps = clickable
      ? {
          role: "button",
          tabIndex: 0,
          onClick: () => onSelectMap(map.id),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectMap(map.id);
            }
          },
        }
      : {};

    return (
      <div
        className={`map-card${clickable ? " map-card-clickable" : ""}`}
        key={map.id}
        {...interactiveProps}
      >
        <div className="map-card-header">
          <h3 className="map-name">{map.name}</h3>
          <span className={`map-mode-badge mode-${map.gameMode.toLowerCase()}`}>
            {map.gameMode}
          </span>
        </div>
        <p className="map-description">{map.description}</p>

        {picks.strong.length > 0 && (
          <div className="map-section">
            <span className="map-tag strong-tag">Strong Picks</span>
            <div className="map-chips">
              {picks.strong.map(h => (
                <div key={h.id} className={`map-chip ${h.role.toLowerCase()}`}>
                  <img src={h.image} alt={h.name} />
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {picks.weak.length > 0 && (
          <div className="map-section">
            <span className="map-tag weak-tag">Weak Picks</span>
            <div className="map-chips">
              {picks.weak.map(h => (
                <div key={h.id} className={`map-chip ${h.role.toLowerCase()}`}>
                  <img src={h.image} alt={h.name} />
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {picks.strong.length === 0 && picks.weak.length === 0 && (
          <p className="map-no-data">No hero pick data available yet.</p>
        )}
      </div>
    );
  }

  const focusedMap = focusMapId ? mapsData.find(m => m.id === focusMapId) : null;

  if (focusedMap) {
    return (
      <>
        <div className="control-panel">
          <button type="button" className="map-back-btn" onClick={onClearFocus}>← All Maps</button>
          <h2>{focusedMap.name}</h2>
          <p>{focusedMap.gameMode} map — {focusedMap.location}.</p>
        </div>
        <div className="maps-grid">
          {renderMapCard(focusedMap)}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="control-panel">
        <h2>Maps</h2>
        <p>
          Explore every Overwatch map — game mode, setting, and which heroes
          perform best and worst on each one.
        </p>
        <input
          className="hero-search"
          placeholder="Search by map or hero name…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="map-mode-filter">
          {GAME_MODES.map(mode => (
            <button
              key={mode}
              type="button"
              className={`map-mode-btn${modeFilter === mode ? " active" : ""}`}
              onClick={() => setModeFilter(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="maps-grid">
        {filtered.map(map => renderMapCard(map, { clickable: !!onSelectMap }))}
      </div>
    </>
  );
}
