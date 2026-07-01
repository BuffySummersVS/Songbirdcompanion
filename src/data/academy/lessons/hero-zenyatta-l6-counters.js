export default {
  id: 'hero-zenyatta-l6-counters',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Zenyatta counters, which heroes counter Zenyatta, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Zenyatta Counters',
      body: 'Roadhog, Reaper, Mauga — Zenyatta\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Zenyatta',
      body: 'Tracer, Genji, Winston, Doomfist — these heroes have tools that reduce Zenyatta\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Genji, Reaper, Zarya, Winston — these heroes amplify Zenyatta\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Zenith Kick — Snap Kick\'s knockback distance increases 30%. / Ascendance — Activate and hold Double Jump to hover up to three seconds. · Major: Focused Destruction — Secondary fire charges 20% faster; stores one extra Orb of Destruction. / Duality — Zenyatta heals Orb of Harmony targets for 20% of damage dealt to Orb of Discord targets.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Zenyatta counter?',
        options: [
          { id: 'a', text: 'Roadhog' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Zenyatta\'s kit is particularly effective against Roadhog.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Zenyatta?',
        options: [
          { id: 'a', text: 'Roadhog' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Tracer has tools that reduce Zenyatta\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Zenyatta?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Roadhog' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Genji has abilities that complement Zenyatta\'s strengths.',
      },
    ],
  },
};