export default {
  id: 'hero-junkrat-l6-counters',
  pathId: 'hero-junkrat',
  title: 'Junkrat: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Junkrat counters, which heroes counter Junkrat, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Junkrat Counters',
      body: 'Reinhardt, Roadhog, Mei — Junkrat\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Junkrat',
      body: 'Pharah, Echo, Widowmaker, Zarya — these heroes have tools that reduce Junkrat\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Orisa, Mei, Ana — these heroes amplify Junkrat\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Aluminium Frame — Steel Trap\'s throw range increases 50%. / Nitro Boost — During RIP-Tire, press Shift for a speed boost; reduces RIP-Tire damage 50%. · Major: Frag Cannon — Frag Launcher\'s projectile speed increases 40%; maximum ammo reduces by one. / Tick Tock — Concussive Mine arms 0.5 seconds after landing, increasing damage and explosion radius 50% and health 200%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Junkrat counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Junkrat\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Junkrat?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Pharah has tools that reduce Junkrat\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Junkrat?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Orisa' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Orisa has abilities that complement Junkrat\'s strengths.',
      },
    ],
  },
};