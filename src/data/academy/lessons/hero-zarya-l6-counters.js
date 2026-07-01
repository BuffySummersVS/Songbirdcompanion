export default {
  id: 'hero-zarya-l6-counters',
  pathId: 'hero-zarya',
  title: 'Zarya: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Zarya counters, which heroes counter Zarya, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Zarya Counters',
      body: 'D.Va, Orisa, Sigma, Genji — Zarya\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Zarya',
      body: 'Winston, Reinhardt, Bastion, Pharah — these heroes have tools that reduce Zarya\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Hanzo, Genji, Reaper, Lúcio — these heroes amplify Zarya\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Jump-ups — Secondary Fire\'s self-knockback increases 75%. / Graviton Crush — Graviton Surge deals up to 30% of enemy max health as damage over time. · Major: Energy Lance — Particle Cannon beam pierces enemies while over 50 energy. / Spotter — Projected Barrier activates ally health regeneration and increases their movement speed 15%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Zarya counter?',
        options: [
          { id: 'a', text: 'D.Va' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Hanzo' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Zarya\'s kit is particularly effective against D.Va.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Zarya?',
        options: [
          { id: 'a', text: 'D.Va' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Hanzo' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Zarya\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Zarya?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'D.Va' },
          { id: 'c', text: 'Hanzo' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Hanzo has abilities that complement Zarya\'s strengths.',
      },
    ],
  },
};