import { SUBROLES } from "./subroles";

// Sourced from in-game hero-info screenshots (OWCA/hero info, 2026-08-12),
// with D.Mon, Ramattra, Wrecking Ball, and Brigitte confirmed separately
// after their subrole line was cut off in every captured screenshot.
const MAP = {
  // ── Tanks ──────────────────────────────────────────
  dmon:         "Stalwart",
  dva:          "Initiator",
  doomfist:     "Initiator",
  domina:       "Stalwart",
  hazard:       "Initiator",
  junkerqueen:  "Stalwart",
  mauga:        "Bruiser",
  orisa:        "Bruiser",
  ramattra:     "Stalwart",
  reinhardt:    "Stalwart",
  roadhog:      "Bruiser",
  sigma:        "Stalwart",
  winston:      "Initiator",
  wreckingball: "Initiator",
  zarya:        "Bruiser",

  // ── Damage ─────────────────────────────────────────
  anran:        "Flanker",
  ashe:         "Sharpshooter",
  bastion:      "Specialist",
  cassidy:      "Sharpshooter",
  echo:         "Recon",
  emre:         "Specialist",
  freja:        "Recon",
  genji:        "Flanker",
  hanzo:        "Sharpshooter",
  junkrat:      "Specialist",
  mei:          "Specialist",
  pharah:       "Recon",
  reaper:       "Flanker",
  shion:        "Flanker",
  sierra:       "Recon",
  sojourn:      "Sharpshooter",
  soldier76:    "Specialist",
  sombra:       "Recon",
  symmetra:     "Specialist",
  torbjorn:     "Specialist",
  tracer:       "Flanker",
  vendetta:     "Flanker",
  venture:      "Flanker",
  widowmaker:   "Sharpshooter",

  // ── Support ────────────────────────────────────────
  ana:          "Tactician",
  baptiste:     "Tactician",
  brigitte:     "Survivor",
  illari:       "Survivor",
  jetpackcat:   "Tactician",
  juno:         "Survivor",
  kiriko:       "Medic",
  lifeweaver:   "Medic",
  lucio:        "Tactician",
  mercy:        "Medic",
  mizuki:       "Survivor",
  moira:        "Medic",
  wuyang:       "Survivor",
  zenyatta:     "Tactician",
};

export function getSubrole(hero) {
  const name = MAP[hero.id];
  if (!name) return null;
  const data = SUBROLES[name];
  if (!data) return null;
  return { name, ...data };
}
