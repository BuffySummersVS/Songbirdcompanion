export default {
  id: 'hero-lifeweaver-l1-basics',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Introduction',
  subtitle: 'Role, stats, and what makes Lifeweaver unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Lifeweaver is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Lifeweaver\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Parting Gift',
      body: 'When Lifeweaver dies, he drops a healing flower that the first hero to walk over it can pick up.',
    },
    {
      type: 'text',
      body: 'Niran Pruksamanee is a Thai bio-engineer who developed Biolight — a revolutionary fusion of organic botanical science and energy-based medical technology — and has spent his career proving that the future of medicine is grown, not manufactured. Estra',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Lifeweaver',
      body: 'Lifeweaver works well on: Lijiang Control Center, Nepal, Oasis. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Lifeweaver fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Lifeweaver is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Lifeweaver\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Lifeweaver\'s total HP is 200 (200 Health — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Lifeweaver?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Lifeweaver performs best on Lijiang Control Center and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};