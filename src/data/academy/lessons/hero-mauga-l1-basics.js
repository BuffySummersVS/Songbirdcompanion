export default {
  id: 'hero-mauga-l1-basics',
  pathId: 'hero-mauga',
  title: 'Mauga: Introduction',
  subtitle: 'Role, stats, and what makes Mauga unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Mauga is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Mauga\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '425 Health, 250 Armour — 675 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Berserker',
      body: 'Mauga gains temporary overhealth when dealing critical damage.',
    },
    {
      type: 'text',
      body: 'A colossal Samoan warrior and former Overwatch heavy infantry soldier, Mauga grew bored of the organization\'s restrictions and joined Talon for the freedom to fight without limits. He is Baptiste\'s old comrade — the two served together until their pa',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Mauga',
      body: 'Mauga works well on: King\'s Row, Lijiang Control Center, Antarctic Peninsula, Samoa. May struggle on: Circuit Royal, Watchpoint: Gibraltar.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Mauga fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Mauga is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Mauga\'s total HP?',
        options: [
          { id: 'a', text: '625' },
          { id: 'b', text: '675' },
          { id: 'c', text: '725' },
          { id: 'd', text: '775' },
        ],
        correctId: 'b',
        explanation: 'Mauga\'s total HP is 675 (425 Health, 250 Armour — 675 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Mauga?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Mauga performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};