import { useState, useMemo } from "react";
import { TERMS } from "../data/terms";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useHazardSearchTrigger } from "../hooks/useHazardSearchTrigger";
import Modal, { ModalHeader } from "./Modal";

const CATEGORIES = ["All", ...Array.from(new Set(TERMS.map(t => t.category))).sort()];

export default function TermsPage() {
  const [search, setSearch]     = useState("");
  const checkHazardTrigger = useHazardSearchTrigger();
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [linesModalTerm, setLinesModalTerm] = useState(null);

  useEscapeKey(() => setLinesModalTerm(null), !!linesModalTerm);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    // Match on the term name only, like every other search in the app
    // (hero search, terms search, etc.) — matching definition text too meant
    // common words like "one" (used as an ordinary word in dozens of
    // unrelated definitions: "one tank per team", "one of the most...")
    // could never isolate to just the term that word names.
    return TERMS.filter(t =>
      (category === "All" || t.category === category) &&
      t.term.toLowerCase().includes(q)
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
          onChange={e => { setSearch(e.target.value); checkHazardTrigger(e.target.value); }}
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
                role="button"
                tabIndex={0}
                onClick={() => setExpanded(expanded === t.term ? null : t.term)}
                onKeyDown={e => {
                  if (e.target !== e.currentTarget) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded(expanded === t.term ? null : t.term);
                  }
                }}
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
                    {t.chatFilterLines && (
                      <button
                        type="button"
                        className="term-lines-btn"
                        onClick={e => { e.stopPropagation(); setLinesModalTerm(t); }}
                      >
                        View Replacement Lines
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {linesModalTerm && (
        <Modal onClose={() => setLinesModalTerm(null)}>
          <ModalHeader title={`${linesModalTerm.term} — Replacement Lines`} onClose={() => setLinesModalTerm(null)} />
          <ul className="terms-lines-list">
            {linesModalTerm.chatFilterLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}
