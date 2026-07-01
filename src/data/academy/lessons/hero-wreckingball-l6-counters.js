export default {
  id: 'hero-wreckingball-l6-counters',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Wrecking Ball counters, which heroes counter Wrecking Ball, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Wrecking Ball Counters',
      body: 'Widowmaker, Zenyatta, Ana, Ashe — Wrecking Ball\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Wrecking Ball',
      body: 'Sombra, Mei, Roadhog, Cassidy — these heroes have tools that reduce Wrecking Ball\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Tracer, Sombra, Genji, Zenyatta — these heroes amplify Wrecking Ball\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Steamroller — Roll impacts deal 100% more damage to tanks. / Pack Rat — Health Packs heal an additional 100 health. · Major: Hang Time — Piledriver winds up longer, gaining air control and dealing up to 50% more damage. / Transfer Efficiency — Reactivating Adaptive Shield reduces its cooldown by 1.5 seconds per ally affected; health gained per ally increases 33%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Wrecking Ball counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Wrecking Ball?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Wrecking Ball\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Wrecking Ball?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Tracer has abilities that complement Wrecking Ball\'s strengths.',
      },
    ],
  },
};