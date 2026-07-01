export default {
  id: 'hero-symmetra-l6-counters',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Symmetra counters, which heroes counter Symmetra, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Symmetra Counters',
      body: 'D.Va, Genji, Sigma, Winston — Symmetra\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Symmetra',
      body: 'Pharah, Echo, Junkrat, Winston — these heroes have tools that reduce Symmetra\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Mei, Baptiste, Lifeweaver — these heroes amplify Symmetra\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Sentry Capacity — Sentry Turret gains an additional charge. / Advanced Teleportation — Teleporter range increases 50%. · Major: Perfect Alignment — Primary fire range increases 15% with each additional charge level. / Shield Battery — Symmetra regenerates 20 shields/second within 10 metres of her Teleporter.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Symmetra counter?',
        options: [
          { id: 'a', text: 'D.Va' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Symmetra\'s kit is particularly effective against D.Va.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Symmetra?',
        options: [
          { id: 'a', text: 'D.Va' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Symmetra\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Symmetra?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'D.Va' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Symmetra\'s strengths.',
      },
    ],
  },
};