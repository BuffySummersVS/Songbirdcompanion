export default {
  id: 'hero-hazard-l1-basics',
  pathId: 'hero-hazard',
  title: 'Hazard: Introduction',
  subtitle: 'Role, stats, and what makes Hazard unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Hazard is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Hazard\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '475 Health, 225 Armour — 700 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Oliver Bryne is a former criminal turned extreme-sports daredevil who was exposed to experimental kinetic technology during a botched heist that left his crew dead. The accident gifted him the ability to generate and redirect gravitational force, tur',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Hazard',
      body: 'Hazard works well on: King\'s Row, New Junk City, Lijiang Tower. May struggle on: Havana, Circuit Royal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Hazard fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Hazard is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Hazard\'s total HP?',
        options: [
          { id: 'a', text: '650' },
          { id: 'b', text: '700' },
          { id: 'c', text: '750' },
          { id: 'd', text: '800' },
        ],
        correctId: 'b',
        explanation: 'Hazard\'s total HP is 700 (475 Health, 225 Armour — 700 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Hazard?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Hazard performs best on King\'s Row and may struggle on Havana.',
      },
    ],
  },
};