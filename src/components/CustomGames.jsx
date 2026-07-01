import { useState, useMemo } from "react";
import { CUSTOM_GAMES } from "../data/customGames";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(CUSTOM_GAMES.map(g => g.category))).sort()];

function categoryClass(cat) {
  return "cat-" + cat.toLowerCase().replace(/\s+/g, "-");
}

export default function CustomGames() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [copied, setCopied]     = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return CUSTOM_GAMES.filter(g =>
      (category === "All" || g.category === category) &&
      (g.name.toLowerCase().includes(q) ||
       g.code.toLowerCase().includes(q) ||
       g.category.toLowerCase().includes(q))
    );
  }, [search, category]);

  function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(code);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {});
  }

  return (
    <>
      <div className="control-panel">
        <h2>Custom Games</h2>
        <p>
          Explore popular community-created custom game modes. Copy any code
          and paste it directly into Overwatch's Custom Game browser to start playing.
        </p>
        <input
          className="hero-search"
          placeholder="Search by name, code, or category…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="terms-category-bar">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              className={`terms-cat-btn${category === cat ? " active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="terms-empty">No custom games match your search.</p>
      ) : (
        <div className="cg-grid">
          {filtered.map(game => (
            <div className="cg-card" key={game.code}>
              <div className="cg-card-top">
                <div className="cg-card-title-group">
                  <h3 className="cg-name">{game.name}</h3>
                  {game.creator && (
                    <span className="cg-creator">by {game.creator}</span>
                  )}
                </div>
                <span className={`cg-category-badge ${categoryClass(game.category)}`}>
                  {game.category}
                </span>
              </div>

              <p className="cg-description">{game.description}</p>

              <div className="cg-code-row">
                <code className="cg-code">{game.code}</code>
                <button
                  type="button"
                  className={`cg-copy-btn${copied === game.code ? " copied" : ""}`}
                  onClick={() => copyCode(game.code)}
                >
                  {copied === game.code ? "✓ Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
