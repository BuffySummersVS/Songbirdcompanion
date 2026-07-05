import { useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useFocusTrap } from "../hooks/useFocusTrap";
import overviewImg  from "../assets/competitive/competitive-overview.png";
import heroSrImg    from "../assets/competitive/competitive-hero-skill-rating.png";
import modifiersImg from "../assets/competitive/competitive-modifiers.png";
import drivesImg    from "../assets/competitive/competitive-drives.png";

// Sources: Blizzard official articles (Season 9, 12, 18 competitive updates),
// Blizzard Weekly Recall (Challenger Tier), Liquipedia Feb 2026 patch notes,
// PCGamesN rank guide, GameRant drives guide, Dexerto Hero SR feature (June 2026).

const SECTIONS = [
  {
    id: "overview",
    title: "Competitive Overview",
    intro:
      "Competitive Play is Overwatch's ranked mode where every match contributes to a visible skill rank. There are two queue types: Role Queue (separate Tank, Damage, and Support ranks) and Open Queue (a single universal rank). Seasons run for approximately eight to nine weeks, and your rank resets at the start of each new season.",
    details: [
      "Eight skill tiers in ascending order: Bronze, Silver, Gold, Platinum, Diamond, Master, Grandmaster, and Champion.",
      "Each tier (except Champion) contains five numbered divisions — Division 5 is the lowest entry point; reaching Division 1 promotes you to the next tier.",
      "Champion sits above Grandmaster 1 and has no numbered divisions.",
      "Matchmaking uses a hidden MMR (Matchmaking Rating). The visible progress bar and division are a display layer on top of this underlying value.",
      "After every match, a Rank Information screen shows a percentage progress bar indicating how much rank was gained or lost.",
      "The system aims to match players within one to two skill tiers of each other.",
      "Draws do not affect rank progress.",
    ],
    image: overviewImg,
  },
  {
    id: "hero-sr",
    title: "Hero Skill Rating",
    intro:
      "Introduced in Season 18 (August 2025), Hero Skill Rating (Hero SR) is a per-hero performance metric displayed on a 0–5,000 scale. Each hero you play earns its own independent rating, giving you a detailed breakdown of your strongest and weakest characters.",
    details: [
      "Hero SR is a display metric only — it does not affect matchmaking, which continues to use hidden MMR.",
      "Your top 3 most-played heroes per match earn or lose Hero SR, provided each was played for at least 3 minutes.",
      "Five placement matches per hero are required to unlock its official Hero SR. A Predicted SR preview is shown during the placement phase.",
      "Hero SR is tracked separately between Role Queue and Open Queue — each mode maintains independent values per hero.",
      "Hero SR resets at every mid-year rank reset.",
      "Tier thresholds — Bronze: 0–1,499 · Silver: 1,500–1,999 · Gold: 2,000–2,499 · Platinum: 2,500–2,999 · Diamond: 3,000–3,499 · Master: 3,500–3,999 · Grandmaster: 4,000–4,499 · Champion: 4,500–5,000.",
    ],
    image: heroSrImg,
  },
  {
    id: "modifiers",
    title: "Competitive Modifiers",
    intro:
      "After each match, the Rank Information screen displays one or more modifiers that explain why you gained or lost the specific amount of rank shown. The system calculates a pre-match prediction about which team is favoured — modifiers reflect how the outcome compared to that prediction.",
    details: [
      "Uphill Battle — You won despite not being the favoured side. Bonus rank gain for beating expectations.",
      "Consolation — You weren't favoured and you lost. Rank loss is reduced since the outcome was expected.",
      "Reversal — You were favoured but still lost. Rank loss is increased to reflect the upset.",
      "Expected — You were favoured and won. Standard result; normal rank gain.",
      "Winning Trend — Bonus for a high win rate or consecutive wins. Accelerates rank gains during a streak.",
      "Losing Trend — Penalty for a high loss rate or consecutive losses. Accelerates rank losses during a slump.",
      "Calibration — Your rank is uncertain (during placement or after inactivity). Rank adjustments swing larger to find your correct tier quickly.",
      "Demotion Protection — Warning that you are at the edge of dropping a division or tier on the next loss.",
      "Leaver Compensation — A player not in your group left during the match. Your rank loss is reduced.",
      "Wide — Your group has a high rank disparity. Gains and losses are reduced for all group members.",
      "Pressure — At very high or very low rank, results nudge you toward the average to prevent extreme inflation or deflation.",
      "New / Reworked Map — You lost on a recently added or reworked map. Rank loss is reduced to account for unfamiliarity.",
    ],
    image: modifiersImg,
  },
  {
    id: "drives",
    title: "Competitive Drives",
    intro:
      "Competitive Drives are limited-time events held at the end of each season. By playing Competitive matches during the Drive window, you accumulate Drive Score and unlock checkpoints that reward Competitive Points and exclusive Signature cosmetics.",
    details: [
      "One Drive runs per season, available in both Core Competitive Play (Role Queue) and Stadium Ranked.",
      "Drive Score is earned on wins (approximately 10× the rank percentage gained) and reduced on losses (approximately 5× the rank percentage lost).",
      "Six checkpoints at Drive Scores of 300, 700, 1,200, 1,700, 2,200, and 2,700.",
      "Checkpoint protection: once a checkpoint is reached, your Drive Score cannot fall below it — losses will not take away an already-earned checkpoint.",
      "Competitive Points are awarded at Checkpoints 1, 3, and 5. Signature cosmetics are awarded at Checkpoints 2, 4, and 6.",
      "Signature tiers: Signature (Checkpoint 2) → Advanced Signature (Checkpoint 4) → Elite Signature (Checkpoint 6).",
      "Signatures are stylised backings for your BattleTag that appear in Name Cards and hero portraits.",
      "A Roman numeral on your Signature tracks how many Drives you have completed. Every 7th Drive completion awards a special Insignia and resets the numeral counter.",
    ],
    image: drivesImg,
  },
];

