export default {
  id: 'hero-sierra-l6-counters',
  pathId: 'hero-sierra',
  title: 'Sierra: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Sierra counters, which heroes counter Sierra, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Sierra Counters',
      body: 'Pharah, Echo, Mercy — Sierra\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Sierra',
      body: 'Widowmaker, Ashe, D.Va, Sombra — these heroes have tools that reduce Sierra\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Zenyatta, Mercy, Sigma, Baptiste — these heroes amplify Sierra\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Full Flight — Anchor Drone flight and grapple range increases 25%. / Tight Grip — Helix Rifle spread tightens 70% faster and widens 30% slower. · Major: Medi-Drone — Anchor Drones carry a medkit. / Locked In — Tracking Shot hit grants 20% attack speed for 2 seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Sierra counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Zenyatta' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Sierra\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Sierra?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Zenyatta' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Sierra\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Sierra?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Zenyatta' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Zenyatta has abilities that complement Sierra\'s strengths.',
      },
    ],
  },
};