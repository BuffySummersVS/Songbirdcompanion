export default {
  id: 'hero-venture-l1-basics',
  pathId: 'hero-venture',
  title: 'Venture: Introduction',
  subtitle: 'Role, stats, and what makes Venture unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Venture is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Venture\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Explorer\'s Resolve / Damage',
      body: 'Venture gains temporary shields from using abilities and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Dr. Sloane is a non-binary archaeologist and geologist of extraordinary enthusiasm who became obsessed with the omnic structures buried deep beneath the Earth\'s surface after discovering one on a routine dig. Equipped with a powerful excavation drill',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Venture',
      body: 'Venture works well on: King\'s Row, Suravasa, New Junk City, Colosseo. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Venture fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Venture is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Venture\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Venture\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Venture?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Venture performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};