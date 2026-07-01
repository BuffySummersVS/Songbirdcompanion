export default {
  id: 'hero-winston-l6-counters',
  pathId: 'hero-winston',
  title: 'Winston: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Winston counters, which heroes counter Winston, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Winston Counters',
      body: 'Widowmaker, Genji, Tracer, Zenyatta — Winston\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Winston',
      body: 'Reaper, Bastion, Mauga, Roadhog — these heroes have tools that reduce Winston\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Tracer, Genji, Sombra, Ana, Kiriko — these heroes amplify Winston\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Short Circuit — Tesla Cannon deals 30% more damage to deployable objects. / Heavy Landing — During Primal Rage, Jump Pack\'s damage and area increase up to 75% while airborne. · Major: Chain Lightning — Fully charged Secondary Fire bounces to up to two additional targets. / Revitalizing Barrier — Barrier Projector heals allies within it at 30 health/second.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Winston counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Winston\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Winston?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Reaper has tools that reduce Winston\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Winston?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Tracer has abilities that complement Winston\'s strengths.',
      },
    ],
  },
};