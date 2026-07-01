export default {
  id: 'hero-pharah-l6-counters',
  pathId: 'hero-pharah',
  title: 'Pharah: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Pharah counters, which heroes counter Pharah, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Pharah Counters',
      body: 'Reinhardt, Junkrat, Mei — Pharah\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Pharah',
      body: 'Ashe, Cassidy, Soldier: 76, Widowmaker, D.Va — these heroes have tools that reduce Pharah\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Echo, Zarya — these heroes amplify Pharah\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Drift Thrusters — Pharah can move while Barrage is active. / Helix Shields — Convert 75 health to shields. · Major: Concussive Implosion — Concussive Blast\'s knockback inverts to pull enemies inward. / Fuel Stores — Jet Dash grants 50% fuel; maximum overfuel increases by 100%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Pharah counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ashe' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Pharah\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Pharah?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ashe' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ashe has tools that reduce Pharah\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Pharah?',
        options: [
          { id: 'a', text: 'Ashe' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Pharah\'s strengths.',
      },
    ],
  },
};