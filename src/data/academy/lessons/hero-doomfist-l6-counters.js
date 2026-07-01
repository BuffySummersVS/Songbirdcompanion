export default {
  id: 'hero-doomfist-l6-counters',
  pathId: 'hero-doomfist',
  title: 'Doomfist: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Doomfist counters, which heroes counter Doomfist, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Doomfist Counters',
      body: 'Zenyatta, Ana, Widowmaker, Ashe — Doomfist\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Doomfist',
      body: 'Orisa, Sombra, Ana, Roadhog — these heroes have tools that reduce Doomfist\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Tracer, Sombra, Kiriko, Lúcio — these heroes amplify Doomfist\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: One-Two — Rocket Punch hits reload all Hand Cannon ammo. / Survival of the Fittest — The Best Defense grants 25 overhealth from eliminations; maximum overhealth increases by 50. · Major: Seismic Empowerment — Hitting three or more enemies with Seismic Slam empowers the next Rocket Punch. / Power Matrix — Power Block absorbs projectiles during the first second of its duration.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Doomfist counter?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Orisa' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Doomfist\'s kit is particularly effective against Zenyatta.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Doomfist?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Orisa' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Orisa has tools that reduce Doomfist\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Doomfist?',
        options: [
          { id: 'a', text: 'Orisa' },
          { id: 'b', text: 'Zenyatta' },
          { id: 'c', text: 'Tracer' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Tracer has abilities that complement Doomfist\'s strengths.',
      },
    ],
  },
};