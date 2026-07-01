const fs = require("fs");
const path = require("path");

const heroesDir = path.join(__dirname, "..", "src", "data", "heroes");

const files = fs
  .readdirSync(heroesDir)
  .filter((file) => file.endsWith(".js"));

for (const file of files) {
  const id = file.replace(".js", "");
  const filePath = path.join(heroesDir, file);
  const current = fs.readFileSync(filePath, "utf8");

  const nameMatch = current.match(/name:\s*"([^"]+)"/);
  const roleMatch = current.match(/role:\s*"([^"]+)"/);

  const name = nameMatch ? nameMatch[1] : id;
  const role = roleMatch ? roleMatch[1] : "Unknown";

  const content = `export default {
  id: "${id}",
  name: "${name}",
  role: "${role}",
  imageId: "${id}",

  health: null,
  armour: null,
  shields: null,
  movementSpeed: "Soon",
  difficulty: null,

  primaryWeapon: {
    name: "Soon",
    type: "Soon",
    ammo: "Soon",
    damage: "Soon",
    cooldown: "Soon",
    description: "Primary weapon information coming soon.",
  },

  passive: {
    name: "Soon",
    description: "Passive information coming soon.",
  },

  abilities: [],

  ultimate: {
    name: "Soon",
    type: "Ultimate",
    damage: "Soon",
    description: "Ultimate information coming soon.",
  },

  counters: [],
  counteredBy: [],
  synergies: [],
  strongMaps: [],
  weakMaps: [],
  patchHistory: [],
};
`;

  fs.writeFileSync(filePath, content);
}

console.log("All hero files upgraded to rich format.");