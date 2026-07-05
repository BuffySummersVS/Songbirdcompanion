import { useRef } from "react";
import { useEasterEggs } from "../contexts/EasterEggContext";

const WIDOW_DWELL_MS = 2000;
const MERCY_DWELL_MS = 3500;

export default function HeroCard({ hero, onSelectHero }) {
  const roleClass = hero.role.toLowerCase();
  const eggs = useEasterEggs();
  const dwellTimer = useRef(null);

  const isMercy = hero.id === "mercy";
  const isWidow = hero.id === "widowmaker";
  const showEggHover = !!eggs?.isDesktop && (isMercy || isWidow);

  function handleMouseEnter() {
    if (!showEggHover) return;
    if (isMercy) {
      dwellTimer.current = setTimeout(() => eggs.trigger("mercy"), MERCY_DWELL_MS);
    } else if (isWidow) {
      dwellTimer.current = setTimeout(() => eggs.trigger("widowmaker"), WIDOW_DWELL_MS);
    }
  }

  function handleMouseLeave() {
    if (dwellTimer.current) {
      clearTimeout(dwellTimer.current);
      dwellTimer.current = null;
    }
  }

  return (
    <button
      type="button"
      className={`hero-card ${roleClass}`}
      onClick={() => onSelectHero(hero)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-portrait-wrap">
        <img src={hero.image} alt={hero.name} className="hero-portrait" loading="lazy" decoding="async" />
      </div>

      <div>
        <h3>{hero.name}</h3>
        <p>{hero.role}</p>
      </div>
    </button>
  );
}