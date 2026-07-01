export default {
  id: 'hero-cassidy-l1-basics',
  pathId: 'hero-cassidy',
  title: 'Cassidy: Introduction',
  subtitle: 'Role, stats, and what makes Cassidy unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Cassidy is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Cassidy\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Cole Cassidy grew up as a member of the outlaw Deadlock Gang before being caught and offered a stark choice: prison or Overwatch\'s classified Blackwatch division. He served as one of Blackwatch\'s most effective operatives until the fall of Overwatch ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Cassidy',
      body: 'Cassidy works well on: King\'s Row, Route 66, Midtown. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Cassidy fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Cassidy is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Cassidy\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Cassidy\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Cassidy?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Cassidy performs best on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};