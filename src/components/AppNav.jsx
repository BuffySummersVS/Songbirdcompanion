import { useEffect, useRef, useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";

export default function AppNav({ navItems, activePage, navOpen, setNavOpen, onNavigate }) {
  useEscapeKey(() => setNavOpen(false), navOpen);

  // `position:sticky` doesn't engage in this app's WebView, so the mobile
  // hamburger bar is pinned in JS instead: a zero-height sentinel sits where
  // the nav naturally starts, and once scrolling carries it above the
  // viewport we switch the nav to `position:fixed` (see .app-nav-pinned).
  const sentinelRef = useRef(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!sentinelRef.current) return;
      setPinned(sentinelRef.current.getBoundingClientRect().top <= 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <div ref={sentinelRef} style={{ height: 0 }} aria-hidden="true" />
    <nav className={`app-nav${pinned ? " app-nav-pinned" : ""}`}>
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
    </>
  );
}
