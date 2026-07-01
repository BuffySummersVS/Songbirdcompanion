export default {
  id: 'hero-juno-l6-counters',
  pathId: 'hero-juno',
  title: 'Juno: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Juno counters, which heroes counter Juno, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Juno Counters',
      body: 'Pharah, Echo, Reinhardt — Juno\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Juno',
      body: 'Sombra, Tracer, Genji, Winston — these heroes have tools that reduce Juno\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Tracer, Genji, Lúcio — these heroes amplify Juno\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Familiar Vitals — Pulsar Torpedoes lock onto allies 35% faster. / Re-Boots — Activating Glide Boost resets Double Jump. · Major: Master Blaster — Mediblaster can critically hit enemies. / Locked On — Pulsar Torpedoes cooldown reduces by 1.5 seconds for every enemy hit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Juno counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Juno\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Juno?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Juno\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Juno?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Juno\'s strengths.',
      },
    ],
  },
};