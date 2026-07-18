import { useMemo, useState } from "react";
import { heroes } from "../data/heroes";
import mapsData from "../data/maps.json";
import mapPickReasons from "../data/mapPickReasons.json";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useHazardSearchTrigger } from "../hooks/useHazardSearchTrigger";
import ZoomableImageModal from "./ZoomableImageModal";

const GAME_MODES = ["All", "Escort", "Hybrid", "Control", "Push", "Flashpoint", "Clash"];

// Pre-supplied annotated callout images (originally 13-37MB PNGs/JPGs at
// 5000px+ native resolution — resized to a 2000px max side and re-encoded
// as JPG, ~7MB total down from ~330MB), keyed by their filename stem
// (before "_anno.jpg"). Most already match a map's id exactly once
// underscores are gone; the few that don't get an explicit override.
// "busan" has no entry here on purpose — Busan isn't in maps.json (it's
// been vaulted from Overwatch's map rotation), so there's no card to
// attach that one image to.
const CALLOUT_ID_OVERRIDES = {
  blizzardworld: "blizzard-world",
  kingsrow: "kings-row",
  lijiangtower: "lijiang-tower",
  route66: "route-66",
  watchpointgibraltar: "watchpoint-gibraltar",
};

const CALLOUT_IMAGE_MODULES = import.meta.glob("../assets/maps/*.jpg", { eager: true, import: "default" });

const CALLOUT_IMAGES_BY_MAP_ID = Object.fromEntries(
  Object.entries(CALLOUT_IMAGE_MODULES)
    .map(([path, url]) => {
      const stem = path.match(/([^/]+)_anno\.jpg$/)?.[1];
      const mapId = CALLOUT_ID_OVERRIDES[stem] ?? stem;
      return mapId ? [mapId, url] : null;
    })
    .filter(Boolean)
);

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
  const checkHazardTrigger = useHazardSearchTrigger();
  const [modeFilter, setModeFilter] = useState("All");
  const [openReasonFor, setOpenReasonFor] = useState(null);
  const [openCalloutFor, setOpenCalloutFor] = useState(null);

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

        {CALLOUT_IMAGES_BY_MAP_ID[map.id] && (
          <button
            type="button"
            className="map-callout-btn"
            onClick={(e) => { e.stopPropagation(); setOpenCalloutFor(map); }}
          >
            🗺️ View Callout Map
          </button>
        )}

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

        {openCalloutFor && (
          <ZoomableImageModal
            src={CALLOUT_IMAGES_BY_MAP_ID[openCalloutFor.id]}
            alt={`${openCalloutFor.name} callout map`}
            title={`${openCalloutFor.name} — Callout Map`}
            onClose={() => setOpenCalloutFor(null)}
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
          onChange={e => { setSearch(e.target.value); checkHazardTrigger(e.target.value); }}
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

      {openCalloutFor && (
        <ZoomableImageModal
          src={CALLOUT_IMAGES_BY_MAP_ID[openCalloutFor.id]}
          alt={`${openCalloutFor.name} callout map`}
          title={`${openCalloutFor.name} — Callout Map`}
          onClose={() => setOpenCalloutFor(null)}
        />
      )}
    </>
  );
}
