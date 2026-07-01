export default {
  id: 'hero-dva-l1-basics',
  pathId: 'hero-dva',
  title: 'D.Va: Introduction',
  subtitle: 'Role, stats, and what makes D.Va unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'D.Va is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of D.Va\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '375 Health, 225 Armour — 600 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Hana Song is a decorated South Korean professional gamer recruited by MEKA to pilot mechs against the relentless Gwishin omnic attacks on the coast. When conventional military tactics failed, the government turned to elite gamers whose reflexes match',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick D.Va',
      body: 'D.Va works well on: Watchpoint: Gibraltar, Dorado, Numbani. May struggle on: King\'s Row, Lijiang Control Center, Blizzard World, Samoa.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does D.Va fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'D.Va is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is D.Va\'s total HP?',
        options: [
          { id: 'a', text: '550' },
          { id: 'b', text: '600' },
          { id: 'c', text: '650' },
          { id: 'd', text: '700' },
        ],
        correctId: 'b',
        explanation: 'D.Va\'s total HP is 600 (375 Health, 225 Armour — 600 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour D.Va?',
        options: [
          { id: 'a', text: 'Watchpoint: Gibraltar' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'D.Va performs best on Watchpoint: Gibraltar and may struggle on King\'s Row.',
      },
    ],
  },
};