import { useState, useRef, useEffect } from "react";

const CONTACT_EMAIL = "songbirdcompanion@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591916001131";
const INSTAGRAM_URL = "https://www.instagram.com/songbirdcompanion";
const DISCORD_URL = "https://discord.gg/V6sK7mU9k";

const FEATHER_HOVER_DELAY = 1500;
const FEATHER_COUNT = 8;

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState(null); // 'email' | 'discord' | null
  const [feathers, setFeathers] = useState([]);
  const hoverTimer = useRef(null);
  const nextFeatherId = useRef(0);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  function copyToClipboard(field, value) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }).catch(() => {});
  }

  function handleFeatherHoverStart() {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      const batch = Array.from({ length: FEATHER_COUNT }, () => ({
        id: nextFeatherId.current++,
        left: Math.random() * 100,
        topStart: -(5 + Math.random() * 25),
        shade: 0.65 + Math.random() * 0.7,
        size: 36 + Math.random() * 28,
        duration: 3.5 + Math.random() * 6,
        delay: Math.random() * 3.5,
        sway: (Math.random() < 0.5 ? -1 : 1) * (0.6 + Math.random() * 1.4),
      }));
      setFeathers(prev => [...prev, ...batch]);
    }, FEATHER_HOVER_DELAY);
  }

  function handleFeatherHoverEnd() {
    clearTimeout(hoverTimer.current);
  }

  function removeFeather(id) {
    setFeathers(prev => prev.filter(f => f.id !== id));
  }

  return (
    <>
      <div className="control-panel">
        <h2>Contact SongBird</h2>
        <p>
          Got feedback, found a bug, or just want to say hi? Reach the SongBird team
          through any of the channels below.
        </p>
      </div>

      <div className="links-grid">
        <div className="link-card link-contact">
          <h3>Email</h3>
          <p>Send us a message directly — feedback, bug reports, and suggestions are all welcome.</p>
          <button
            type="button"
            className={`link-card-btn${copiedField === "email" ? " copied" : ""}`}
            onClick={() => copyToClipboard("email", CONTACT_EMAIL)}
            onMouseEnter={handleFeatherHoverStart}
            onMouseLeave={handleFeatherHoverEnd}
          >
            {copiedField === "email" ? "✓ Copied!" : `Copy: ${CONTACT_EMAIL}`}
          </button>
        </div>
        <div className="link-card link-contact">
          <h3>Discord</h3>
          <p>Join the SongBird Companion Discord to chat with the community and the team.</p>
          <button
            type="button"
            className={`link-card-btn${copiedField === "discord" ? " copied" : ""}`}
            onClick={() => copyToClipboard("discord", DISCORD_URL)}
            onMouseEnter={handleFeatherHoverStart}
            onMouseLeave={handleFeatherHoverEnd}
          >
            {copiedField === "discord" ? "✓ Copied!" : "Copy Invite Link"}
          </button>
        </div>
        <div className="link-card link-contact">
          <h3>Facebook</h3>
          <p>Follow the SongBird Companion page for updates and to get in touch.</p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card-btn"
            onMouseEnter={handleFeatherHoverStart}
            onMouseLeave={handleFeatherHoverEnd}
          >
            Visit Page ↗
          </a>
        </div>
        <div className="link-card link-contact">
          <h3>Instagram</h3>
          <p>Follow SongBird Companion on Instagram for updates and behind-the-scenes content.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card-btn"
            onMouseEnter={handleFeatherHoverStart}
            onMouseLeave={handleFeatherHoverEnd}
          >
            Visit Page ↗
          </a>
        </div>
      </div>

      {feathers.length > 0 && (
        <div className="sb-feather-layer" aria-hidden="true">
          {feathers.map(f => (
            <span
              key={f.id}
              className="sb-feather"
              style={{
                left: `${f.left}%`,
                top: `${f.topStart}vh`,
                fontSize: `${f.size}px`,
                "--feather-shade": f.shade,
                "--feather-sway": f.sway,
                animationDuration: `${f.duration}s`,
                animationDelay: `${f.delay}s`,
              }}
              onAnimationEnd={() => removeFeather(f.id)}
            >
              🪶
            </span>
          ))}
        </div>
      )}
    </>
  );
}
