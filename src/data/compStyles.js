export const COMP_STYLES = [
  {
    id: "dive",
    name: "Dive",
    color: "#4fc3f7",
    icon: "⚡",
    description:
      "A high-mobility composition that attacks from multiple angles simultaneously, targeting isolated or exposed enemies — particularly the enemy backline. Dive comps rely on coordinated engage timing, burst damage, and strong escape potential.",
    howItPlays:
      "The dive tank (D.Va, Winston, Wrecking Ball) lunges onto the enemy supports while flanker DPS (Tracer, Genji, Sombra) attack from a second angle. Mobile supports (Kiriko, Lúcio, Juno) keep diving heroes alive and enable rapid repositioning. The goal is to pick off a target before the enemy can react, then disengage safely.",
    bestMaps:
      "Open maps with vertical space and multiple flanking routes — Numbani, Ilios, Nepal, Lijiang Tower, Samoa, Colosseo.",
    exampleHeroes: ["Winston", "D.Va", "Tracer", "Genji", "Kiriko"],
  },
  {
    id: "brawl",
    name: "Brawl",
    color: "#ef5350",
    icon: "💥",
    description:
      "A close-range, high-pressure composition that wins fights through sustained healing and raw melee dominance. Brawl teams fight together, heal through incoming damage, and overwhelm enemies in tight spaces.",
    howItPlays:
      "A main tank anchors the frontline (Reinhardt, Orisa, Mauga) while brawl DPS deal burst damage in close corridors (Reaper, Mei, Junkrat). High-throughput supports sustain the front line (Mercy, Moira, Ana). The team advances as a unit, using ultimate abilities to break defensive holds and wipe enemies.",
    bestMaps:
      "Indoor and corridor-heavy maps with tight chokepoints — King's Row, Eichenwalde, Rialto, Dorado, Junkertown, Runasapi.",
    exampleHeroes: ["Reinhardt", "Roadhog", "Reaper", "Mei", "Moira"],
  },
  {
    id: "poke",
    name: "Poke",
    color: "#ab47bc",
    icon: "🎯",
    description:
      "A long-range harassment composition that deals steady damage from safe distances, winning through attrition and forcing enemies to push into unfavourable positions. Poke comps avoid direct engagement and chip away at health until the enemy has no safe options left.",
    howItPlays:
      "Snipers and long-range DPS (Widowmaker, Hanzo, Ashe, Sojourn) constantly pressure enemies who expose themselves, supported by a barrier tank (Sigma, Orisa, Ramattra) that provides cover. Supports contribute from range too — Ana with long-range heals and anti-grenades, Zenyatta with Discord Orb to amplify damage.",
    bestMaps:
      "Maps with long open sightlines — Circuit Royal, Havana, Route 66, Watchpoint: Gibraltar, Esperança, Suravasa.",
    exampleHeroes: ["Sigma", "Widowmaker", "Hanzo", "Zenyatta", "Ana"],
  },
  {
    id: "hybrid",
    name: "Hybrid",
    color: "#ff9c00",
    icon: "🔄",
    description:
      "A flexible, balanced composition that adapts to the enemy team rather than committing to one style. Hybrid teams can transition between engagement ranges and are versatile enough to counter multiple strategies. Less predictable but requires strong communication.",
    howItPlays:
      "Mix frontline stability with a dive threat or poke option. The team reads enemy positioning, fights at the best range given the situation, and switches tactics mid-fight if the first approach fails. A Hybrid team might brawl in choke then dive the backline once supports are out of position.",
    bestMaps:
      "Multi-area maps that support multiple playstyles — Blizzard World, Midtown, New Queen Street, Hollywood, Paraíso.",
    exampleHeroes: ["D.Va", "Junker Queen", "Soldier: 76", "Baptiste", "Kiriko"],
  },
];

// Which comp styles each hero fits well (by hero.id)
// A hero can fit multiple styles
export const HERO_COMP_FIT = {
  // ── Tanks ──────────────────────────────────────────
  dva:          ["dive", "hybrid"],
  doomfist:     ["dive"],
  domina:       ["brawl", "hybrid"],
  hazard:       ["hybrid", "brawl"],
  junkerqueen:  ["brawl", "hybrid"],
  mauga:        ["brawl"],
  orisa:        ["brawl", "poke"],
  ramattra:     ["brawl", "poke"],
  reinhardt:    ["brawl"],
  roadhog:      ["brawl", "hybrid"],
  sigma:        ["poke", "hybrid"],
  winston:      ["dive"],
  wreckingball: ["dive"],
  zarya:        ["dive", "brawl"],

  // ── Damage ─────────────────────────────────────────
  anran:        ["poke", "hybrid"],
  ashe:         ["poke", "hybrid"],
  bastion:      ["brawl", "poke"],
  cassidy:      ["hybrid", "brawl"],
  echo:         ["dive", "hybrid"],
  emre:         ["hybrid", "poke"],
  freja:        ["poke", "hybrid"],
  genji:        ["dive"],
  hanzo:        ["poke"],
  junkrat:      ["brawl", "hybrid"],
  mei:          ["brawl"],
  pharah:       ["poke", "dive"],
  reaper:       ["brawl", "dive"],
  shion:        ["dive", "hybrid"],
  sierra:       ["poke", "hybrid"],
  sojourn:      ["poke", "hybrid"],
  soldier76:    ["hybrid", "poke"],
  sombra:       ["dive"],
  symmetra:     ["brawl"],
  torbjorn:     ["brawl", "poke"],
  tracer:       ["dive"],
  vendetta:     ["dive", "hybrid"],
  venture:      ["dive", "hybrid"],
  widowmaker:   ["poke"],

  // ── Support ────────────────────────────────────────
  ana:          ["poke", "brawl"],
  baptiste:     ["poke", "hybrid"],
  brigitte:     ["brawl"],
  illari:       ["poke", "hybrid"],
  jetpackcat:   ["dive", "hybrid"],
  juno:         ["dive", "hybrid"],
  kiriko:       ["dive", "hybrid"],
  lifeweaver:   ["hybrid", "brawl"],
  lucio:        ["dive", "brawl"],
  mercy:        ["brawl", "hybrid"],
  mizuki:       ["brawl", "hybrid"],
  moira:        ["brawl", "dive"],
  wuyang:       ["brawl", "hybrid"],
  zenyatta:     ["poke"],
};
