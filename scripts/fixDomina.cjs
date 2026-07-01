const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "data", "heroes", "domina.js");

const content = `export default {
  id: "domina",
  name: "Domina",
  role: "Tank",
  imageId: "domina",

  health: 100,
  armour: 0,
  shields: 400,
  movementSpeed: "5.5 m/s",
  difficulty: 4,

  primaryWeapon: {
    name: "Photon Magnum",
    type: "Medium-range beam weapon",
    ammo: "Magazine based",
    damage: "60 DPS beam, culminating in a high-impact shot",
    cooldown: "Reload",
    description:
      "A medium-range hard-light beam that builds into a high-impact shot. Best used for controlled poke and sustained pressure.",
  },

  passive: {
    name: "Reconstruction",
    description:
      "Dealing ability damage restores Domina's shield health, rewarding accurate use of Crystal Charge and Sonic Repulsors.",
  },

  abilities: [
    {
      name: "Barrier Array",
      type: "Segmented barrier",
      damage: "None",
      cooldown: "14 sec",
      duration: "8 sec",
      description:
        "Constructs a large segmented hard-light barrier. Each panel can be broken separately, allowing Domina to control sightlines and protect her team.",
    },
    {
      name: "Sonic Repulsors",
      type: "Crowd control",
      damage: "40 knockback damage, 80 if enemy hits a wall",
      cooldown: "Cooldown based",
      duration: "Instant",
      description:
        "Pushes enemies away from Domina. If enemies are knocked into terrain, they take increased damage and are briefly stunned.",
    },
    {
      name: "Crystal Charge",
      type: "Explosive projectile",
      damage: "Damage over time while travelling, then explosive detonation",
      cooldown: "Cooldown based",
      duration: "Manual detonation",
      description:
        "Projects an explosive hard-light crystal that can be reactivated to detonate. Useful for poking through barriers and pressuring grouped enemies.",
    },
  ],

  ultimate: {
    name: "Panopticon",
    type: "Ultimate / containment",
    damage: "Up to 300 explosion damage on expiration",
    description:
      "Fires a hard-light barrier that imprisons enemies, blocks outside support and projectiles, then detonates when it expires.",
  },

  counters: ["Reinhardt", "Doomfist", "Winston"],
  counteredBy: ["Sombra", "Ramattra", "Reaper", "Ana"],
  synergies: ["Widowmaker", "Baptiste", "Sojourn", "Zenyatta"],
  strongMaps: ["Circuit Royal", "Havana", "Shambali Monastery"],
  weakMaps: ["King's Row", "Lijiang Control Center", "Nepal Sanctum"],

  patchHistory: [
    {
      date: "2026-02-10",
      change: "Domina added to the Tank roster.",
    },
    {
      date: "2026-02-13",
      change: "Barrier Array panel health reduced from 250 to 225.",
    },
    {
      date: "2026-02-24",
      change: "Panopticon ultimate cost increased by 12%.",
    },
  ],
};
`;

fs.writeFileSync(filePath, content);

console.log("Domina profile corrected with proper health and shield split.");