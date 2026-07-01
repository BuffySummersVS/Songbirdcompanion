export default {
  id: 'hero-venture-l6-counters',
  pathId: 'hero-venture',
  title: 'Venture: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Venture counters, which heroes counter Venture, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Venture Counters',
      body: 'Widowmaker, Zenyatta, Ana — Venture\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Venture',
      body: 'Pharah, Echo, Cassidy, Mei, Roadhog — these heroes have tools that reduce Venture\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, Doomfist, Kiriko, Lúcio — these heroes amplify Venture\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Deep Burrow — Drill Dash distance increases 50% while burrowed. / Excavation Exhilaration — Tectonic Shock cooldowns refresh 300% faster. · Major: Smart Extender — Empower SMART Excavator for a 100% range increase for 4 seconds. / Covered in Dirt — Clobber grants up to 30 shields.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Venture counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Venture\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Venture?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Venture\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Venture?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement Venture\'s strengths.',
      },
    ],
  },
};