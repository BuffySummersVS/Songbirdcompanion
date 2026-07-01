export default {
  id: 'hero-kiriko-l6-counters',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Kiriko counters, which heroes counter Kiriko, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Kiriko Counters',
      body: 'Zenyatta, Ana, Illari — Kiriko\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Kiriko',
      body: 'Reaper, Roadhog, Cassidy, Sombra — these heroes have tools that reduce Kiriko\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Genji, Winston, Tracer, Doomfist — these heroes amplify Kiriko\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Urgent Care — Healing Ofuda projectile speed increases 50% when seeking critically wounded allies. / Fortune Teller — Kunai hits launch two Healing Ofuda toward the ally in front. · Major: Shuffling — Swift Step can be used again within four seconds of the initial cast. / Foxtrot — Protection Suzu grants allies 40% movement speed for two seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Kiriko counter?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Kiriko\'s kit is particularly effective against Zenyatta.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Kiriko?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Reaper has tools that reduce Kiriko\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Kiriko?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Zenyatta' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Genji has abilities that complement Kiriko\'s strengths.',
      },
    ],
  },
};