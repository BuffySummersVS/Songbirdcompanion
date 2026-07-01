export default {
  id: 'hero-ramattra-l6-counters',
  pathId: 'hero-ramattra',
  title: 'Ramattra: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Ramattra counters, which heroes counter Ramattra, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Ramattra Counters',
      body: 'Reinhardt, Sigma, Brigitte — Ramattra\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Ramattra',
      body: 'Ana, Zenyatta, Orisa, Roadhog — these heroes have tools that reduce Ramattra\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Lúcio, Kiriko, Mei, Reaper — these heroes amplify Ramattra\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Void Surge — Void Accelerator periodically releases six additional projectiles during continuous fire. / Prolonged Barrier — Void Barrier\'s duration increases 25%. · Major: Nanite Repair — Healed 50 health/second while within Ravenous Vortex. / Vengeful Vortex — While Ravenous Vortex is airborne, press E to detonate it, dealing 50 damage and pulling enemies downward.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Ramattra counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Ramattra\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Ramattra?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Ramattra\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Ramattra?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Lúcio has abilities that complement Ramattra\'s strengths.',
      },
    ],
  },
};