export default function CompetitiveGuide() {
  const [lightbox, setLightbox] = useState(null);

  useEscapeKey(() => setLightbox(null), !!lightbox);
  const panelRef = useFocusTrap(!!lightbox);

  const activeSection = lightbox ? SECTIONS.find(s => s.id === lightbox) : null;

  return (
    <>
      <div className="control-panel">
        <h2>Competitive Guide</h2>
        <p>
          A beginner-friendly walkthrough of how Overwatch Competitive mode
          works — from skill tiers and Hero SR to rank modifiers and Drives.
          Click any image to view it in full size.
        </p>
      </div>

      <div className="uig-gallery">
        {SECTIONS.map(section => (
          <div className="uig-gallery-card" key={section.id}>
            <div className="uig-gallery-text">
              <h3>{section.title}</h3>
              <p>{section.intro}</p>
              <ul className="cg-details">
                {section.details.map((detail, i) => (
                  <li key={i} className="cg-detail-item">{detail}</li>
                ))}
              </ul>
            </div>
            <div
              className="uig-gallery-img-wrap"
              role="button"
              tabIndex={0}
              onClick={() => setLightbox(section.id)}
              onKeyDown={e => e.key === "Enter" && setLightbox(section.id)}
            >
              <img
                src={section.image}
                alt={section.title}
                className="uig-gallery-img"
              />
              <div className="uig-gallery-overlay">
                <span className="uig-gallery-zoom">Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && activeSection && (
        <div
          className="uig-lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <div
            ref={panelRef}
            className="uig-lightbox-panel"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <div className="uig-lightbox-header">
              <span className="uig-lightbox-title">{activeSection.title}</span>
              <button
                type="button"
                className="uig-lightbox-close"
                onClick={() => setLightbox(null)}
              >
                ✕ Close
              </button>
            </div>
            <img
              src={activeSection.image}
              alt={activeSection.title}
              className="uig-lightbox-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
