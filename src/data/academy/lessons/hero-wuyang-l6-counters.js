export default {
  id: 'hero-wuyang-l6-counters',
  pathId: 'hero-wuyang',
  title: 'Wuyang: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Wuyang counters, which heroes counter Wuyang, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Wuyang Counters',
      body: 'Reinhardt, Doomfist, Pharah — Wuyang\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Wuyang',
      body: 'Tracer, Genji, Sombra — these heroes have tools that reduce Wuyang\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Orisa, Sigma, Roadhog — these heroes amplify Wuyang\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Overflow — Gain 10 ammo and 50% healing resource when Rushing Torrent is activated. / Balance — When you deal damage with water orbs, increase Restorative Stream\'s passive healing by 30% for 2 seconds. · Major: Ebb and Flow — Guardian Wave rewinds to its starting location. / Falling Rain — Simultaneously control 3 water orbs that deal 60% decreased damage and have 25% decreased empowered explosion radius.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Wuyang counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Wuyang\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Wuyang?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Tracer has tools that reduce Wuyang\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Wuyang?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Orisa has abilities that complement Wuyang\'s strengths.',
      },
    ],
  },
};