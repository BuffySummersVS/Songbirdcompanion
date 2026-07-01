export default {
  id: 'hero-lucio-l1-basics',
  pathId: 'hero-lucio',
  title: 'Lúcio: Introduction',
  subtitle: 'Role, stats, and what makes Lúcio unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Lúcio is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Lúcio\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '200 Health — 200 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Wall Ride',
      body: 'Lúcio can skate along walls, gaining speed and regenerating 4 ammo per second while wall riding.',
    },
    {
      type: 'text',
      body: 'Lúcio Correia dos Santos is a Brazilian DJ and activist who grew up in a favela forcibly restructured by the Vishkar Corporation, and responded by reverse-engineering their sonic technology and using it to drive them out. He took his music and his mo',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Lúcio',
      body: 'Lúcio works well on: Lijiang Control Center, Oasis, Nepal. May struggle on: Havana, Circuit Royal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Lúcio fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Lúcio is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Lúcio\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Lúcio\'s total HP is 200 (200 Health — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Lúcio?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Lúcio performs best on Lijiang Control Center and may struggle on Havana.',
      },
    ],
  },
};