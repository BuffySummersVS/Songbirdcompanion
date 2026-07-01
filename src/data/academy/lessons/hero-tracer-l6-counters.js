export default {
  id: 'hero-tracer-l6-counters',
  pathId: 'hero-tracer',
  title: 'Tracer: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Tracer counters, which heroes counter Tracer, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Tracer Counters',
      body: 'Widowmaker, Zenyatta, Ana, Ashe — Tracer\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Tracer',
      body: 'Cassidy, Torbjörn, Mei, Brigitte, Moira — these heroes have tools that reduce Tracer\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, D.Va, Sombra, Kiriko — these heroes amplify Tracer\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Blink Packs — Health Packs restore one Blink charge. / Blast from the Past — Pulse Bomb\'s radius increases 50%. · Major: Flashback — Recall restores all Blink charges. / Quantum Entanglement — Recall grants 50 overhealth that decays over time.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Tracer counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Tracer\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Tracer?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has tools that reduce Tracer\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Tracer?',
        options: [
          { id: 'a', text: 'Cassidy' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement Tracer\'s strengths.',
      },
    ],
  },
};