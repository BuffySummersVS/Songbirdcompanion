export default {
  id: 'hero-lucio-l6-counters',
  pathId: 'hero-lucio',
  title: 'Lúcio: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Lúcio counters, which heroes counter Lúcio, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Lúcio Counters',
      body: 'Reinhardt, Doomfist, Ramattra — Lúcio\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Lúcio',
      body: 'Widowmaker, Ashe, Cassidy — these heroes have tools that reduce Lúcio\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Zarya, Tracer, Genji — these heroes amplify Lúcio\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Bass Blowout — Soundwave\'s knockback increases 15%. / Beat Drop — Amp It Up remains active during Sound Barrier. · Major: Noise Violation — Crossfade\'s range increases 150% while Amp It Up is active. / Accelerando — Lúcio\'s attack speed increases 50% while Amp It Up is active.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Lúcio counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Lúcio\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Lúcio?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Lúcio\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Lúcio?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Lúcio\'s strengths.',
      },
    ],
  },
};