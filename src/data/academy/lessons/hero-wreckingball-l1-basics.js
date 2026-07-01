export default {
  id: 'hero-wreckingball-l1-basics',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Introduction',
  subtitle: 'Role, stats, and what makes Wrecking Ball unique',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Wrecking Ball is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Wrecking Ball\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '450 Health, 275 Armour — 725 total HP, Movement speed: 5.5 m/s, Difficulty: 5/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Hammond is a highly intelligent hamster who was part of the same genetic enhancement program as Winston aboard the Horizon Lunar Colony. He escaped in a homemade mech-ball, crash-landed in Junkertown, and became the undefeated champion of the local g',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Wrecking Ball',
      body: 'Wrecking Ball works well on: Ilios, Lijiang Garden, Dorado, Colosseo, Hollywood. May struggle on: King\'s Row, Nepal Village.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Wrecking Ball fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Wrecking Ball\'s total HP?',
        options: [
          { id: 'a', text: '675' },
          { id: 'b', text: '725' },
          { id: 'c', text: '775' },
          { id: 'd', text: '825' },
        ],
        correctId: 'b',
        explanation: 'Wrecking Ball\'s total HP is 725 (450 Health, 275 Armour — 725 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Wrecking Ball?',
        options: [
          { id: 'a', text: 'Ilios' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball performs best on Ilios and may struggle on King\'s Row.',
      },
    ],
  },
};