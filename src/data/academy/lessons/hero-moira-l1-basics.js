export default {
  id: 'hero-moira-l1-basics',
  pathId: 'hero-moira',
  title: 'Moira: Introduction',
  subtitle: 'Role, stats, and what makes Moira unique',
  difficulty: 1,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Moira is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Moira\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '200 Health — 200 total HP, Movement speed: 5.5 m/s, Difficulty: 1/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Support',
      body: 'Passively regenerates health after a short period without taking damage.',
    },
    {
      type: 'text',
      body: 'Dr. Moira O\'Deorain is an Irish geneticist of extraordinary and unchecked ambition who pushes biological science past every ethical limit the field has established, pursuing discoveries too dangerous for legitimate institutions and too interesting to',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Moira',
      body: 'Moira works well on: King\'s Row, Nepal Village, Lijiang Control Center. May struggle on: Havana, Circuit Royal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Moira fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Moira is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Moira\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Moira\'s total HP is 200 (200 Health — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Moira?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Moira performs best on King\'s Row and may struggle on Havana.',
      },
    ],
  },
};