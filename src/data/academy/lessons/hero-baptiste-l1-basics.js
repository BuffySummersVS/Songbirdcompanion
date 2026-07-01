export default {
  id: 'hero-baptiste-l1-basics',
  pathId: 'hero-baptiste',
  title: 'Baptiste: Introduction',
  subtitle: 'Role, stats, and what makes Baptiste unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Baptiste is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Baptiste\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Exo Boots / Shoulder Turret',
      body: 'Crouching charges Exo Boots for a high jump. Using any ability triggers a Shoulder Turret that fires up to 3 shots at nearby allies, each restoring 40 health.',
    },
    {
      type: 'text',
      body: 'Jean-Baptiste Augustin grew up in poverty in post-Crisis Haiti and joined Talon\'s paramilitary as the only viable path out — a choice he rationalised until he watched his unit massacre civilians on a routine contract. He went AWOL, became a combat me',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Baptiste',
      body: 'Baptiste works well on: King\'s Row, Rialto, Circuit Royal. May struggle on: Lijiang Control Center, Nepal Village.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Baptiste fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Baptiste is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Baptiste\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Baptiste\'s total HP is 200 (200 Health — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Baptiste?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Baptiste performs best on King\'s Row and may struggle on Lijiang Control Center.',
      },
    ],
  },
};