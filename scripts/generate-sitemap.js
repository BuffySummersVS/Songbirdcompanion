import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SITE_URL, PAGE_ROUTES, heroPath, mapPath } from "../src/routes.js";

const rootDir = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const heroes = JSON.parse(readFileSync(path.join(rootDir, "src/data/heroes.json"), "utf8"));
const maps = JSON.parse(readFileSync(path.join(rootDir, "src/data/maps.json"), "utf8"));

const routes = [
  "/",
  ...Object.values(PAGE_ROUTES),
  ...heroes.map(hero => heroPath(hero.id)),
  ...maps.map(map => mapPath(map.id)),
];

const urlEntries = routes
  .map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = path.join(rootDir, "public", "sitemap.xml");
writeFileSync(outPath, xml);
console.log(`Generated public/sitemap.xml with ${routes.length} URLs.`);
