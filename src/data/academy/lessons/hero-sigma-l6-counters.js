export default {
  id: 'hero-sigma-l6-counters',
  pathId: 'hero-sigma',
  title: 'Sigma: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Sigma counters, which heroes counter Sigma, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Sigma Counters',
      body: 'Mauga, Bastion, Widowmaker, Ashe — Sigma\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Sigma',
      body: 'Winston, Doomfist, Sombra, Reinhardt — these heroes have tools that reduce Sigma\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Baptiste, Zenyatta, Ashe, Widowmaker — these heroes amplify Sigma\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Kinetic Cycle — Absorbing projectiles with Kinetic Grasp reduces Accretion\'s cooldown. / Massive Impact — Accretion\'s knockdown duration increases up to three seconds based on travel distance. · Major: Hyper Strike — Every five direct hits with Hyperspheres, the next Quick Melee levitates and knocks away enemies. / Levitation — Activate and hold Double Jump to levitate upward briefly.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Sigma counter?',
        options: [
          { id: 'a', text: 'Mauga' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Sigma\'s kit is particularly effective against Mauga.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Sigma?',
        options: [
          { id: 'a', text: 'Mauga' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Sigma\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Sigma?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Mauga' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Baptiste has abilities that complement Sigma\'s strengths.',
      },
    ],
  },
};