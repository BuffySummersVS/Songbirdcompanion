export default {
  id: 'hero-hanzo-l6-counters',
  pathId: 'hero-hanzo',
  title: 'Hanzo: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Hanzo counters, which heroes counter Hanzo, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Hanzo Counters',
      body: 'Widowmaker, Zenyatta, Bastion — Hanzo\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Hanzo',
      body: 'Winston, D.Va, Genji, Sombra — these heroes have tools that reduce Hanzo\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Zarya, Ana, Kiriko — these heroes amplify Hanzo\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Sonic Disruption — Sonic Arrow hacks nearby health packs for 12 seconds. / Scatter Arrows — Storm Arrows split into three projectiles on first ricochet and bounce two extra times. · Major: Dragon Fury — After hitting an enemy with primary fire, gain 25% attack speed for one second. / Yamagami Technique — Wall Climb accelerates Lunge cooldown by 250%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Hanzo counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Zarya' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Hanzo\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Hanzo?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Zarya' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Hanzo\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Hanzo?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Zarya' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Zarya has abilities that complement Hanzo\'s strengths.',
      },
    ],
  },
};