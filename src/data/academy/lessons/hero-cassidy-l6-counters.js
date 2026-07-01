export default {
  id: 'hero-cassidy-l6-counters',
  pathId: 'hero-cassidy',
  title: 'Cassidy: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Cassidy counters, which heroes counter Cassidy, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Cassidy Counters',
      body: 'Tracer, Genji, Sombra, Pharah — Cassidy\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Cassidy',
      body: 'Widowmaker, Sigma, Winston, D.Va — these heroes have tools that reduce Cassidy\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Ana, Baptiste, Zenyatta — these heroes amplify Cassidy\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Quick Draw — Fan the Hammer shots individually controlled; headshots deal 50% more damage. / Even the Odds — Regenerate 20 health/second for each enemy targeted by Deadeye. · Major: Gun Slingin\' — Critical hits with primary fire reduce Combat Roll cooldown by three seconds. / Bang Bang — Throws a second Flashbang that travels farther; both deal 30% reduced damage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Cassidy counter?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Cassidy\'s kit is particularly effective against Tracer.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Cassidy?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Cassidy\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Cassidy?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Cassidy\'s strengths.',
      },
    ],
  },
};