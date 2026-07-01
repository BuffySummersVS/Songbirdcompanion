export default {
  id: 'hero-anran-l6-counters',
  pathId: 'hero-anran',
  title: 'Anran: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Anran counters, which heroes counter Anran, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Anran Counters',
      body: 'Widowmaker, Ana, Zenyatta — Anran\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Anran',
      body: 'Cassidy, Mei, Sombra, Brigitte — these heroes have tools that reduce Anran\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, D.Va, Kiriko, Lúcio — these heroes amplify Anran\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Smoulder — Ignited enemies burn 1.5 seconds longer. / Heat Shield — Gain 50 overhealth per ultimate use and per ignited enemy. · Major: Short Fuse — Inferno Rush impact reduces its cooldown by 1.5 seconds. / Hungering Blaze — Dancing Blaze healing increases by 25 per strike.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Anran counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Anran\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Anran?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has tools that reduce Anran\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Anran?',
        options: [
          { id: 'a', text: 'Cassidy' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement Anran\'s strengths.',
      },
    ],
  },
};