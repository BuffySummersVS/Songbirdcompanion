export default {
  id: 'hero-roadhog-l2-weapon',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Scrap Gun & Trash Compactor',
  subtitle: 'Mastering Roadhog\'s reworked weapon',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Scrap Gun — Overview',
      body: 'Type: Projectile shotgun · Ammo: 12 rounds (2 per shot) · Damage: 204 per volley (16 pellets × 4.25 plus a 34-damage center projectile), 1.5× critical · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Since Season 5 the Scrap Gun fires two bursts per volley in a 6° spread, with damage falling off between 20 and 35 metres. The center projectile rewards aiming at the target\'s head.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Trash Compactor — Secondary Fire',
      body: 'Absorbs incoming projectiles in front of Roadhog for 2 seconds while he moves 15% slower, then fires an explosive shot dealing 75–200 damage based on what was absorbed. Cooldown: 10 seconds (11 in 6v6).',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Core Usage Tips',
      body: 'Use Trash Compactor when a burst of projectiles is coming at you — rockets, grenades or a Pharah barrage — and send the explosive straight back. Pair a Chain Hook with a full Scrap Gun volley for the kill.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Mistake',
      body: 'Trash Compactor only absorbs projectiles, not hitscan or beams. Don\'t waste it against Soldier: 76 or Zarya.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Roadhog\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Scrap Gun' },
          { id: 'b', text: 'Chain Hook' },
          { id: 'c', text: 'Whole Hog' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Roadhog\'s primary weapon is the Scrap Gun.',
      },
      {
        id: 'q2',
        text: 'What does Trash Compactor do?',
        options: [
          { id: 'a', text: 'Heals Roadhog over time' },
          { id: 'b', text: 'Absorbs projectiles, then fires an explosive shot' },
          { id: 'c', text: 'Pulls an enemy toward Roadhog' },
          { id: 'd', text: 'Knocks enemies back continuously' },
        ],
        correctId: 'b',
        explanation: 'Trash Compactor absorbs projectiles for 2 seconds, then fires an explosive dealing 75–200 damage.',
      },
    ],
  },
};