export default {
  id: 'hero-sombra-l6-counters',
  pathId: 'hero-sombra',
  title: 'Sombra: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Sombra counters, which heroes counter Sombra, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Sombra Counters',
      body: 'Widowmaker, Zenyatta, Symmetra, Illari — Sombra\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Sombra',
      body: 'Cassidy, Brigitte, Kiriko, Mei — these heroes have tools that reduce Sombra\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, D.Va, Tracer, Ana — these heroes amplify Sombra\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Life Hack — EMP applies Hotfix to nearby allies. / CTRL ALT ESC — Teleporting with Translocator at critical health initiates passive health regeneration. · Major: Data Packet — Hacking health packs with Hotfix reduces its main cooldown by 4 seconds. / Cybersecurity — Cyberspace healing is doubled on allies below 50% health.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Sombra counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Sombra\'s Stealth lets her reach Widowmaker\'s perch, and Cyberspace\'s Weaken halves her damage.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Sombra?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has tools that reduce Sombra\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Sombra?',
        options: [
          { id: 'a', text: 'Cassidy' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement Sombra\'s strengths.',
      },
    ],
  },
};