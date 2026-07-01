export default {
  id: 'hero-mei-l1-basics',
  pathId: 'hero-mei',
  title: 'Mei: Introduction',
  subtitle: 'Role, stats, and what makes Mei unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Mei is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Mei\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '300 Health — 300 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Dr. Mei-Ling Zhou is a climatologist who volunteered to staff a remote Overwatch Ecopoint in Antarctica, only to be trapped there when a catastrophic storm damaged the facility and her entire team went into cryosleep as a last resort. She woke up alo',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Mei',
      body: 'Mei works well on: King\'s Row, Lijiang Control Center, Nepal Village. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Mei fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Mei is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Mei\'s total HP?',
        options: [
          { id: 'a', text: '250' },
          { id: 'b', text: '300' },
          { id: 'c', text: '350' },
          { id: 'd', text: '400' },
        ],
        correctId: 'b',
        explanation: 'Mei\'s total HP is 300 (300 Health — 300 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Mei?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Mei performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};