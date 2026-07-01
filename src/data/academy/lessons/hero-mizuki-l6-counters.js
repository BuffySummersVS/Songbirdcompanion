export default {
  id: 'hero-mizuki-l6-counters',
  pathId: 'hero-mizuki',
  title: 'Mizuki: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Mizuki counters, which heroes counter Mizuki, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Mizuki Counters',
      body: 'Doomfist, Wrecking Ball, Tracer — Mizuki\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Mizuki',
      body: 'Sombra, Pharah, Widowmaker — these heroes have tools that reduce Mizuki\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Genji, Winston — these heroes amplify Mizuki\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Wellspring — Remedy Aura generation increases 25%. / Exposed Soul — Binding Chain hit grants 30% damage bonus for 2 seconds. · Major: Resonant Return — Healing Kasa bounces an additional time; healing increases by 10 per bounce. / Quickstep — While Katashiro Return is active, nearby allies gain 25% movement speed.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Mizuki counter?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Mizuki\'s kit is particularly effective against Doomfist.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Mizuki?',
        options: [
          { id: 'a', text: 'Doomfist' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Mizuki\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Mizuki?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Doomfist' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Mizuki\'s strengths.',
      },
    ],
  },
};