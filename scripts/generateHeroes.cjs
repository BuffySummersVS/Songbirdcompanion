const fs = require("fs");
const path = require("path");

const heroes = [
  ["domina", "Domina", "Tank"],
  ["hazard", "Hazard", "Tank"],
  ["junkerqueen", "Junker Queen", "Tank"],
  ["mauga", "Mauga", "Tank"],
  ["orisa", "Orisa", "Tank"],
  ["ramattra", "Ramattra", "Tank"],
  ["reinhardt", "Reinhardt", "Tank"],
  ["roadhog", "Roadhog", "Tank"],
  ["sigma", "Sigma", "Tank"],
  ["winston", "Winston", "Tank"],
  ["wreckingball", "Wrecking Ball", "Tank"],
  ["zarya", "Zarya", "Tank"],

  ["anran", "Anran", "Damage"],
  ["ashe", "Ashe", "Damage"],
  ["bastion", "Bastion", "Damage"],
  ["cassidy", "Cassidy", "Damage"],
  ["echo", "Echo", "Damage"],
  ["emre", "Emre", "Damage"],
  ["freja", "Freja", "Damage"],
  ["genji", "Genji", "Damage"],
  ["hanzo", "Hanzo", "Damage"],
  ["junkrat", "Junkrat", "Damage"],
  ["mei", "Mei", "Damage"],
  ["pharah", "Pharah", "Damage"],
  ["reaper", "Reaper", "Damage"],
  ["shion", "Shion", "Damage"],
  ["sierra", "Sierra", "Damage"],
  ["sojourn", "Sojourn", "Damage"],
  ["soldier76", "Soldier: 76", "Damage"],
  ["sombra", "Sombra", "Damage"],
  ["symmetra", "Symmetra", "Damage"],
  ["torbjorn", "Torbjörn", "Damage"],
  ["tracer", "Tracer", "Damage"],
  ["vendetta", "Vendetta", "Damage"],
  ["venture", "Venture", "Damage"],
  ["widowmaker", "Widowmaker", "Damage"],

  ["ana", "Ana", "Support"],
  ["baptiste", "Baptiste", "Support"],
  ["brigitte", "Brigitte", "Support"],
  ["illari", "Illari", "Support"],
  ["jetpackcat", "Jetpack Cat", "Support"],
  ["juno", "Juno", "Support"],
  ["kiriko", "Kiriko", "Support"],
  ["lifeweaver", "Lifeweaver", "Support"],
  ["lucio", "Lúcio", "Support"],
  ["mercy", "Mercy", "Support"],
  ["mizuki", "Mizuki", "Support"],
  ["moira", "Moira", "Support"],
  ["wuyang", "Wuyang", "Support"],
  ["zenyatta", "Zenyatta", "Support"],
];

const heroesDir = path.join(__dirname, "..", "src", "data", "heroes");

for (const [id, name, role] of heroes) {
  const fileContent = `export default {
  id: "${id}",
  name: "${name}",
  role: "${role}",
  imageId: "${id}",

  health: null,
  armour: null,
  shields: null,
  difficulty: "Soon",

  abilities: [],
};
`;

  fs.writeFileSync(path.join(heroesDir, `${id}.js`), fileContent);
}

const allHeroIds = ["dva", "doomfist", ...heroes.map(([id]) => id)];

const imports = allHeroIds
  .map((id) => `import ${id} from "./heroes/${id}";`)
  .join("\n");

const arrayItems = allHeroIds.join(",\n  ");

const heroesIndex = `${imports}

const image = (id) =>
  new URL(\`../assets/heroes/\${id}.png\`, import.meta.url).href;

const heroData = [
  ${arrayItems},
];

export const heroes = heroData.map((hero) => ({
  ...hero,
  image: image(hero.imageId),
}));
`;

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "heroes.js"), heroesIndex);

console.log("Hero files created and heroes.js updated.");