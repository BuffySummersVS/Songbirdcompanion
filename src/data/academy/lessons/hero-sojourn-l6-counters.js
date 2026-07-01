export default {
  id: 'hero-sojourn-l6-counters',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Sojourn counters, which heroes counter Sojourn, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Sojourn Counters',
      body: 'Pharah, Echo, Mercy, Widowmaker — Sojourn\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Sojourn',
      body: 'Winston, D.Va, Sombra, Genji — these heroes have tools that reduce Sojourn\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Zenyatta, Baptiste, Kiriko — these heroes amplify Sojourn\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Extended Mag — Maximum ammo increases by 15. / Overcharged — Railgun maximum energy increases by 50 while Overclock is active. · Major: Dual Thrusters — Power Slide gains an additional charge; jump height shifts to lateral movement. / Adhesive Siphon — Disruptor Shot sticks to enemies and generates Railgun energy when dealing damage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Sojourn counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Sojourn\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Sojourn?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Sojourn\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Sojourn?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Sojourn\'s strengths.',
      },
    ],
  },
};