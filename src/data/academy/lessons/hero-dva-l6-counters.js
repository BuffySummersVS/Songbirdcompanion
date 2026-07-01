export default {
  id: 'hero-dva-l6-counters',
  pathId: 'hero-dva',
  title: 'D.Va: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes D.Va counters, which heroes counter D.Va, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes D.Va Counters',
      body: 'Winston, Widowmaker, Pharah, Bastion — D.Va\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter D.Va',
      body: 'Zarya, Symmetra, Mei, Sombra — these heroes have tools that reduce D.Va\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Winston, Tracer, Genji, Ana, Kiriko — these heroes amplify D.Va\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Bunny Power — Eject grants 75 temporary overhealth; Call Mech\'s damage radius increases 50%. / Extended Boosters — Hitting enemies with Boosters increases their duration by 0.5 seconds. · Major: Shield System — Convert 150 health to shields; Defense Matrix restores shields equal to 25% of damage absorbed. / Heavy Rockets — Swap Micro Missiles for Heavy Rockets with fewer but harder-hitting explosive projectiles.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does D.Va counter?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Zarya' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'D.Va\'s kit is particularly effective against Winston.',
      },
      {
        id: 'q2',
        text: 'Which hero counters D.Va?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Zarya' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Zarya has tools that reduce D.Va\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with D.Va?',
        options: [
          { id: 'a', text: 'Zarya' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Winston has abilities that complement D.Va\'s strengths.',
      },
    ],
  },
};