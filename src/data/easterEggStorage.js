const KEY = "sb_easter_eggs_unlocked";
export const EASTER_EGG_EVENT = "sb-easter-egg-unlocked";

export function getUnlockedEasterEggs() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter(id => typeof id === "string") : [];
  } catch {
    return [];
  }
}

// Returns true only the first time this egg is unlocked (false if already known).
export function unlockEasterEgg(id) {
  const unlocked = getUnlockedEasterEggs();
  if (unlocked.includes(id)) return false;
  const next = [...unlocked, id];
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    return false;
  }
  window.dispatchEvent(new CustomEvent(EASTER_EGG_EVENT, { detail: { id } }));
  return true;
}
