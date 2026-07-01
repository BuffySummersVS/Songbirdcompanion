import { useState } from "react";
import { heroes } from "../data/heroes";

const PARTY_SIZES = [
  { label: "Solo", value: 1 },
  { label: "Duo", value: 2 },
  { label: "Trio", value: 3 },
  { label: "Four Players", value: 4 },
  { label: "Full Team", value: 5 },
];

const ROLES = ["Tank", "Damage", "Support"];

export default function RandomHeroSelector() {
  const [partySize, setPartySize] = useState(1);
  const [queueType, setQueueType] = useState("Open Queue");
  const [role, setRole] = useState("Tank");
  const [results, setResults] = useState([]);

  function rollHeroes() {
    const pool =
      queueType === "Role Queue"
        ? heroes.filter((h) => h.role === role)
        : heroes;

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setResults(shuffled.slice(0, Math.min(partySize, pool.length)));
  }

  return (
    <div className="control-panel random-selector">
      <h2>Random Hero</h2>
      <p>Not sure who to play? Let SongBird decide.</p>

      <div className="random-controls">
        <div className="random-field">
          <label className="random-label">Party Size</label>
          <select
            className="sb-select"
            value={partySize}
            onChange={(e) => setPartySize(Number(e.target.value))}
          >
            {PARTY_SIZES.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="random-field">
          <label className="random-label">Queue Type</label>
          <select
            className="sb-select"
            value={queueType}
            onChange={(e) => setQueueType(e.target.value)}
          >
            <option value="Open Queue">Open Queue</option>
            <option value="Role Queue">Role Queue</option>
          </select>
        </div>

        {queueType === "Role Queue" && (
          <div className="random-field">
            <label className="random-label">Role</label>
            <select
              className="sb-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        )}

        <button className="random-roll-btn" onClick={rollHeroes}>
          Roll
        </button>
      </div>

      {results.length > 0 && (
        <div className="random-results">
          {results.map((hero, i) => (
            <div className="random-result-card" key={`${hero.id}-${i}`}>
              <div className="random-portrait-wrap">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="hero-portrait"
                />
              </div>
              <span className="random-hero-name">{hero.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
