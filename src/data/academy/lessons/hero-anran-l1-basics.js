export default {
  id: 'hero-anran-l1-basics',
  pathId: 'hero-anran',
  title: 'Anran: Introduction',
  subtitle: 'Role, stats, and what makes Anran unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Anran is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Anran\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Ignition / Flanker',
      body: 'Fire attacks can burn enemies. As a Flanker damage hero, Anran benefits from health packs more than standard heroes.',
    },
    {
      type: 'text',
      body: 'Anran Ye is a prodigy raised from the age of three to surpass her parents — celebrated Omnic Crisis veterans who trained her personally in kung fu, wushu-taolu, and classical Chinese dance, enrolling her in competitions she consistently won. She grad',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Anran',
      body: 'Anran works well on: Oasis, Nepal, Lijiang Tower, Samoa. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Anran fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Anran is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Anran\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Anran\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Anran?',
        options: [
          { id: 'a', text: 'Oasis' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Anran performs best on Oasis and may struggle on Circuit Royal.',
      },
    ],
  },
};