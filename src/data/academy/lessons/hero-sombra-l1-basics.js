export default {
  id: 'hero-sombra-l1-basics',
  pathId: 'hero-sombra',
  title: 'Sombra: Introduction',
  subtitle: 'Role, stats, and what makes Sombra unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Sombra is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Sombra\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Opportunist / Damage',
      body: 'Sombra can detect vulnerable enemies and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'An orphan from Mexico City\'s post-Crisis slums who survived by learning to exploit the secrets of the powerful, Sombra grew into the world\'s most dangerous information broker — invisible, irreplaceable, and loyal to absolutely no one permanently. She',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Sombra',
      body: 'Sombra works well on: Dorado, Watchpoint: Gibraltar, Numbani. May struggle on: King\'s Row, Lijiang Control Center.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Sombra fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Sombra is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Sombra\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Sombra\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Sombra?',
        options: [
          { id: 'a', text: 'Dorado' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Sombra performs best on Dorado and may struggle on King\'s Row.',
      },
    ],
  },
};