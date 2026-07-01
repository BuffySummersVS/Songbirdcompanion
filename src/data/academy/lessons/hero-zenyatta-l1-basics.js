export default {
  id: 'hero-zenyatta-l1-basics',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Introduction',
  subtitle: 'Role, stats, and what makes Zenyatta unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Zenyatta is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Zenyatta\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '50 Health, 150 Shields — 200 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Snap Kick',
      body: 'Zenyatta\'s melee attack deals significantly more damage than a standard quick melee.',
    },
    {
      type: 'text',
      body: 'Tekhartha Zenyatta is a Shambali omnic monk who broke from the monastery\'s doctrine to wander the world and form genuine personal connections with humans, believing that understanding grows from relationship rather than instruction. He became Genji\'s',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Zenyatta',
      body: 'Zenyatta works well on: King\'s Row, Rialto, Midtown, Blizzard World, Hollywood, Paraíso, Runasapi, Shambali Monastery, Hanaoka, Throne of Anubis, Esperança. May struggle on: Lijiang Control Center, Nepal Sanctum.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Zenyatta fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Zenyatta is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Zenyatta\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Zenyatta\'s total HP is 200 (50 Health, 150 Shields — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Zenyatta?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Zenyatta performs best on King\'s Row and may struggle on Lijiang Control Center.',
      },
    ],
  },
};