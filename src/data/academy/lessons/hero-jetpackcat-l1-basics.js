export default {
  id: 'hero-jetpackcat-l1-basics',
  pathId: 'hero-jetpackcat',
  title: 'Jetpack Cat: Introduction',
  subtitle: 'Role, stats, and what makes Jetpack Cat unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Jetpack Cat is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Jetpack Cat\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '225 Health — 225 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Jetpack',
      body: 'Permanent flight — Jetpack Cat remains airborne throughout combat. As a Tactician support, excess ultimate charge carries over to the next ultimate cycle.',
    },
    {
      type: 'text',
      body: 'Fika is a stray cat who wandered into Watchpoint: Gibraltar\'s landing bay and was adopted by Brigitte Lindholm, who named her after her Kanelbullar-like colouring and insatiable appetite for treats. Building a jetpack for a cat had been Brigitte\'s ch',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Jetpack Cat',
      body: 'Jetpack Cat works well on: Lijiang Control Center, Oasis, Nepal. May struggle on: King\'s Row, Eichenwalde.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Jetpack Cat fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Jetpack Cat is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Jetpack Cat\'s total HP?',
        options: [
          { id: 'a', text: '175' },
          { id: 'b', text: '225' },
          { id: 'c', text: '275' },
          { id: 'd', text: '325' },
        ],
        correctId: 'b',
        explanation: 'Jetpack Cat\'s total HP is 225 (225 Health — 225 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Jetpack Cat?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Jetpack Cat performs best on Lijiang Control Center and may struggle on King\'s Row.',
      },
    ],
  },
};