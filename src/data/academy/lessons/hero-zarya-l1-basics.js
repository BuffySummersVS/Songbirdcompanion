export default {
  id: 'hero-zarya-l1-basics',
  pathId: 'hero-zarya',
  title: 'Zarya: Introduction',
  subtitle: 'Role, stats, and what makes Zarya unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Zarya is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Zarya\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health, 325 Shields — 575 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Aleksandra Zaryanova was on course to become the world\'s strongest woman and Russia\'s greatest athletic hero when the second Omnic Crisis forced her to trade the podium for the front line to defend her homeland. Her particle cannon converts incoming ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Zarya',
      body: 'Zarya works well on: King\'s Row, Lijiang Control Center. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Zarya fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Zarya is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Zarya\'s total HP?',
        options: [
          { id: 'a', text: '525' },
          { id: 'b', text: '575' },
          { id: 'c', text: '625' },
          { id: 'd', text: '675' },
        ],
        correctId: 'b',
        explanation: 'Zarya\'s total HP is 575 (250 Health, 325 Shields — 575 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Zarya?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Zarya performs best on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};