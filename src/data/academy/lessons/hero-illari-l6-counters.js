export default {
  id: 'hero-illari-l6-counters',
  pathId: 'hero-illari',
  title: 'Illari: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Illari counters, which heroes counter Illari, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Illari Counters',
      body: 'Reaper, Roadhog, Pharah — Illari\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Illari',
      body: 'Sombra, Winston, Genji, Tracer — these heroes have tools that reduce Illari\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Orisa, Sigma, Ashe, Widowmaker — these heroes amplify Illari\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Rapid Construction — Healing Pylon builds 300% faster; cooldown reduces by 1.5 seconds. / Summer Solstice — Illari\'s flight time during Captive Sun increases three seconds; flight speed increases 20%. · Major: Solar Power — Fully charged Solar Rifle hits grant 12.5% maximum solar energy; can overfill up to 50%. / Sunburn — Outburst ignites enemies, dealing 70 damage over three seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Illari counter?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Illari\'s kit is particularly effective against Reaper.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Illari?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Illari\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Illari?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Orisa has abilities that complement Illari\'s strengths.',
      },
    ],
  },
};