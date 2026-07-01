export default {
  id: 'hero-shion-l6-counters',
  pathId: 'hero-shion',
  title: 'Shion: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Shion counters, which heroes counter Shion, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Shion Counters',
      body: 'Widowmaker, Zenyatta, Ana — Shion\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Shion',
      body: 'Cassidy, Mei, Sombra, Brigitte — these heroes have tools that reduce Shion\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, D.Va, Kiriko, Lúcio — these heroes amplify Shion\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Rapid Reload — Evade reloads 9 ammo. / X Machina — Execution deals 20% more damage to enemies below half health. · Major: Refuel — Joyride restores 50 health and regenerates 20 health/second during use. / Faces of Death — Gain all damage subrole passives.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Shion counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Shion\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Shion?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has tools that reduce Shion\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Shion?',
        options: [
          { id: 'a', text: 'Cassidy' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement Shion\'s strengths.',
      },
    ],
  },
};