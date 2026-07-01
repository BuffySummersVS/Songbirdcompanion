export default {
  id: 'hero-vendetta-l6-counters',
  pathId: 'hero-vendetta',
  title: 'Vendetta: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Vendetta counters, which heroes counter Vendetta, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Vendetta Counters',
      body: 'Widowmaker, Zenyatta, Ana — Vendetta\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Vendetta',
      body: 'Pharah, Echo, Mei, Brigitte, Roadhog — these heroes have tools that reduce Vendetta\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Kiriko, Lúcio, Junker Queen, Zarya — these heroes amplify Vendetta\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Extra Edge — Projected Edge costs 25% less energy. / Raging Storm — Whirlwind Dash continues spinning for 3 more hits, dealing 30 damage each. · Major: Siphoning Strike — Overhead strikes gain 40% lifesteal. / Relentless — Onslaught stacks 3 more times; each stack grants 5% attack speed and 2% movement speed.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Vendetta counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Vendetta\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Vendetta?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Vendetta\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Vendetta?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Kiriko has abilities that complement Vendetta\'s strengths.',
      },
    ],
  },
};