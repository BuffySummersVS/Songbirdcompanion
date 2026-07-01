const fs = require("fs");
const path = require("path");

const heroesDir = path.join(__dirname, "src", "data", "heroes");

const tankPassive = {
  name: "Tank",
  description:
    "Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.",
};

const tanks = {
  dva: {
    id: "dva",
    name: "D.Va",
    role: "Tank",
    imageId: "dva",
    health: 375,
    armour: 225,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 2,
    primaryWeapon: {
      name: "Fusion Cannons",
      type: "Automatic shotguns",
      ammo: "Infinite",
      damage: "Close-range pellet damage",
      cooldown: "None",
      description:
        "Twin short-range cannons with infinite ammo. Strong up close but weaker at range.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Boosters",
        type: "Mobility",
        damage: "Impact damage",
        cooldown: "Short cooldown",
        description:
          "Fly forward, knock enemies back, chase targets, escape danger, or contest high ground.",
      },
      {
        name: "Defense Matrix",
        type: "Defensive utility",
        damage: "None",
        cooldown: "Resource meter",
        description:
          "Deletes many incoming projectiles in front of D.Va, including dangerous burst damage and some ultimates.",
      },
      {
        name: "Micro Missiles",
        type: "Burst damage",
        damage: "Rocket volley",
        cooldown: "Medium cooldown",
        description:
          "Fires a volley of explosive missiles that can be used while firing Fusion Cannons or Boosters.",
      },
    ],
    ultimate: {
      name: "Self-Destruct",
      type: "Ultimate",
      damage: "Massive area damage",
      description:
        "D.Va ejects and launches her mech, which explodes after a short delay.",
    },
    secondaryUltimate: {
      name: "Call Mech",
      type: "Ultimate",
      damage: "Landing damage",
      description:
        "Pilot D.Va calls down a new mech. The landing can damage nearby enemies.",
    },
    counters: ["Winston", "Widowmaker", "Pharah", "Bastion"],
    counteredBy: ["Zarya", "Symmetra", "Mei", "Sombra"],
    synergies: ["Winston", "Tracer", "Genji", "Ana", "Kiriko"],
    strongMaps: ["Watchpoint: Gibraltar", "Dorado", "Numbani"],
    weakMaps: ["King's Row", "Lijiang Control Center"],
    patchHistory: [],
  },

  doomfist: {
    id: "doomfist",
    name: "Doomfist",
    role: "Tank",
    imageId: "doomfist",
    health: 375,
    armour: 0,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 4,
    primaryWeapon: {
      name: "Hand Cannon",
      type: "Short-range projectile shotgun",
      ammo: "4 shots, regenerating",
      damage: "Close-range burst",
      cooldown: "Ammo regenerates over time",
      description:
        "Fires short-range bursts from Doomfist's knuckles. Best used between ability combos.",
    },
    passive: {
      name: "The Best Defense...",
      description:
        "Doomfist gains temporary overhealth when he deals damage with abilities.",
    },
    abilities: [
      {
        name: "Rocket Punch",
        type: "Mobility / crowd control",
        damage: "Impact and wall-slam damage",
        cooldown: "Short cooldown",
        description:
          "Charge and punch forward, knocking enemies back. Damage increases if the enemy hits a wall.",
      },
      {
        name: "Seismic Slam",
        type: "Mobility / engage",
        damage: "Area impact damage",
        cooldown: "Medium cooldown",
        description:
          "Leap and slam into enemies, creating space and setting up follow-up pressure.",
      },
      {
        name: "Power Block",
        type: "Defensive",
        damage: "None",
        cooldown: "Medium cooldown",
        description:
          "Block frontal damage. Blocking enough damage empowers Rocket Punch.",
      },
    ],
    ultimate: {
      name: "Meteor Strike",
      type: "Ultimate",
      damage: "Area impact damage",
      description:
        "Leap into the sky, then crash down onto a targeted area.",
    },
    counters: ["Zenyatta", "Ana", "Widowmaker", "Ashe"],
    counteredBy: ["Orisa", "Sombra", "Ana", "Roadhog"],
    synergies: ["Tracer", "Sombra", "Kiriko", "Lucio"],
    strongMaps: ["Numbani", "Dorado", "Oasis"],
    weakMaps: ["Circuit Royal", "Havana"],
    patchHistory: [],
  },

  domina: {
    id: "domina",
    name: "Domina",
    role: "Tank",
    imageId: "domina",
    health: "Custom hero",
    armour: "Custom hero",
    shields: "Custom hero",
    movementSpeed: "Custom hero",
    difficulty: 3,
    primaryWeapon: {
      name: "Custom Weapon",
      type: "Control tank weapon",
      ammo: "Custom",
      damage: "Custom",
      cooldown: "None",
      description:
        "Domina is treated as a custom/future hero in SongBird. Replace these values when official data exists.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Space Control",
        type: "Tank utility",
        damage: "Custom",
        cooldown: "Custom",
        description:
          "Placeholder custom ability for controlling enemy positioning.",
      },
    ],
    ultimate: {
      name: "Domination",
      type: "Ultimate",
      damage: "Custom",
      description:
        "Placeholder ultimate for a control-focused tank profile.",
    },
    counters: ["Reinhardt", "Sigma", "Cassidy"],
    counteredBy: ["Ana", "Zenyatta", "Reaper", "Zarya"],
    synergies: ["Lucio", "Kiriko", "Mei"],
    strongMaps: ["King's Row", "Lijiang Tower"],
    weakMaps: ["Circuit Royal", "Junkertown"],
    patchHistory: [],
  },

  hazard: {
    id: "hazard",
    name: "Hazard",
    role: "Tank",
    imageId: "hazard",
    health: 475,
    armour: 225,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Bonespur",
      type: "Close-range shotgun",
      ammo: "Magazine based",
      damage: "Close-range spread damage",
      cooldown: "Reload",
      description:
        "A close-range shotgun used to pressure enemies while Hazard brawls for space.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Jagged Wall",
        type: "Area control",
        damage: "Wall impact / spike damage",
        cooldown: "Medium cooldown",
        description:
          "Creates a damaging wall that blocks routes, disrupts movement, and controls space.",
      },
      {
        name: "Violent Leap",
        type: "Mobility",
        damage: "Leap impact damage",
        cooldown: "Medium cooldown",
        description:
          "Leap forward to engage, escape, contest high ground, or pressure vulnerable enemies.",
      },
      {
        name: "Spike Guard",
        type: "Defensive pressure",
        damage: "Return spike damage",
        cooldown: "Resource-based",
        description:
          "Reduces incoming damage from the front while threatening nearby enemies with spikes.",
      },
    ],
    ultimate: {
      name: "Downpour",
      type: "Ultimate",
      damage: "Area disruption damage",
      description:
        "Launches an area-control ultimate that disrupts and pressures grouped enemies.",
    },
    counters: ["Zenyatta", "Ana", "Widowmaker"],
    counteredBy: ["Ana", "Zarya", "Mei", "Reaper"],
    synergies: ["Lucio", "Kiriko", "Juno"],
    strongMaps: ["King's Row", "New Junk City", "Lijiang Tower"],
    weakMaps: ["Havana", "Circuit Royal"],
    patchHistory: [],
  },

  junkerqueen: {
    id: "junkerqueen",
    name: "Junker Queen",
    role: "Tank",
    imageId: "junkerqueen",
    health: 525,
    armour: 0,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Scattergun",
      type: "Pump-action shotgun",
      ammo: "Magazine based",
      damage: "Close-range shotgun damage",
      cooldown: "Reload",
      description:
        "A strong close-range shotgun that rewards aggressive brawling.",
    },
    passive: {
      name: "Adrenaline Rush",
      description:
        "Junker Queen heals from wound damage she deals to enemies.",
    },
    abilities: [
      {
        name: "Jagged Blade",
        type: "Projectile / wound",
        damage: "Direct hit and wound damage",
        cooldown: "Short cooldown",
        description:
          "Throw a magnetic blade. Recalling it can pull enemies and apply wounds.",
      },
      {
        name: "Commanding Shout",
        type: "Team utility",
        damage: "None",
        cooldown: "Long cooldown",
        description:
          "Grants temporary health and movement speed to Junker Queen and nearby allies.",
      },
      {
        name: "Carnage",
        type: "Melee / wound",
        damage: "Axe swing and wound damage",
        cooldown: "Medium cooldown",
        description:
          "Swing a large axe in front of Junker Queen, damaging and wounding enemies.",
      },
    ],
    ultimate: {
      name: "Rampage",
      type: "Ultimate",
      damage: "Wound damage over time",
      description:
        "Charge forward, wound enemies, and apply anti-heal.",
    },
    counters: ["Reinhardt", "Zenyatta", "Ana"],
    counteredBy: ["Ana", "Kiriko", "Zarya", "Mei"],
    synergies: ["Lucio", "Kiriko", "Reaper", "Mei"],
    strongMaps: ["King's Row", "Lijiang Control Center"],
    weakMaps: ["Circuit Royal", "Havana"],
    patchHistory: [],
  },

  mauga: {
    id: "mauga",
    name: "Mauga",
    role: "Tank",
    imageId: "mauga",
    health: 425,
    armour: 250,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Incendiary and Volatile Chainguns",
      type: "Automatic chainguns",
      ammo: "Large magazine",
      damage: "Sustained hitscan damage",
      cooldown: "Reload",
      description:
        "One chaingun ignites enemies while the other deals critical damage to burning targets.",
    },
    passive: {
      name: "Berserker",
      description:
        "Mauga gains temporary overhealth when dealing critical damage.",
    },
    abilities: [
      {
        name: "Overrun",
        type: "Mobility / crowd control",
        damage: "Stomp impact damage",
        cooldown: "Medium cooldown",
        description:
          "Charge forward unstoppably, then stomp to knock enemies down.",
      },
      {
        name: "Cardiac Overdrive",
        type: "Sustain / team utility",
        damage: "None",
        cooldown: "Long cooldown",
        description:
          "Reduces incoming damage and lets Mauga and nearby allies heal from damage dealt.",
      },
    ],
    ultimate: {
      name: "Cage Fight",
      type: "Ultimate",
      damage: "None",
      description:
        "Creates a barrier arena that traps nearby enemies and gives Mauga unlimited ammo.",
    },
    counters: ["Reinhardt", "Roadhog", "Winston"],
    counteredBy: ["Ana", "Zenyatta", "Sigma", "D.Va"],
    synergies: ["Bastion", "Reaper", "Kiriko", "Baptiste"],
    strongMaps: ["King's Row", "Lijiang Control Center"],
    weakMaps: ["Circuit Royal", "Watchpoint: Gibraltar"],
    patchHistory: [],
  },

  orisa: {
    id: "orisa",
    name: "Orisa",
    role: "Tank",
    imageId: "orisa",
    health: 275,
    armour: 350,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 2,
    primaryWeapon: {
      name: "Augmented Fusion Driver",
      type: "Automatic projectile weapon",
      ammo: "Heat meter",
      damage: "Sustained projectile damage",
      cooldown: "Overheat reload",
      description:
        "Automatic projectile weapon that uses heat instead of traditional ammo.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Energy Javelin",
        type: "Projectile / crowd control",
        damage: "Projectile and wall impact damage",
        cooldown: "Medium cooldown",
        description:
          "Throw a javelin that knocks enemies back and can stun if they hit a wall.",
      },
      {
        name: "Fortify",
        type: "Defensive",
        damage: "None",
        cooldown: "Long cooldown",
        description:
          "Reduces damage taken, grants bonus health, and prevents many crowd-control effects.",
      },
      {
        name: "Javelin Spin",
        type: "Defensive / mobility",
        damage: "Contact damage",
        cooldown: "Medium cooldown",
        description:
          "Spin the javelin to destroy projectiles, push enemies, and move forward.",
      },
    ],
    ultimate: {
      name: "Terra Surge",
      type: "Ultimate",
      damage: "Charged area damage",
      description:
        "Pull enemies in, fortify, then release a charged area attack.",
    },
    counters: ["Doomfist", "Reinhardt", "Roadhog"],
    counteredBy: ["Zarya", "Symmetra", "Echo", "Zenyatta"],
    synergies: ["Baptiste", "Illari", "Sojourn", "Cassidy"],
    strongMaps: ["King's Row", "Esperança", "Midtown"],
    weakMaps: ["Watchpoint: Gibraltar", "Dorado"],
    patchHistory: [],
  },

  ramattra: {
    id: "ramattra",
    name: "Ramattra",
    role: "Tank",
    imageId: "ramattra",
    health: 250,
    armour: 225,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Void Accelerator",
      type: "Projectile staff",
      ammo: "Magazine based",
      damage: "Sustained projectile damage",
      cooldown: "Reload",
      description:
        "Fires a stream of projectiles from Ramattra's staff.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Void Barrier",
        type: "Barrier",
        damage: "None",
        cooldown: "Long cooldown",
        description:
          "Create a temporary barrier at a targeted location.",
      },
      {
        name: "Nemesis Form",
        type: "Transformation",
        damage: "Pummel damage",
        cooldown: "Long cooldown",
        description:
          "Transform into Nemesis Form, gaining armour and replacing primary fire with piercing punches.",
      },
      {
        name: "Ravenous Vortex",
        type: "Area control",
        damage: "Damage over time",
        cooldown: "Medium cooldown",
        description:
          "Fire a nanosphere that creates a slowing field and pulls airborne enemies down.",
      },
    ],
    ultimate: {
      name: "Annihilation",
      type: "Ultimate",
      damage: "Area damage over time",
      description:
        "Enter Nemesis Form and create an energy swarm that damages nearby enemies.",
    },
    counters: ["Reinhardt", "Sigma", "Brigitte"],
    counteredBy: ["Ana", "Zenyatta", "Orisa", "Roadhog"],
    synergies: ["Lucio", "Kiriko", "Mei", "Reaper"],
    strongMaps: ["King's Row", "Nepal", "Lijiang Tower"],
    weakMaps: ["Circuit Royal", "Havana"],
    patchHistory: [],
  },

  reinhardt: {
    id: "reinhardt",
    name: "Reinhardt",
    role: "Tank",
    imageId: "reinhardt",
    health: 350,
    armour: 275,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 2,
    primaryWeapon: {
      name: "Rocket Hammer",
      type: "Melee weapon",
      ammo: "Infinite",
      damage: "Close-range cleave damage",
      cooldown: "Swing recovery",
      description:
        "A large melee hammer that cleaves multiple enemies in front of Reinhardt.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Barrier Field",
        type: "Barrier",
        damage: "None",
        cooldown: "Barrier resource",
        description:
          "Hold up a large frontal energy barrier to protect allies and block damage.",
      },
      {
        name: "Charge",
        type: "Mobility / pin",
        damage: "Pin and wall impact damage",
        cooldown: "Medium cooldown",
        description:
          "Charge forward and pin an enemy, dealing heavy damage if they hit a wall.",
      },
      {
        name: "Fire Strike",
        type: "Projectile damage",
        damage: "Piercing projectile damage",
        cooldown: "Charge based",
        description:
          "Launch a flaming projectile that pierces enemies and can build ultimate charge quickly.",
      },
    ],
    ultimate: {
      name: "Earthshatter",
      type: "Ultimate",
      damage: "Frontal cone damage and knockdown",
      description:
        "Slam the ground to knock down enemies in front of Reinhardt.",
    },
    counters: ["Sigma", "Zarya", "Ramattra"],
    counteredBy: ["Orisa", "Ramattra", "Pharah", "Bastion"],
    synergies: ["Lucio", "Mei", "Reaper", "Baptiste"],
    strongMaps: ["King's Row", "Lijiang Control Center", "Eichenwalde"],
    weakMaps: ["Dorado", "Watchpoint: Gibraltar", "Junkertown"],
    patchHistory: [],
  },

  roadhog: {
    id: "roadhog",
    name: "Roadhog",
    role: "Tank",
    imageId: "roadhog",
    health: 650,
    armour: 0,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 2,
    primaryWeapon: {
      name: "Scrap Gun",
      type: "Shotgun",
      ammo: "Magazine based",
      damage: "Close-range spread damage",
      cooldown: "Reload",
      description:
        "A shotgun-style weapon that deals heavy damage at close range.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Chain Hook",
        type: "Pick tool",
        damage: "Hook impact damage",
        cooldown: "Medium cooldown",
        description:
          "Throw a hook to pull an enemy toward Roadhog for a follow-up shot.",
      },
      {
        name: "Take a Breather",
        type: "Self-sustain",
        damage: "None",
        cooldown: "Resource-based",
        description:
          "Heal yourself and reduce incoming damage while inhaling.",
      },
      {
        name: "Pig Pen",
        type: "Trap / area control",
        damage: "Trap damage over time",
        cooldown: "Medium cooldown",
        description:
          "Place a trap that slows and damages enemies who trigger it.",
      },
    ],
    ultimate: {
      name: "Whole Hog",
      type: "Ultimate",
      damage: "High knockback spread damage",
      description:
        "Fire a continuous stream of scrap that knocks enemies back.",
    },
    counters: ["Doomfist", "Winston", "Wrecking Ball"],
    counteredBy: ["Ana", "Zenyatta", "Orisa", "Mauga"],
    synergies: ["Kiriko", "Mei", "Cassidy", "Ana"],
    strongMaps: ["Ilios Well", "Nepal Sanctum", "Lijiang Garden"],
    weakMaps: ["Circuit Royal", "Junkertown"],
    patchHistory: [],
  },

  sigma: {
    id: "sigma",
    name: "Sigma",
    role: "Tank",
    imageId: "sigma",
    health: 350,
    armour: 0,
    shields: 275,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Hyperspheres",
      type: "Bouncing explosive projectiles",
      ammo: "2 shots",
      damage: "Explosive projectile damage",
      cooldown: "Short reload rhythm",
      description:
        "Launch two bouncing spheres that explode after a short distance or on contact.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Experimental Barrier",
        type: "Barrier",
        damage: "None",
        cooldown: "Barrier resource / redeploy",
        description:
          "Send out and reposition a floating barrier to control sightlines.",
      },
      {
        name: "Kinetic Grasp",
        type: "Defensive",
        damage: "None",
        cooldown: "Long cooldown",
        description:
          "Absorb incoming projectiles and convert absorbed damage into temporary shields.",
      },
      {
        name: "Accretion",
        type: "Projectile / crowd control",
        damage: "Rock impact damage",
        cooldown: "Medium cooldown",
        description:
          "Gather and throw a mass of debris that knocks enemies down.",
      },
    ],
    ultimate: {
      name: "Gravitic Flux",
      type: "Ultimate",
      damage: "Lift and slam damage",
      description:
        "Lift enemies in a targeted area and slam them back down.",
    },
    counters: ["Mauga", "Bastion", "Widowmaker", "Ashe"],
    counteredBy: ["Winston", "Doomfist", "Sombra", "Reinhardt"],
    synergies: ["Baptiste", "Zen", "Ashe", "Widowmaker"],
    strongMaps: ["Circuit Royal", "Havana", "Junkertown"],
    weakMaps: ["Lijiang Control Center", "Nepal Village"],
    patchHistory: [],
  },

  winston: {
    id: "winston",
    name: "Winston",
    role: "Tank",
    imageId: "winston",
    health: 350,
    armour: 225,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 2,
    primaryWeapon: {
      name: "Tesla Cannon",
      type: "Short-range beam / cleave",
      ammo: "Magazine based",
      damage: "Short-range cleave damage",
      cooldown: "Reload",
      description:
        "Automatically damages enemies in a short cone, making it strong into mobile or hard-to-aim targets.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Jump Pack",
        type: "Mobility",
        damage: "Landing damage",
        cooldown: "Short cooldown",
        description:
          "Leap to engage, escape, contest high ground, or pressure backline heroes.",
      },
      {
        name: "Barrier Projector",
        type: "Barrier",
        damage: "None",
        cooldown: "Medium cooldown",
        description:
          "Deploy a bubble barrier that blocks enemy fire and creates temporary safe space.",
      },
    ],
    ultimate: {
      name: "Primal Rage",
      type: "Ultimate",
      damage: "Melee knockback damage",
      description:
        "Gain a large health pool and leap repeatedly, knocking enemies around with melee attacks.",
    },
    counters: ["Widowmaker", "Genji", "Tracer", "Zenyatta"],
    counteredBy: ["Reaper", "Bastion", "Mauga", "Roadhog"],
    synergies: ["Tracer", "Genji", "Sombra", "Ana", "Kiriko"],
    strongMaps: ["Watchpoint: Gibraltar", "Dorado", "Numbani"],
    weakMaps: ["King's Row", "Lijiang Control Center"],
    patchHistory: [],
  },

  wreckingball: {
    id: "wreckingball",
    name: "Wrecking Ball",
    role: "Tank",
    imageId: "wreckingball",
    health: 450,
    armour: 275,
    shields: 0,
    movementSpeed: "5.5 m/s",
    difficulty: 5,
    primaryWeapon: {
      name: "Quad Cannons",
      type: "Automatic hitscan weapons",
      ammo: "Magazine based",
      damage: "Sustained hitscan damage",
      cooldown: "Reload",
      description:
        "Automatic cannons used to finish targets after disruption combos.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Roll",
        type: "Mobility",
        damage: "Collision damage at high speed",
        cooldown: "Form swap",
        description:
          "Transform into a ball and roll quickly around the map.",
      },
      {
        name: "Grappling Claw",
        type: "Mobility",
        damage: "High-speed collision damage",
        cooldown: "Short cooldown",
        description:
          "Attach a claw to terrain and swing to build speed, boop enemies, and engage from unusual angles.",
      },
      {
        name: "Adaptive Shield",
        type: "Defensive",
        damage: "None",
        cooldown: "Medium cooldown",
        description:
          "Gain temporary shields based on nearby enemies.",
      },
      {
        name: "Piledriver",
        type: "Crowd control / burst",
        damage: "Slam damage",
        cooldown: "Medium cooldown",
        description:
          "Slam downward from the air, damaging and launching enemies upward.",
      },
    ],
    ultimate: {
      name: "Minefield",
      type: "Ultimate",
      damage: "Mine explosion damage",
      description:
        "Deploy a field of proximity mines that control space and punish movement.",
    },
    counters: ["Widowmaker", "Zenyatta", "Ana", "Ashe"],
    counteredBy: ["Sombra", "Mei", "Roadhog", "Cassidy"],
    synergies: ["Tracer", "Sombra", "Genji", "Zenyatta"],
    strongMaps: ["Ilios", "Lijiang Garden", "Dorado"],
    weakMaps: ["King's Row", "Nepal Village"],
    patchHistory: [],
  },

  zarya: {
    id: "zarya",
    name: "Zarya",
    role: "Tank",
    imageId: "zarya",
    health: 250,
    armour: 0,
    shields: 325,
    movementSpeed: "5.5 m/s",
    difficulty: 3,
    primaryWeapon: {
      name: "Particle Cannon",
      type: "Beam and explosive projectile",
      ammo: "Magazine based",
      damage: "Beam damage scales with energy",
      cooldown: "Reload",
      description:
        "A beam weapon that becomes much stronger as Zarya gains energy from her barriers.",
    },
    passive: tankPassive,
    abilities: [
      {
        name: "Particle Barrier",
        type: "Self barrier",
        damage: "None",
        cooldown: "Charge based",
        description:
          "Place a barrier on yourself. Damage absorbed increases Zarya's energy.",
      },
      {
        name: "Projected Barrier",
        type: "Ally barrier",
        damage: "None",
        cooldown: "Charge based",
        description:
          "Place a barrier on an ally. Damage absorbed increases Zarya's energy.",
      },
    ],
    ultimate: {
      name: "Graviton Surge",
      type: "Ultimate",
      damage: "Small impact / control effect",
      description:
        "Launch a gravity bomb that pulls enemies together for team follow-up.",
    },
    counters: ["D.Va", "Orisa", "Sigma", "Genji"],
    counteredBy: ["Winston", "Reinhardt", "Bastion", "Pharah"],
    synergies: ["Hanzo", "Genji", "Reaper", "Lucio"],
    strongMaps: ["King's Row", "Lijiang Control Center"],
    weakMaps: ["Watchpoint: Gibraltar", "Dorado"],
    patchHistory: [],
  },
};

for (const [id, hero] of Object.entries(tanks)) {
  const filePath = path.join(heroesDir, `${id}.js`);
  const content = `export default ${JSON.stringify(hero, null, 2)};
`;
  fs.writeFileSync(filePath, content);
}

console.log("Tank hero files updated successfully.");
