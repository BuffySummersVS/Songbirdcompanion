import { useMemo, useState } from "react";
import { heroes } from "../data/heroes";
import mapsData from "../data/maps.json";
import mapPickReasons from "../data/mapPickReasons.json";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useFocusTrap } from "../hooks/useFocusTrap";

const GAME_MODES = ["All", "Escort", "Hybrid", "Control", "Push", "Flashpoint", "Clash"];

// Normalise sub-map names to their parent map's canonical name
const NORMALIZE = {
  "Ilios Well":              "Ilios",
  "Lijiang Garden":          "Lijiang Tower",
  "Lijiang Control Center":  "Lijiang Tower",
  "Nepal Village":           "Nepal",
  "Nepal Sanctum":           "Nepal",
};

const resolveHero = (name) => heroes.find(h => h.name === name);

const CATEGORY_QUESTION = {
  strong: (hero, mapName) => `Why is ${hero.name} a strong pick on ${mapName}?`,
  weak:   (hero, mapName) => `Why is ${hero.name} a weak pick on ${mapName}?`,
  risky:  (hero, mapName) => `Why is ${hero.name} a risky pick on ${mapName}?`,
};

function MapPickChip({ hero, mapName, category, onOpen }) {
  const hasReason = !!mapPickReasons[mapName]?.[category]?.[hero.name];

  if (!hasReason) {
    return (
      <div className={`map-chip ${hero.role.toLowerCase()}`}>
        <img src={hero.image} alt={hero.name} />
        <span>{hero.name}</span>
      </div>
    );
  }

  return (
    <div
      className={`map-chip ${hero.role.toLowerCase()} map-chip-clickable`}
      role="button"
      tabIndex={0}
      onClick={(e) => { e.stopPropagation(); onOpen(hero, mapName, category); }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          onOpen(hero, mapName, category);
        }
      }}
    >
      <img src={hero.image} alt={hero.name} />
      <span>{hero.name}</span>
    </div>
  );
}

function MapPickReasonModal({ hero, mapName, category, onClose }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();
  const data = mapPickReasons[mapName]?.[category]?.[hero.name];

  return (
    <div className="mr-modal-overlay" onClick={onClose}>
      <div ref={panelRef} className={`mr-modal-panel ${category}`} role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <button type="button" className="mr-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="mr-modal-pair">
          <div className={`cw-chip-portrait ${hero.role.toLowerCase()}`}>
            <img src={hero.image} alt={hero.name} />
          </div>
        </div>
        <p className="mr-modal-map-subtitle">on {mapName}</p>

        <h3 className={`mr-modal-label ${category}`}>{CATEGORY_QUESTION[category](hero, mapName)}</h3>

        {category === "risky" ? (
          <div className="mr-modal-risky-lists">
            <p className="mr-modal-reason">
              {data?.summary ?? "We haven't written up the reasoning for this pick yet — check back soon."}
            </p>
            <div className="mr-modal-risky-group">
              <h4>Requires</h4>
              <ul>{(data?.requires ?? []).map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
            <div className="mr-modal-risky-group">
              <h4>Struggles Against</h4>
              <ul>{(data?.strugglesAgainst ?? []).map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
          </div>
        ) : (
          <p className="mr-modal-reason">
            {data ?? "We haven't written up the reasoning for this pick yet — check back soon."}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MapsPage({ focusMapId = null, onSelectMap, onClearFocus }) {
  const [search, setSearch]     = useState("");
  const [modeFilter, setModeFilter] = useState("All");
  const [openReasonFor, setOpenReasonFor] = useState(null);

  function openReason(hero, mapName, category) {
    setOpenReasonFor({ hero, mapName, category });
  }

  function closeReason() {
    setOpenReasonFor(null);
  }

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
    const riskyNames = Object.keys(mapPickReasons[map.name]?.risky ?? {});
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
                <MapPickChip key={h.id} hero={h} mapName={map.name} category="strong" onOpen={openReason} />
              ))}
            </div>
          </div>
        )}

        {picks.weak.length > 0 && (
          <div className="map-section">
            <span className="map-tag weak-tag">Weak Picks</span>
            <div className="map-chips">
              {picks.weak.map(h => (
                <MapPickChip key={h.id} hero={h} mapName={map.name} category="weak" onOpen={openReason} />
              ))}
            </div>
          </div>
        )}

        {riskyNames.length > 0 && (
          <div className="map-section">
            <span className="map-tag risky-tag">Risky Picks</span>
            <div className="map-chips">
              {riskyNames.map(name => {
                const h = resolveHero(name);
                return h ? (
                  <MapPickChip key={h.id} hero={h} mapName={map.name} category="risky" onOpen={openReason} />
                ) : null;
              })}
            </div>
          </div>
        )}

        {picks.strong.length === 0 && picks.weak.length === 0 && riskyNames.length === 0 && (
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

        {openReasonFor && (
          <MapPickReasonModal
            hero={openReasonFor.hero}
            mapName={openReasonFor.mapName}
            category={openReasonFor.category}
            onClose={closeReason}
          />
        )}
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

      {openReasonFor && (
        <MapPickReasonModal
          hero={openReasonFor.hero}
          mapName={openReasonFor.mapName}
          category={openReasonFor.category}
          onClose={closeReason}
        />
      )}
    </>
  );
}
