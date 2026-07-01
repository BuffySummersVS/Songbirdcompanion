export default {
  id: 'hero-genji-l6-counters',
  pathId: 'hero-genji',
  title: 'Genji: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Genji counters, which heroes counter Genji, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Genji Counters',
      body: 'Widowmaker, Zenyatta, Ana — Genji\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Genji',
      body: 'Mei, Moira, Symmetra, Zarya, Winston — these heroes have tools that reduce Genji\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Ana, Kiriko, Winston, D.Va — these heroes amplify Genji\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Acrobatics — Swift Strike resets double jump. / Dragon\'s Thirst — Dragonblade swings gain 30% lifesteal. · Major: Blade Twisting — Swift Strike deals 25 additional damage over time when used shortly after an elimination. / Meditation — Regenerate 25 health/second while Deflect is active.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Genji counter?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Mei' },
          { id: 'c', text: 'Ana' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Genji\'s kit is particularly effective against Widowmaker.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Genji?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Mei' },
          { id: 'c', text: 'Ana' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Mei has tools that reduce Genji\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Genji?',
        options: [
          { id: 'a', text: 'Mei' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Ana' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Ana has abilities that complement Genji\'s strengths.',
      },
    ],
  },
};