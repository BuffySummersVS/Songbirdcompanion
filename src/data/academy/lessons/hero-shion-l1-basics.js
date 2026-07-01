export default {
  id: 'hero-shion-l1-basics',
  pathId: 'hero-shion',
  title: 'Shion: Introduction',
  subtitle: 'Role, stats, and what makes Shion unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Shion is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Shion\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Flanker / Damage',
      body: 'As a Flanker damage hero, Shion benefits from health packs more than standard heroes and applies Damage role healing reduction.',
    },
    {
      type: 'text',
      body: 'An omnic who Awakened into Tokyo\'s Omnic Crisis amid screams and gunfire, Shion spent weeks surviving alone on the streets before being captured by the humans who would go on to found the Hashimoto Clan, who kept her alive to sharpen their fighting t',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Shion',
      body: 'Shion works well on: Oasis, New Queen Street, Dorado, Antarctic Peninsula. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Shion fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Shion is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Shion\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Shion\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Shion?',
        options: [
          { id: 'a', text: 'Oasis' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Shion performs best on Oasis and may struggle on Circuit Royal.',
      },
    ],
  },
};