export default {
  id: 'hero-freja-l6-counters',
  pathId: 'hero-freja',
  title: 'Freja: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Freja counters, which heroes counter Freja, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Freja Counters',
      body: 'Pharah, Echo, Mercy — Freja\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Freja',
      body: 'Winston, D.Va, Tracer, Sombra — these heroes have tools that reduce Freja\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Baptiste, Sigma — these heroes amplify Freja\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Relentless Barrage — Take Aim direct hits refund 8 ammo. / Momentum Boost — Quick Dash distance increases 20%. · Major: Aerial Recovery — After Updraft, heal 30 health/second until landing. / Rising Winds — Updraft gains an additional charge.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Freja counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Freja\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Freja?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Freja\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Freja?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Freja\'s strengths.',
      },
    ],
  },
};