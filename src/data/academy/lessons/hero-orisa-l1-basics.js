export default {
  id: 'hero-orisa-l1-basics',
  pathId: 'hero-orisa',
  title: 'Orisa: Introduction',
  subtitle: 'Role, stats, and what makes Orisa unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Orisa is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Orisa\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '275 Health, 350 Armour — 625 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Built by eleven-year-old prodigy Efi Oladele from salvaged OR15 defense robots, Orisa serves as the guardian of Numbani — programmed with Efi\'s own ideals of protection and justice. Being new to the world, she approaches every challenge with earnest ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Orisa',
      body: 'Orisa works well on: King\'s Row, Esperança, Midtown. May struggle on: Watchpoint: Gibraltar, Dorado, Antarctic Peninsula, Blizzard World, Colosseo, Esperança, Hollywood, Runasapi, Samoa, Shambali Monastery.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Orisa fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Orisa is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Orisa\'s total HP?',
        options: [
          { id: 'a', text: '575' },
          { id: 'b', text: '625' },
          { id: 'c', text: '675' },
          { id: 'd', text: '725' },
        ],
        correctId: 'b',
        explanation: 'Orisa\'s total HP is 625 (275 Health, 350 Armour — 625 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Orisa?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Orisa performs best on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};