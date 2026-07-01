export default {
  id: 'hero-wuyang-l1-basics',
  pathId: 'hero-wuyang',
  title: 'Wuyang: Introduction',
  subtitle: 'Role, stats, and what makes Wuyang unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Wuyang is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Wuyang\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '225 Health — 225 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Survivor',
      body: 'Health regeneration activates after only 3 seconds without taking damage, faster than most heroes. Using a movement ability also triggers passive health regeneration.',
    },
    {
      type: 'text',
      body: 'Wuyang Ye always dreamed of following his family\'s legacy into Wuxing University\'s prestigious Fire College, only to be accepted into the Water College instead — a blow to his pride that became an unexpected gift as he discovered a natural talent for',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Wuyang',
      body: 'Wuyang works well on: Lijiang Control Center, Oasis, Nepal. May struggle on: Havana, Circuit Royal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Wuyang fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Wuyang is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Wuyang\'s total HP?',
        options: [
          { id: 'a', text: '175' },
          { id: 'b', text: '225' },
          { id: 'c', text: '275' },
          { id: 'd', text: '325' },
        ],
        correctId: 'b',
        explanation: 'Wuyang\'s total HP is 225 (225 Health — 225 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Wuyang?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Wuyang performs best on Lijiang Control Center and may struggle on Havana.',
      },
    ],
  },
};