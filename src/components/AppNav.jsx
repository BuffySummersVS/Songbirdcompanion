import { useEscapeKey } from "../hooks/useEscapeKey";

export default function AppNav({ navItems, activePage, navOpen, setNavOpen, onNavigate }) {
  useEscapeKey(() => setNavOpen(false), navOpen);

  return (
    <nav className="app-nav">
      {navItems.map(item => (
        <button
          key={item}
          type="button"
          className={`nav-button${activePage === item ? " active" : ""}${item === "Patch Notes" ? " nav-external" : ""}`}
          onClick={() => onNavigate(item)}
        >
          {item}{item === "Patch Notes" ? " ↗" : ""}
        </button>
      ))}

      {/* Mobile hamburger */}
      <button
        type="button"
        className="nav-hamburger"
        onClick={() => setNavOpen(o => !o)}
        aria-label={navOpen ? "Close menu" : "Open menu"}
        aria-expanded={navOpen}
      >
        {navOpen ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {/* Mobile nav panel + backdrop */}
      {navOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={() => setNavOpen(false)} />
          <div className="mobile-nav-panel">
            {navItems.map(item => (
              <button
                key={item}
                type="button"
                className={`mobile-nav-item${activePage === item ? " active" : ""}${item === "Patch Notes" ? " nav-external" : ""}`}
                onClick={() => onNavigate(item)}
              >
                {item}{item === "Patch Notes" ? " ↗" : ""}
              </button>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
