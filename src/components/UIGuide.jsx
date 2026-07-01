import { useState, useEffect } from "react";
import { UI_GUIDES } from "../data/uiGuides";
import scoreboardImg from "../assets/ui-guides/scoreboard-guide.png";
import hudImg from "../assets/ui-guides/gameplay-hud-guide.png";

const IMAGES = {
  "scoreboard":   scoreboardImg,
  "gameplay-hud": hudImg,
};

export default function UIGuide() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <div className="control-panel">
        <h2>Understanding UI</h2>
        <p>
          Visual guides to help you understand what every element of the
          Overwatch interface means. Click any image to view it in full size.
        </p>
      </div>

      <div className="uig-gallery">
        {UI_GUIDES.map(guide => (
          <div className="uig-gallery-card" key={guide.id}>
            <div className="uig-gallery-text">
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
            </div>
            <div
              className="uig-gallery-img-wrap"
              role="button"
              tabIndex={0}
              onClick={() => setLightbox(guide.id)}
              onKeyDown={e => e.key === "Enter" && setLightbox(guide.id)}
            >
              <img
                src={IMAGES[guide.id]}
                alt={guide.title}
                className="uig-gallery-img"
              />
              <div className="uig-gallery-overlay">
                <span className="uig-gallery-zoom">Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (() => {
        const guide = UI_GUIDES.find(g => g.id === lightbox);
        return (
          <div
            className="uig-lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <div
              className="uig-lightbox-panel"
              onClick={e => e.stopPropagation()}
            >
              <div className="uig-lightbox-header">
                <span className="uig-lightbox-title">{guide.title}</span>
                <button
                  type="button"
                  className="uig-lightbox-close"
                  onClick={() => setLightbox(null)}
                >
                  ✕ Close
                </button>
              </div>
              <img
                src={IMAGES[lightbox]}
                alt={guide.title}
                className="uig-lightbox-img"
              />
            </div>
          </div>
        );
      })()}
    </>
  );
}
