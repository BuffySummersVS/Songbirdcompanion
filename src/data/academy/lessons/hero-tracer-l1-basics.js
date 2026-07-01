export default {
  id: 'hero-tracer-l1-basics',
  pathId: 'hero-tracer',
  title: 'Tracer: Introduction',
  subtitle: 'Role, stats, and what makes Tracer unique',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Tracer is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Tracer\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '175 Health — 175 total HP, Movement speed: 6 m/s, Difficulty: 5/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Flanker / Damage',
      body: 'Tracer has high mobility and benefits from flanker play; damaging enemies applies the Damage role healing reduction.',
    },
    {
      type: 'text',
      body: 'Lena Oxton was a rising British Overwatch pilot whose experimental slipstream fighter malfunctioned and desynchronised her from time, leaving her unable to hold a physical form until Dr. Winston built her a chronal accelerator to anchor her to the pr',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Tracer',
      body: 'Tracer works well on: Oasis, Nepal, Dorado. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Tracer fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Tracer is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Tracer\'s total HP?',
        options: [
          { id: 'a', text: '125' },
          { id: 'b', text: '175' },
          { id: 'c', text: '225' },
          { id: 'd', text: '275' },
        ],
        correctId: 'b',
        explanation: 'Tracer\'s total HP is 175 (175 Health — 175 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Tracer?',
        options: [
          { id: 'a', text: 'Oasis' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Tracer performs best on Oasis and may struggle on Circuit Royal.',
      },
    ],
  },
};