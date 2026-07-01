import { SUBROLES } from "./subroles";

const MAP = {
  // ── Tanks ──────────────────────────────────────────
  dva:          "Dive Tank",
  doomfist:     "Dive Tank",
  domina:       "Main Tank",
  hazard:       "Off Tank",
  junkerqueen:  "Off Tank",
  mauga:        "Main Tank",
  orisa:        "Main Tank",
  ramattra:     "Main Tank",
  reinhardt:    "Main Tank",
  roadhog:      "Off Tank",
  sigma:        "Off Tank",
  winston:      "Dive Tank",
  wreckingball: "Dive Tank",
  zarya:        "Off Tank",

  // ── Damage ─────────────────────────────────────────
  anran:        "Projectile",
  ashe:         "Sniper",
  bastion:      "Builder",
  cassidy:      "Hitscan",
  echo:         "Aerial Assault",
  emre:         "Hitscan",
  freja:        "Sniper",
  genji:        "Flanker",
  hanzo:        "Sniper",
  junkrat:      "Projectile",
  mei:          "Projectile",
  pharah:       "Aerial Assault",
  reaper:       "Flanker",
  shion:        "Flanker",
  sierra:       "Hitscan",
  sojourn:      "Hybrid DPS",
  soldier76:    "Hitscan",
  sombra:       "Flanker",
  symmetra:     "Builder",
  torbjorn:     "Builder",
  tracer:       "Flanker",
  vendetta:     "Flanker",
  venture:      "Flanker",
  widowmaker:   "Sniper",

  // ── Support ────────────────────────────────────────
  ana:          "Flex Support",
  baptiste:     "Flex Support",
  brigitte:     "Battle Support",
  illari:       "Flex Support",
  jetpackcat:   "Mobile Support",
  juno:         "Mobile Support",
  kiriko:       "Mobile Support",
  lifeweaver:   "Main Support",
  lucio:        "Mobile Support",
  mercy:        "Main Support",
  mizuki:       "Main Support",
  moira:        "Battle Support",
  wuyang:       "Main Support",
  zenyatta:     "Flex Support",
};

export function getSubrole(hero) {
  const name = MAP[hero.id];
  if (!name) return null;
  const data = SUBROLES[name];
  if (!data) return null;
  return { name, ...data };
}
