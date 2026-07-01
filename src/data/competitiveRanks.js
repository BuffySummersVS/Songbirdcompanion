const badgeUrl = (filename) =>
  new URL(`../assets/competitive/Competitive badges/${filename}`, import.meta.url).href;

export const RANK_ROLES = [
  { id: 'tank',      label: 'Tank' },
  { id: 'damage',    label: 'Damage' },
  { id: 'support',   label: 'Support' },
  { id: 'openQueue', label: 'Open Queue' },
];

export const RANK_TIERS = [
  { id: 'bronze',      label: 'Bronze' },
  { id: 'silver',      label: 'Silver' },
  { id: 'gold',        label: 'Gold' },
  { id: 'platinum',    label: 'Platinum' },
  { id: 'diamond',     label: 'Diamond' },
  { id: 'master',      label: 'Master' },
  { id: 'grandmaster', label: 'Grandmaster' },
  { id: 'champion',    label: 'Champion' },
  { id: 'top500',      label: 'Top 500' },
];

// Top 500 is a leaderboard placement, not a tier — it has no division.
export const RANK_DIVISIONS = ['5', '4', '3', '2', '1'];

export const RANK_BADGES = {
  bronze:      badgeUrl('bronze.png'),
  silver:      badgeUrl('silver.png'),
  gold:        badgeUrl('gold.png'),
  platinum:    badgeUrl('platinum.png'),
  diamond:     badgeUrl('diamond.png'),
  master:      badgeUrl('master.png'),
  grandmaster: badgeUrl('grandmaster.png'),
  champion:    badgeUrl('champion.png'),
  top500:      badgeUrl('top500.png'),
};

export function rankSupportsDivision(rankId) {
  return !!rankId && rankId !== 'top500';
}

export function rankLabel(rankId) {
  return RANK_TIERS.find(r => r.id === rankId)?.label ?? '';
}

// Same swatch set as the Academy Badges panel, for a consistent customisation UX.
export const RANK_PANEL_COLORS = [
  { label: 'Orange', value: '#ff9c00' },
  { label: 'Blue',   value: '#60a5fa' },
  { label: 'Purple', value: '#a78bfa' },
  { label: 'Green',  value: '#4ade80' },
  { label: 'Pink',   value: '#f472b6' },
  { label: 'Red',    value: '#f87171' },
];

export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function emptyCompetitiveRanks() {
  const empty = { rank: '', division: '', badge: '' };
  return {
    tank: { ...empty },
    damage: { ...empty },
    support: { ...empty },
    openQueue: { ...empty },
  };
}
