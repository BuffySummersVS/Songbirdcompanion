export default {
  id: 'hero-genji-l1-basics',
  pathId: 'hero-genji',
  title: 'Genji: Introduction',
  subtitle: 'Role, stats, and what makes Genji unique',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Genji is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Genji\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 5/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Cyber-Agility / Damage',
      body: 'Genji can double jump and wall climb, and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Genji Shimada was the rebellious younger son of a powerful ninja clan who rejected his family\'s criminal empire — until his brother Hanzo nearly killed him in a duel. Rebuilt as a cyborg by Dr. Angela Ziegler, Genji spent years at war with his own bo',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Genji',
      body: 'Genji works well on: Nepal, Oasis, Numbani. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Genji fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Genji is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Genji\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Genji\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Genji?',
        options: [
          { id: 'a', text: 'Nepal' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Genji performs best on Nepal and may struggle on Circuit Royal.',
      },
    ],
  },
};