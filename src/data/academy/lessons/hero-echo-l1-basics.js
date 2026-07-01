export default {
  id: 'hero-echo-l1-basics',
  pathId: 'hero-echo',
  title: 'Echo: Introduction',
  subtitle: 'Role, stats, and what makes Echo unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Echo is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Echo\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Glide / Damage',
      body: 'Echo can glide while airborne and applies the Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Echo is a next-generation adaptive AI created by the brilliant Dr. Mina Liao, capable of studying and replicating the abilities of anyone she encounters in battle. She served under Cassidy\'s watch before the fall of Overwatch, and in the years since ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Echo',
      body: 'Echo works well on: Dorado, Watchpoint: Gibraltar, Numbani. May struggle on: Lijiang Control Center, King\'s Row.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Echo fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Echo is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Echo\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Echo\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Echo?',
        options: [
          { id: 'a', text: 'Dorado' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Echo performs best on Dorado and may struggle on Lijiang Control Center.',
      },
    ],
  },
};