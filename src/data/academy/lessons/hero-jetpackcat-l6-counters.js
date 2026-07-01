export default {
  id: 'hero-jetpackcat-l6-counters',
  pathId: 'hero-jetpackcat',
  title: 'Jetpack Cat: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Jetpack Cat counters, which heroes counter Jetpack Cat, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Jetpack Cat Counters',
      body: 'Pharah, Echo, Reinhardt — Jetpack Cat\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Jetpack Cat',
      body: 'Widowmaker, Ashe, Hanzo, Sombra — these heroes have tools that reduce Jetpack Cat\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Pharah, Echo, Soldier: 76 — these heroes amplify Jetpack Cat\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Ulterior Motive — 15% of healing output recovers fuel. / Transport Shielding — Gain up to 50 extra shields while carrying another player. · Major: Headbutt — High-speed flying knocks back an enemy for 50 damage. / Claws Out — Empowered melee every 6 seconds wounds the target for 40 damage and slows them 30% for 1 second.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Jetpack Cat counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Jetpack Cat\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Jetpack Cat?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Jetpack Cat\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Jetpack Cat?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Pharah' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Pharah has abilities that complement Jetpack Cat\'s strengths.',
      },
    ],
  },
};