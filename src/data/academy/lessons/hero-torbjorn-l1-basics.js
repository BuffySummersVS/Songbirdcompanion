export default {
  id: 'hero-torbjorn-l1-basics',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Introduction',
  subtitle: 'Role, stats, and what makes Torbjörn unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Torbjörn is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Torbjörn\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Torbjörn Lindholm is a legendary Swedish engineer whose designs power both Overwatch\'s hardware and an uncomfortable number of its enemies\' weapons. He deploys turrets, fabricates armour from battlefield salvage, and maintains a running commentary on',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Torbjörn',
      body: 'Torbjörn works well on: King\'s Row, Rialto, Route 66, Antarctic Peninsula, Blizzard World, Hollywood, Paraíso, Shambali Monastery, Suravasa, Hanaoka, Throne of Anubis. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Torbjörn fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Torbjörn is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Torbjörn\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Torbjörn\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Torbjörn?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Torbjörn performs best on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};