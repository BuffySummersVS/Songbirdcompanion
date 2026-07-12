// Registry of every SongBird easter egg. `id` is the persistence key.
export const DESKTOP_EASTER_EGGS = [
  { id: "hanzo",      hero: "Hanzo",       name: "Ryū ga waga teki wo kurau! (Desktop)" },
  { id: "ana",        hero: "Ana",         name: "Nap Time (Desktop)" },
  { id: "torbjorn",   hero: "Torbjörn",    name: "Is it hot in here? (Desktop)" },
  { id: "kiriko",     hero: "Kiriko",      name: "Healing Shower (Desktop)" },
  { id: "mercy",      hero: "Mercy",       name: "Heavenly Glow (Desktop)" },
  { id: "reinhardt",  hero: "Reinhardt",   name: "Shield and Shatter (Desktop)" },
  { id: "junkrat",    hero: "Junkrat",     name: "Fire in the Hole! (Desktop)" },
  { id: "dva",        hero: "D.Va",        name: "Pressing Q (Desktop)" },
  { id: "genji",      hero: "Genji",       name: "I Need Healing (Desktop)" },
  { id: "sombra",     hero: "Sombra",      name: "Access Granted (Desktop)" },
  { id: "lucio",      hero: "Lúcio",       name: "Sound Barrier (Desktop)" },
  { id: "widowmaker", hero: "Widowmaker",  name: "Perfect Shot (Desktop)" },
  { id: "happybirthday", hero: "SongBird", name: "Happy Birthday (Desktop)" },
  { id: "christmas",     hero: "SongBird", name: "Silent Night (Desktop)" },
  { id: "halloween",     hero: "SongBird", name: "Halloween (Desktop)" },
  { id: "newyears",      hero: "SongBird", name: "New Years Eve (Desktop)" },
  { id: "aprilfools",    hero: "SongBird", name: "April Fools (Desktop)" },
  { id: "valentines",    hero: "SongBird", name: "Valentines (Desktop)" },
];

export const DESKTOP_EASTER_EGG_COUNT = DESKTOP_EASTER_EGGS.length;

// Populated as mobile-exclusive eggs are built. Each entry's `name` should
// carry the same "(Mobile)" suffix convention as DESKTOP_EASTER_EGGS uses
// "(Desktop)", so the two variants stay distinguishable wherever a name is
// shown (grid cards, toasts, friend-view boxes).
export const MOBILE_EASTER_EGGS = [
  { id: "lifeweaver", hero: "Lifeweaver", name: "Tree of Life (Mobile)" },
  { id: "mizuki",     hero: "Mizuki",     name: "Healing Kasa (Mobile)" },
];

export const MOBILE_EASTER_EGG_COUNT = MOBILE_EASTER_EGGS.length;
