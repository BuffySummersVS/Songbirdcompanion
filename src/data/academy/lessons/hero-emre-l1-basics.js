export default {
  id: 'hero-emre-l1-basics',
  pathId: 'hero-emre',
  title: 'Emre: Introduction',
  subtitle: 'Role, stats, and what makes Emre unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Emre is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Emre\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Altered Vitals / Damage',
      body: 'Emre has altered regeneration behaviour and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Emre Sarioglu was a tactical prodigy from Istanbul whose natural leadership and sharp mind made him the first post-Omnic Crisis recruit to the Overwatch Strike Team. After years of watching corruption hollow out the organisation he believed in, he wa',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Emre',
      body: 'Emre works well on: Midtown, Route 66, King\'s Row. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Emre fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Emre is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Emre\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Emre\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Emre?',
        options: [
          { id: 'a', text: 'Midtown' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Emre performs best on Midtown and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};