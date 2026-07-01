export default {
  id: 'hero-lifeweaver-l6-counters',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Lifeweaver counters, which heroes counter Lifeweaver, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Lifeweaver Counters',
      body: 'Roadhog, Reinhardt, Doomfist — Lifeweaver\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Lifeweaver',
      body: 'Sombra, Tracer, Genji, Winston — these heroes have tools that reduce Lifeweaver\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Pharah, Sigma, Widowmaker, Baptiste — these heroes amplify Lifeweaver\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Cleansing Grasp — Life Grip cleanses negative effects from the pulled ally. / Life Cycle — While alive, regenerate 10 health/second; upon death, drop a healing seed restoring 250 health to the first ally who collects it. · Major: Lifeweaving — Rejuvenating Dash adds 20 bonus healing to the next Healing Blossom within three seconds. / Superbloom — Thorns detonate for 30 extra damage when enough stick within 1.5 seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Lifeweaver counter?',
        options: [
          { id: 'a', text: 'Roadhog' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Lifeweaver\'s kit is particularly effective against Roadhog.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Lifeweaver?',
        options: [
          { id: 'a', text: 'Roadhog' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Lifeweaver\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Lifeweaver?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Roadhog' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Pharah has abilities that complement Lifeweaver\'s strengths.',
      },
    ],
  },
};