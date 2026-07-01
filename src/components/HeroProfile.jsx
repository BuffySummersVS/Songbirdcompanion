import { useEffect, useState, lazy, Suspense } from "react";
import { heroes } from "../data/heroes";
import { getSubrole } from "../data/heroSubroles";

const HeroAcademyCard = lazy(() => import("./academy/HeroAcademyCard.jsx"));

function CWChip({ name, variant }) {
  const h = heroes.find(x => x.name === name);
  return (
    <div className={`cw-chip ${variant}`}>
      {h && <img src={h.image} alt={name} />}
      <span>{name}</span>
    </div>
  );
}

function CounterWatchPopup({ hero, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="cw-popup-overlay" onClick={onClose}>
      <div className="cw-popup-panel" onClick={e => e.stopPropagation()}>
        <div className="cw-popup-header">
          <img src={hero.image} alt={hero.name} className="cw-popup-img" />
          <div>
            <p className="eyebrow">{hero.role}</p>
            <h3>{hero.name} — CounterWatch</h3>
          </div>
          <button type="button" className="cw-popup-close" onClick={onClose}>✕</button>
        </div>

        <div className="cw-panels">
          <div className="cw-panel cw-strong">
            <h3>Strong Against</h3>
            <p className="cw-panel-sub">{hero.name} counters these heroes</p>
            <div className="cw-chip-list">
              {hero.counters?.length
                ? hero.counters.map(n => <CWChip key={n} name={n} variant="strong" />)
                : <p className="cw-empty">No data yet</p>}
            </div>
          </div>

          <div className="cw-panel cw-weak">
            <h3>Weak Against</h3>
            <p className="cw-panel-sub">These heroes counter {hero.name}</p>
            <div className="cw-chip-list">
              {hero.counteredBy?.length
                ? hero.counteredBy.map(n => <CWChip key={n} name={n} variant="weak" />)
                : <p className="cw-empty">No data yet</p>}
            </div>
          </div>

          <div className="cw-panel cw-synergy">
            <h3>Best Teammates</h3>
            <p className="cw-panel-sub">Heroes that synergize with {hero.name}</p>
            <div className="cw-chip-list">
              {hero.synergies?.length
                ? hero.synergies.map(n => <CWChip key={n} name={n} variant="synergy" />)
                : <p className="cw-empty">No data yet</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroProfile({ hero, onClose, onOpenCounterWatch, onOpenHeroAcademy, userId }) {
  const [cwOpen, setCwOpen] = useState(false);
  const [prevHero, setPrevHero] = useState(hero);

  if (hero !== prevHero) {
    setPrevHero(hero);
    setCwOpen(false);
  }

  useEffect(() => {
    if (!hero) return;
    function handleKey(e) {
      if (e.key === "Escape") {
        if (cwOpen) setCwOpen(false);
        else onClose();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [hero, onClose, cwOpen]);

  if (!hero) return null;

  const subrole = getSubrole(hero);

  return (
    <div className="profile-overlay" onClick={onClose}>
      <section className="hero-profile modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="close-profile" onClick={onClose}>
          Close
        </button>

        <div className="hero-profile-top">
          <div className={`hero-profile-portrait ${hero.role.toLowerCase()}`}>
            <img src={hero.image} alt={hero.name} className="hero-profile-image" />
          </div>
          <div>
            <p className="eyebrow">{hero.role}</p>
            <h2>{hero.name}</h2>
            {hero.lore && (
              <>
                <p className="hero-lore-label">Backstory</p>
                <p className="hero-lore">{hero.lore}</p>
              </>
            )}
          </div>
        </div>

        <div className="profile-stats-grid">
          <div className="stat-box">
            <span>Health</span>
            <strong>{hero.health ?? "—"}</strong>
          </div>
          <div className="stat-box">
            <span>Armour</span>
            <strong>{hero.armour ?? "—"}</strong>
          </div>
          <div className="stat-box">
            <span>Shields</span>
            <strong>{hero.shields ?? "—"}</strong>
          </div>
          <div className="stat-box">
            <span>Difficulty</span>
            <strong>
              {typeof hero.difficulty === "number"
                ? "★".repeat(hero.difficulty) + "☆".repeat(5 - hero.difficulty)
                : hero.difficulty ?? "—"}
            </strong>
          </div>
        </div>

        {subrole && (
          <div className="profile-section subrole-section">
            <h3>Subrole</h3>
            <div className="subrole-card">
              <div className="subrole-badge-row">
                <span className={`subrole-badge role-${hero.role.toLowerCase()}`}>
                  {subrole.name}
                </span>
              </div>
              <p className="subrole-description">{subrole.description}</p>
              <div className="subrole-detail-row">
                <div className="subrole-detail">
                  <span className="subrole-detail-label">Team role</span>
                  <p>{subrole.interaction}</p>
                </div>
                <div className="subrole-detail">
                  <span className="subrole-detail-label">Role passive</span>
                  <p>{subrole.rolePassive}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="profile-section">
          <h3>Primary Weapon</h3>
          {hero.primaryWeapon ? (
            <div className="ability-detail">
              <h4>{hero.primaryWeapon.name}</h4>
              <p>{hero.primaryWeapon.description}</p>
              <p><strong>Damage:</strong> {hero.primaryWeapon.damage}</p>
              <p><strong>Cooldown:</strong> {hero.primaryWeapon.cooldown}</p>
            </div>
          ) : (
            <p>Primary weapon info coming soon.</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Abilities</h3>
          {hero.abilities?.length ? (
            <div className="ability-list">
              {hero.abilities.map(ability => (
                <div className="ability-detail" key={ability.name}>
                  <h4>{ability.name}</h4>
                  <p>{ability.description}</p>
                  <p><strong>Damage:</strong> {ability.damage}</p>
                  <p><strong>Cooldown:</strong> {ability.cooldown}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Ability info coming soon.</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Ultimate</h3>
          {hero.ultimate ? (
            <div className="ability-detail">
              <h4>{hero.ultimate.name}</h4>
              <p>{hero.ultimate.description}</p>
              <p><strong>Damage:</strong> {hero.ultimate.damage}</p>
            </div>
          ) : (
            <p>Ultimate info coming soon.</p>
          )}
        </div>

        {hero.perks && (
          <div className="profile-section">
            <h3>Perks</h3>
            <div className="perk-tiers">
              {[
                { key: "minor", label: "Minor", sublabel: "Choose one at Level 2" },
                { key: "major", label: "Major", sublabel: "Choose one at Level 3" },
              ].map(({ key, label, sublabel }) => (
                <div className="perk-tier" key={key}>
                  <div className="perk-tier-header">
                    <span className={`perk-badge ${key}`}>{label}</span>
                    <span className="perk-tier-sub">{sublabel}</span>
                  </div>
                  <div className="perk-cards">
                    {hero.perks[key].map(perk => (
                      <div className={`perk-card ${key}`} key={perk.name}>
                        <h4>{perk.name}</h4>
                        <p>{perk.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="profile-section">
          <h3>CounterWatch</h3>
          <p className="profile-cw-sub">
            View {hero.name}'s full counter matchups and best teammates.
          </p>
          <div className="profile-cw-actions">
            <button
              type="button"
              className="profile-cw-popup-btn"
              onClick={() => setCwOpen(true)}
            >
              View Matchup Info
            </button>
            {onOpenCounterWatch && (
              <button
                type="button"
                className="profile-cw-nav-btn"
                onClick={() => onOpenCounterWatch(hero)}
              >
                Open in CounterWatch →
              </button>
            )}
          </div>
        </div>

        {cwOpen && (
          <CounterWatchPopup hero={hero} onClose={() => setCwOpen(false)} />
        )}

        <Suspense fallback={<div className="profile-section hero-academy-section aca-loading">Loading Hero Academy…</div>}>
          <HeroAcademyCard
            hero={hero}
            userId={userId}
            onOpenHeroAcademy={onOpenHeroAcademy}
          />
        </Suspense>
      </section>
    </div>
  );
}
