import { heroes } from './heroes.js';
import { RANK_BADGES } from './competitiveRanks.js';

// Kept only so accounts created before the Overwatch-themed avatar system
// (type: 'preset') still render correctly — no longer offered as a choice.
const LEGACY_AVATARS = [
  { id: 'wizard',    src: new URL('../assets/avatars/wizard.svg',    import.meta.url).href },
  { id: 'robot',     src: new URL('../assets/avatars/robot.svg',     import.meta.url).href },
  { id: 'cat',       src: new URL('../assets/avatars/cat.svg',       import.meta.url).href },
  { id: 'knight',    src: new URL('../assets/avatars/knight.svg',    import.meta.url).href },
  { id: 'scientist', src: new URL('../assets/avatars/scientist.svg', import.meta.url).href },
  { id: 'dragon',    src: new URL('../assets/avatars/dragon.svg',    import.meta.url).href },
];

const DEFAULT_HERO_ID = 'reinhardt';
export const DEFAULT_AVATAR = { type: 'hero', value: DEFAULT_HERO_ID };
const DEFAULT_SRC = heroes.find(h => h.id === DEFAULT_HERO_ID)?.image;

export function getAvatarSrc(avatar) {
  if (!avatar) return DEFAULT_SRC;
  if (avatar.type === 'upload') return avatar.value || DEFAULT_SRC;
  if (avatar.type === 'hero') return heroes.find(h => h.id === avatar.value)?.image ?? DEFAULT_SRC;
  if (avatar.type === 'rank') return RANK_BADGES[avatar.value] ?? DEFAULT_SRC;
  return LEGACY_AVATARS.find(a => a.id === avatar.value)?.src ?? DEFAULT_SRC;
}
