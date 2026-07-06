import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SITE_URL, HEROES_BASE, MAPS_BASE, heroMeta, mapMeta, homeMeta } from "../src/routes.js";

const rootDir = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

const heroes = JSON.parse(readFileSync(path.join(rootDir, "src/data/heroes.json"), "utf8"));
const maps = JSON.parse(readFileSync(path.join(rootDir, "src/data/maps.json"), "utf8"));
const template = readFileSync(path.join(distDir, "index.html"), "utf8");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function breadcrumb(sectionName, sectionPath, pageName, pagePath) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: sectionName, item: `${SITE_URL}${sectionPath}` },
      { "@type": "ListItem", position: 3, name: pageName, item: `${SITE_URL}${pagePath}` },
    ],
  };
}

function renderPage({ title, description, canonical, structuredData }) {
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<script type="application\/ld\+json" id="structured-data">.*?<\/script>/s,
    `<script type="application/ld+json" id="structured-data">${JSON.stringify(structuredData)}</script>`
  );
  return html;
}

function writePage(relativeDir, html) {
  const dir = path.join(distDir, relativeDir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), html);
}

// Homepage — rewrite in place with a WebSite structured data block.
const home = homeMeta();
writeFileSync(
  path.join(distDir, "index.html"),
  renderPage({
    ...home,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SongBird",
      url: home.canonical,
      description: home.description,
    },
  })
);

// One static page per hero.
for (const hero of heroes) {
  const meta = heroMeta(hero);
  writePage(
    path.join(HEROES_BASE.slice(1), hero.id),
    renderPage({
      ...meta,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          breadcrumb("Heroes", HEROES_BASE, hero.name, meta.path),
          {
            "@type": "WebPage",
            name: meta.title,
            description: meta.description,
            url: meta.canonical,
            isPartOf: { "@type": "WebSite", name: "SongBird", url: `${SITE_URL}/` },
          },
        ],
      },
    })
  );
}

// One static page per map.
for (const map of maps) {
  const meta = mapMeta(map);
  writePage(
    path.join(MAPS_BASE.slice(1), map.id),
    renderPage({
      ...meta,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          breadcrumb("Maps", MAPS_BASE, map.name, meta.path),
          {
            "@type": "WebPage",
            name: meta.title,
            description: meta.description,
            url: meta.canonical,
            isPartOf: { "@type": "WebSite", name: "SongBird", url: `${SITE_URL}/` },
          },
        ],
      },
    })
  );
}

console.log(`Generated ${heroes.length} hero pages and ${maps.length} map pages in dist/.`);
