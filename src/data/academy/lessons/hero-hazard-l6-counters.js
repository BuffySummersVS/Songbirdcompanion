export default {
  id: 'hero-hazard-l6-counters',
  pathId: 'hero-hazard',
  title: 'Hazard: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Hazard counters, which heroes counter Hazard, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Hazard Counters',
      body: 'Zenyatta, Ana, Widowmaker — Hazard\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Hazard',
      body: 'Ana, Zarya, Mei, Reaper — these heroes have tools that reduce Hazard\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Lúcio, Kiriko, Juno — these heroes amplify Hazard\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Off the Top — Violent Leap\'s Slash deals 30% more damage to enemies above 250 health. / Reconstitution — Jagged Wall hits charge Spike Guard by 25 energy; maximum overfill increases by 50. · Major: Anarchic Zeal — Spike Guard spikes gain 25% lifesteal. / Deep Leap — Violent Leap\'s range increases 20%.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Hazard counter?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Hazard\'s kit is particularly effective against Zenyatta.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Hazard?',
        options: [
          { id: 'a', text: 'Zenyatta' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Hazard\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Hazard?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Zenyatta' },
          { id: 'c', text: 'Lúcio' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Lúcio has abilities that complement Hazard\'s strengths.',
      },
    ],
  },
};