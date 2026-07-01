export default {
  id: 'hero-soldier76-l6-counters',
  pathId: 'hero-soldier76',
  title: 'Soldier: 76: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Soldier: 76 counters, which heroes counter Soldier: 76, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Soldier: 76 Counters',
      body: 'Pharah, Echo, Mercy — Soldier: 76\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Soldier: 76',
      body: 'Widowmaker, Sigma, D.Va, Genji — these heroes have tools that reduce Soldier: 76\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Baptiste, Zenyatta — these heroes amplify Soldier: 76\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Recycled Pulse Munitions — Helix Rockets reload 15 ammo if they damage an enemy. / Field Emergency — Biotic Field\'s healing increases 100% on critically wounded allies. · Major: Agility Training — Sprint speed increases 20%; reload is performable while sprinting. / Stim Pack — Biotic Field becomes a Stim Pack, increasing attack and reload speed 30% but preventing self-healing for four seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Soldier: 76 counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Soldier: 76\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Soldier: 76?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Soldier: 76\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Soldier: 76?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Soldier: 76\'s strengths.',
      },
    ],
  },
};