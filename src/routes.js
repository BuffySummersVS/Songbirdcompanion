export const SITE_URL = "https://www.songbirdcompanion.co.uk";

// Only these pages get real, crawlable URLs; everything else stays on "/"
// and is reached purely through client-side state. Adding an entry here
// also adds it to the generated sitemap.xml (see scripts/generate-sitemap.js).
export const PAGE_ROUTES = {
  "Heroes": "/heroes",
  "Maps": "/maps",
  "Team Comps": "/team-comps",
};

export const HEROES_BASE = PAGE_ROUTES["Heroes"];
export const MAPS_BASE = PAGE_ROUTES["Maps"];

export const heroPath = (id) => `${HEROES_BASE}/${id}`;
export const mapPath = (id) => `${MAPS_BASE}/${id}`;

export const SITE_NAME = "SongBird";
export const SITE_TITLE = "SongBird — Overwatch Companion";
export const SITE_DESCRIPTION =
  "SongBird — an unofficial Overwatch companion app for strategy, stats, counters, and team comps.";

// Cuts to the last full word within maxLength so meta descriptions never
// end mid-word; shared by the client-side title/meta sync and the
// build-time static page generator so both always agree.
export function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text ?? "";
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export function heroMeta(hero) {
  return {
    title: `${hero.name} — Overwatch Hero Guide | ${SITE_NAME}`,
    description: truncate(`${hero.name} is a ${hero.role} hero in Overwatch. ${hero.lore ?? ""}`, 155),
    canonical: `${SITE_URL}${heroPath(hero.id)}`,
    path: heroPath(hero.id),
  };
}

export function mapMeta(map) {
  return {
    title: `${map.name} — Overwatch Map Guide | ${SITE_NAME}`,
    description: truncate(map.description ?? "", 155),
    canonical: `${SITE_URL}${mapPath(map.id)}`,
    path: mapPath(map.id),
  };
}

export function homeMeta() {
  return {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    canonical: `${SITE_URL}/`,
    path: "/",
  };
}
