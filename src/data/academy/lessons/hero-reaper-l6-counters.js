export default {
  id: 'hero-reaper-l6-counters',
  pathId: 'hero-reaper',
  title: 'Reaper: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Reaper counters, which heroes counter Reaper, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Reaper Counters',
      body: 'Winston, Roadhog, Mauga, Junker Queen — Reaper\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Reaper',
      body: 'Ana, Pharah, Echo, Widowmaker, Cassidy — these heroes have tools that reduce Reaper\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Kiriko, Lúcio, Reinhardt — these heroes amplify Reaper\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Death\'s Shadow — Shadow Step reloads Hellfire Shotguns; range increases 25%. / Soul Reaving — Collect Soul Globes from dead enemies to restore 50 health. · Major: Dire Triggers — Use secondary fire to fire a precise long-range volley from both Hellfire Shotguns. / Ravenous Wraith — Leaving Wraith Form grants 40% additional lifesteal for three seconds.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Reaper counter?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Reaper\'s kit is particularly effective against Winston.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Reaper?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Reaper\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Reaper?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Kiriko' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Kiriko has abilities that complement Reaper\'s strengths.',
      },
    ],
  },
};