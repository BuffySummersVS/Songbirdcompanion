export default {
  id: 'hero-torbjorn-l6-counters',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Torbjörn counters, which heroes counter Torbjörn, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Torbjörn Counters',
      body: 'Tracer, Genji, Sombra, Pharah — Torbjörn\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Torbjörn',
      body: 'Widowmaker, Pharah, Echo, Sigma — these heroes have tools that reduce Torbjörn\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Sigma, Orisa, Baptiste — these heroes amplify Torbjörn\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Craftsman — Forge Hammer restores armour health to allies; turret repair healing increases 25%. / Loaded — Activating Overload fully refills Rivet Gun\'s ammo. · Major: Anchor Bolts — Deploy Turret throw range increases 50%; can attach to walls and ceilings. / Overloaded Turret — Overload temporarily upgrades the Turret for five seconds, increasing its health and damage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Torbjörn counter?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Torbjörn\'s kit is particularly effective against Tracer.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Torbjörn?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Torbjörn\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Torbjörn?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Sigma has abilities that complement Torbjörn\'s strengths.',
      },
    ],
  },
};