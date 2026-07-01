export default {
  id: 'hero-widowmaker-l6-counters',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Widowmaker counters, which heroes counter Widowmaker, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Widowmaker Counters',
      body: 'Zenyatta, Ana, Pharah, Echo — Widowmaker\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Widowmaker',
      body: 'Winston, D.Va, Sombra, Genji, Tracer — these heroes have tools that reduce Widowmaker\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Sigma, Baptiste, Zenyatta — these heroes amplify Widowmaker\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Scoped Efficiency — Scoped shots cost three ammo instead of five. / Focused Aim — Scoped shots charge 50% faster during Infra-Sight. · Major: Escape Plan — Scoped shot hits reduce Grappling Hook cooldown by up to four seconds. / Deadly Deux — Venom Mine gains 50% increased damage and a second charge, enabling two active mines.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Widowmaker counter?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Widowmaker\'s kit is particularly effective against Zenyatta.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Widowmaker?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Widowmaker\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Widowmaker?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Zenyatta' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Widowmaker\'s strengths.',
      },
    ],
  },
};