export default {
  id: 'hero-sojourn-l1-basics',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Introduction',
  subtitle: 'Role, stats, and what makes Sojourn unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Sojourn is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Sojourn\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Vivian Chase is a veteran Overwatch soldier and former Canadian military officer whose body was heavily damaged in combat and rebuilt with cutting-edge cybernetics, including a powerful railgun arm. She came out of retirement when Overwatch was recal',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Sojourn',
      body: 'Sojourn works well on: Midtown, Circuit Royal, Dorado. May struggle on: Lijiang Control Center, Nepal Village, Antarctic Peninsula, Blizzard World, Colosseo, Hanaoka, Hollywood, Paraíso, Runasapi, Samoa, Suravasa, Throne of Anubis, Esperança, Shambali Monastery, New Junk City.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Sojourn fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Sojourn is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Sojourn\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Sojourn\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Sojourn?',
        options: [
          { id: 'a', text: 'Midtown' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Sojourn performs best on Midtown and may struggle on Lijiang Control Center.',
      },
    ],
  },
};