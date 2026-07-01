import { useState, useMemo } from "react";
import { TERMS } from "../data/terms";

const CATEGORIES = ["All", ...Array.from(new Set(TERMS.map(t => t.category))).sort()];

export default function TermsPage() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return TERMS.filter(t =>
      (category === "All" || t.category === category) &&
      (t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q))
    ).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, category]);

  // Group alphabetically
  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach(t => {
      const letter = t.term[0].toUpperCase();
      if (!g[letter]) g[letter] = [];
      g[letter].push(t);
    });
    return Object.entries(g).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <>
      <div className="control-panel">
        <h2>Terms &amp; Phrases</h2>
        <p>
          Plain-English explanations of Overwatch strategy terminology, mechanics,
          and community slang. Search for any term or browse by category.
        </p>
        <input
          className="hero-search"
          placeholder="Search terms…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="terms-category-bar">
          {CATEGORIES.map(c => (
            <button
              key={c}
              type="button"
              className={`terms-cat-btn${category === c ? " active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {grouped.length === 0 && (
        <div className="terms-empty">No terms match your search.</div>
      )}

      <div className="terms-list">
        {grouped.map(([letter, terms]) => (
          <div className="terms-letter-group" key={letter}>
            <h3 className="terms-letter">{letter}</h3>
            {terms.map(t => (
              <div
                key={t.term}
                className={`term-card${expanded === t.term ? " open" : ""}`}
                onClick={() => setExpanded(expanded === t.term ? null : t.term)}
              >
                <div className="term-header">
                  <div className="term-name-row">
                    <span className="term-name">{t.term}</span>
                    <span className={`term-cat-badge cat-${t.category.toLowerCase().replace(/\s/g, "-")}`}>
                      {t.category}
                    </span>
                  </div>
                  <span className="term-chevron">{expanded === t.term ? "▲" : "▼"}</span>
                </div>
                <p className="term-definition">{t.definition}</p>
                {expanded === t.term && (
                  <div className="term-example">
                    <span className="term-example-label">In game:</span>
                    <span className="term-example-text">"{t.example}"</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
