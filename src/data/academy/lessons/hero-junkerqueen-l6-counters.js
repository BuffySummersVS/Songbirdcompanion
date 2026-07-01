export default {
  id: 'hero-junkerqueen-l6-counters',
  pathId: 'hero-junkerqueen',
  title: 'Junker Queen: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Junker Queen counters, which heroes counter Junker Queen, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Junker Queen Counters',
      body: 'Reinhardt, Zenyatta, Ana — Junker Queen\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Junker Queen',
      body: 'Ana, Kiriko, Zarya, Mei — these heroes have tools that reduce Junker Queen\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Lúcio, Kiriko, Reaper, Mei — these heroes amplify Junker Queen\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Rending Recall — Recalling Jagged Blade from a stuck target refreshes the wound. / Battle Shout — Commanding Shout fully reloads Scatter Gun and increases allied reload speed by 50%. · Major: Deep Wounds — Scattergun hits extend wound durations by 0.25 seconds each. / Savage Satiation — Carnage\'s impact damage gains 100% lifesteal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Junker Queen counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Junker Queen\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Junker Queen?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Junker Queen\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Junker Queen?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Lúcio has abilities that complement Junker Queen\'s strengths.',
      },
    ],
  },
};