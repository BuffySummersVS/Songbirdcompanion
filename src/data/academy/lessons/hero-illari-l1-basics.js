export default {
  id: 'hero-illari-l1-basics',
  pathId: 'hero-illari',
  title: 'Illari: Introduction',
  subtitle: 'Role, stats, and what makes Illari unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Illari is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Illari\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '225 Health — 225 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Sol',
      body: 'Using a movement ability triggers passive health regeneration for a short duration.',
    },
    {
      type: 'text',
      body: 'Illari Quispe is the sole survivor of the Inti Warriors, a Peruvian group gifted with solar-powered abilities who were destroyed on a mission that Illari helped plan, carrying guilt she has never put down. She channels the sun\'s energy through her ri',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Illari',
      body: 'Illari works well on: Circuit Royal, Watchpoint: Gibraltar, Havana, Samoa. May struggle on: Lijiang Control Center, Nepal Village.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Illari fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Illari is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Illari\'s total HP?',
        options: [
          { id: 'a', text: '175' },
          { id: 'b', text: '225' },
          { id: 'c', text: '275' },
          { id: 'd', text: '325' },
        ],
        correctId: 'b',
        explanation: 'Illari\'s total HP is 225 (225 Health — 225 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Illari?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Illari performs best on Circuit Royal and may struggle on Lijiang Control Center.',
      },
    ],
  },
};