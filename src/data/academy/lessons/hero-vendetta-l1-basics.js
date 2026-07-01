export default {
  id: 'hero-vendetta-l1-basics',
  pathId: 'hero-vendetta',
  title: 'Vendetta: Introduction',
  subtitle: 'Role, stats, and what makes Vendetta unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Vendetta is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Vendetta\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '200 Health, 75 Armour — 275 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Onslaught / Damage',
      body: 'Successful strikes increase Vendetta\'s movement and attack speed. Damage dealt also applies the Damage role healing reduction.',
    },
    {
      type: 'text',
      body: 'Marzia Bartalotti grew up the daughter of Talon boss Antonio Bartalotti, raised with promises of power and pride in her heritage — until Blackwatch killed her father and she lost claim to everything he had built. Driven by spite, she reinvented herse',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Vendetta',
      body: 'Vendetta works well on: King\'s Row, Lijiang Control Center. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Vendetta fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Vendetta is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Vendetta\'s total HP?',
        options: [
          { id: 'a', text: '225' },
          { id: 'b', text: '275' },
          { id: 'c', text: '325' },
          { id: 'd', text: '375' },
        ],
        correctId: 'b',
        explanation: 'Vendetta\'s total HP is 275 (200 Health, 75 Armour — 275 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Vendetta?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Vendetta performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};