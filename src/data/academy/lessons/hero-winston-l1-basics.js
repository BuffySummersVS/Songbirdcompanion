export default {
  id: 'hero-winston-l1-basics',
  pathId: 'hero-winston',
  title: 'Winston: Introduction',
  subtitle: 'Role, stats, and what makes Winston unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Winston is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Winston\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '350 Health, 225 Armour — 575 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'A genetically engineered gorilla raised on the Horizon Lunar Colony by the brilliant scientist Dr. Harold Winston, who gave him both his name and his love of knowledge. After an omnic uprising killed most of the colony\'s scientists, Winston escaped t',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Winston',
      body: 'Winston works well on: Watchpoint: Gibraltar, Dorado, Numbani, Esperança. May struggle on: King\'s Row, Lijiang Control Center.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Winston fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Winston is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Winston\'s total HP?',
        options: [
          { id: 'a', text: '525' },
          { id: 'b', text: '575' },
          { id: 'c', text: '625' },
          { id: 'd', text: '675' },
        ],
        correctId: 'b',
        explanation: 'Winston\'s total HP is 575 (350 Health, 225 Armour — 575 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Winston?',
        options: [
          { id: 'a', text: 'Watchpoint: Gibraltar' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Winston performs best on Watchpoint: Gibraltar and may struggle on King\'s Row.',
      },
    ],
  },
};