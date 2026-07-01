export default {
  id: 'hero-echo-l6-counters',
  pathId: 'hero-echo',
  title: 'Echo: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Echo counters, which heroes counter Echo, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Echo Counters',
      body: 'Pharah, Mercy, Bastion, Zenyatta — Echo\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Echo',
      body: 'Cassidy, Ashe, Widowmaker, Soldier: 76 — these heroes have tools that reduce Echo\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Winston, D.Va, Ana — these heroes amplify Echo\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Friendly Imaging — Duplicate can target allies. / Enhanced Duplication — During Duplicate, the clone\'s first ultimate use extends Duplicate\'s duration by three seconds. · Major: Full Salvo — Sticky Bombs fires 50% more projectiles; all deal 15% less damage. / High Beams — Focusing Beam eliminations reset Flight\'s cooldown.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Echo counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Echo\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Echo?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Cassidy' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has tools that reduce Echo\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Echo?',
        options: [
          { id: 'a', text: 'Cassidy' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Echo\'s strengths.',
      },
    ],
  },
};