export default {
  id: 'hero-hanzo-l1-basics',
  pathId: 'hero-hanzo',
  title: 'Hanzo: Introduction',
  subtitle: 'Role, stats, and what makes Hanzo unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Hanzo is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Hanzo\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Wall Climb / Damage',
      body: 'Hanzo can climb walls and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Hanzo Shimada carries the guilt of believing he killed his brother Genji on the orders of the Shimada clan elders, a wound that never healed even as he abandoned the family and became a wandering archer. He travels the world testing himself against w',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Hanzo',
      body: 'Hanzo works well on: King\'s Row, Rialto, Dorado. May struggle on: Lijiang Control Center, Oasis.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Hanzo fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Hanzo is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Hanzo\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Hanzo\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Hanzo?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Hanzo performs best on King\'s Row and may struggle on Lijiang Control Center.',
      },
    ],
  },
};