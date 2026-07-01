export default {
  id: 'hero-mei-l6-counters',
  pathId: 'hero-mei',
  title: 'Mei: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Mei counters, which heroes counter Mei, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Mei Counters',
      body: 'Genji, Tracer, Reinhardt — Mei\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Mei',
      body: 'Pharah, Echo, Widowmaker, Zarya — these heroes have tools that reduce Mei\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Junker Queen, Lúcio — these heroes amplify Mei\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Biting Cold — Secondary fire hits slow enemies 20% for 1.5 seconds. / Permafrost — Ice Wall\'s duration and cooldown each increase by two seconds. · Major: Deep Freeze — Continuously hitting enemies with primary fire freezes them briefly. / Cryo-Storm — Cryo-Freeze slows and deals 70 damage/second to nearby enemies.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Mei counter?',
        options: [
          { id: 'a', text: 'Genji' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Mei\'s kit is particularly effective against Genji.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Mei?',
        options: [
          { id: 'a', text: 'Genji' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Mei\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Mei?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Genji' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Mei\'s strengths.',
      },
    ],
  },
};