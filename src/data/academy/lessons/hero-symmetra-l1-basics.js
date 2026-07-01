export default {
  id: 'hero-symmetra-l1-basics',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Introduction',
  subtitle: 'Role, stats, and what makes Symmetra unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Symmetra is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Symmetra\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '125 Health, 125 Shields — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Satya Vaswami is a gifted architect of hard-light constructs who grew up in poverty before the Vishkar Corporation selected her for their elite training programme, and she repays that opportunity through absolute dedication to their vision of enginee',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Symmetra',
      body: 'Symmetra works well on: Lijiang Control Center, King\'s Row, Nepal Village, Antarctic Peninsula, Suravasa, Shambali Monastery, Hanaoka, Throne of Anubis, New Junk City. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Symmetra fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Symmetra is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Symmetra\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Symmetra\'s total HP is 250 (125 Health, 125 Shields — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Symmetra?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Symmetra performs best on Lijiang Control Center and may struggle on Circuit Royal.',
      },
    ],
  },
};