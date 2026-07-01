export default {
  id: 'hero-roadhog-l6-counters',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Roadhog counters, which heroes counter Roadhog, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Roadhog Counters',
      body: 'Doomfist, Winston, Wrecking Ball — Roadhog\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Roadhog',
      body: 'Ana, Zenyatta, Orisa, Mauga — these heroes have tools that reduce Roadhog\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Kiriko, Mei, Cassidy, Ana — these heroes amplify Roadhog\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Scrap Hook — Chain Hook hits reload two ammo. · Major: Invigorate — Take a Breather rapidly increases movement speed by 30%. / Hogdrogen Exposure — Take a Breather heals nearby allies for 50% of its healing.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Roadhog counter?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Roadhog\'s kit is particularly effective against Doomfist.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Roadhog?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Roadhog\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Roadhog?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Doomfist' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Kiriko has abilities that complement Roadhog\'s strengths.',
      },
    ],
  },
};