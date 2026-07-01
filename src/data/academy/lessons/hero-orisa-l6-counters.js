export default {
  id: 'hero-orisa-l6-counters',
  pathId: 'hero-orisa',
  title: 'Orisa: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Orisa counters, which heroes counter Orisa, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Orisa Counters',
      body: 'Doomfist, Reinhardt, Roadhog — Orisa\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Orisa',
      body: 'Zarya, Symmetra, Echo, Zenyatta — these heroes have tools that reduce Orisa\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Baptiste, Illari, Sojourn, Cassidy — these heroes amplify Orisa\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Heat Dissipator — Primary fire critical hits refund heat. / Fleeting Bulwark — Fortify briefly grants an additional 100 overhealth when activated. · Major: Charged Javelin — Hold secondary fire to charge Energy Javelin for increased speed and knockback; pierces enemies at full power. / Protective Barrier — Javelin Spin converts to launch a forward-moving barrier instead.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Orisa counter?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Zarya' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Orisa\'s kit is particularly effective against Doomfist.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Orisa?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Zarya' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Zarya has tools that reduce Orisa\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Orisa?',
        options: [
          { id: 'a', text: 'Zarya' },
          { id: 'b', text: 'Doomfist' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Baptiste has abilities that complement Orisa\'s strengths.',
      },
    ],
  },
};