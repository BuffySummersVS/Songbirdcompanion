export default {
  id: 'hero-moira-l6-counters',
  pathId: 'hero-moira',
  title: 'Moira: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 3,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Moira counters, which heroes counter Moira, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Moira Counters',
      body: 'Tracer, Genji, Reaper — Moira\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Moira',
      body: 'Pharah, Echo, Widowmaker — these heroes have tools that reduce Moira\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Mei, Zarya — these heroes amplify Moira\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Vanish — Fade\'s duration increases 0.5 seconds. / Uprush — Fade\'s jump height increases 50%. · Major: Ethical Nourishment — Biotic Orb\'s first 50 healing to each ally encountered is instant. / Contamination — Enemies damaged by Biotic Orb receive 25% reduced healing.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Moira counter?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Moira\'s kit is particularly effective against Tracer.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Moira?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Moira\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Moira?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Moira\'s strengths.',
      },
    ],
  },
};