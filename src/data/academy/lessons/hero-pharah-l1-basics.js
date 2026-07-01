export default {
  id: 'hero-pharah-l1-basics',
  pathId: 'hero-pharah',
  title: 'Pharah: Introduction',
  subtitle: 'Role, stats, and what makes Pharah unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Pharah is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Pharah\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Hover Jets / Damage',
      body: 'Pharah can hover with jump jets and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Fareeha Amari dreamed her whole life of following her mother Ana into Overwatch, but her application was denied — and then the organisation collapsed before she could try again. She channelled that drive into becoming chief of security for Helix Inte',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Pharah',
      body: 'Pharah works well on: Lijiang Garden, Ilios Well, Dorado, New Junk City. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Pharah fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Pharah is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Pharah\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Pharah\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Pharah?',
        options: [
          { id: 'a', text: 'Lijiang Garden' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Pharah performs best on Lijiang Garden and may struggle on Circuit Royal.',
      },
    ],
  },
};