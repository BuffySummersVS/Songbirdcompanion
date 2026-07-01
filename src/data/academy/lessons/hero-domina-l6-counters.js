export default {
  id: 'hero-domina-l6-counters',
  pathId: 'hero-domina',
  title: 'Domina: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Domina counters, which heroes counter Domina, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Domina Counters',
      body: 'Reinhardt, Doomfist, Winston — Domina\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Domina',
      body: 'Sombra, Ramattra, Reaper, Ana — these heroes have tools that reduce Domina\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Widowmaker, Baptiste, Sojourn, Zenyatta — these heroes amplify Domina\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Efficient Design — After Barrier Array, restore 50 shields and activate health regeneration. / Extended Power — Photon Magnum range increases 20%. · Major: Disruptive Detonation — Crystal Charge explosion slows enemies 30% for 2 seconds. / Corporate Retreat — Barrier Array can be moved once while active.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Domina counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Widowmaker' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Domina\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Domina?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Widowmaker' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Domina\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Domina?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Widowmaker' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Widowmaker has abilities that complement Domina\'s strengths.',
      },
    ],
  },
};