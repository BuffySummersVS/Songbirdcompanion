export default {
  id: 'hero-roadhog-l1-basics',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Introduction',
  subtitle: 'Role, stats, and what makes Roadhog unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Roadhog is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Roadhog\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '650 Health — 650 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Mako Rutledge was a Queensland farmer whose land was obliterated in the catastrophic explosion of the Australian omnium — an event he helped trigger as part of the Australian Liberation Front. Hardened by years surviving in the irradiated Outback, he',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Roadhog',
      body: 'Roadhog works well on: Ilios Well, Nepal Sanctum, Lijiang Garden. May struggle on: Circuit Royal, Junkertown, Blizzard World, Hanaoka, Hollywood, Paraíso, Throne of Anubis, Colosseo.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Roadhog fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Roadhog is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Roadhog\'s total HP?',
        options: [
          { id: 'a', text: '600' },
          { id: 'b', text: '650' },
          { id: 'c', text: '700' },
          { id: 'd', text: '750' },
        ],
        correctId: 'b',
        explanation: 'Roadhog\'s total HP is 650 (650 Health — 650 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Roadhog?',
        options: [
          { id: 'a', text: 'Ilios Well' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Roadhog performs best on Ilios Well and may struggle on Circuit Royal.',
      },
    ],
  },
};