export default {
  id: 'hero-brigitte-l1-basics',
  pathId: 'hero-brigitte',
  title: 'Brigitte: Introduction',
  subtitle: 'Role, stats, and what makes Brigitte unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Brigitte is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Brigitte\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '300 Health — 300 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Inspire',
      body: 'Dealing damage with Rocket Flail heals nearby allies over a short period.',
    },
    {
      type: 'text',
      body: 'Brigitte Lindholm is the daughter of the legendary engineer Torbjörn and the goddaughter of the crusader Reinhardt, who grew up surrounded by heroes but preferred to be the person keeping their armour from falling apart. When Reinhardt came out of re',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Brigitte',
      body: 'Brigitte works well on: King\'s Row, Eichenwalde, Nepal Village, Shambali Monastery, Suravasa, Samoa. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Brigitte fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Brigitte is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Brigitte\'s total HP?',
        options: [
          { id: 'a', text: '250' },
          { id: 'b', text: '300' },
          { id: 'c', text: '350' },
          { id: 'd', text: '400' },
        ],
        correctId: 'b',
        explanation: 'Brigitte\'s total HP is 300 (300 Health — 300 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Brigitte?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Brigitte performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};