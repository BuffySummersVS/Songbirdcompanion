export default {
  id: 'hero-kiriko-l1-basics',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Introduction',
  subtitle: 'Role, stats, and what makes Kiriko unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Kiriko is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Kiriko\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Wall Climb',
      body: 'Kiriko can climb walls, giving her strong vertical positioning and escape options.',
    },
    {
      type: 'text',
      body: 'Kiriko Kamori is a young shrine maiden from Kanezaka in Tokyo, trained in both the traditional kitsune fox spirit arts of her grandmother and the more grounded ninja techniques passed down through her mother\'s side of the family. She grew up alongsid',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Kiriko',
      body: 'Kiriko works well on: Nepal, Oasis, Dorado. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Kiriko fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Kiriko is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Kiriko\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Kiriko\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Kiriko?',
        options: [
          { id: 'a', text: 'Nepal' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Kiriko performs best on Nepal and may struggle on Circuit Royal.',
      },
    ],
  },
};