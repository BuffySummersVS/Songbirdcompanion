export default {
  id: 'hero-domina-l1-basics',
  pathId: 'hero-domina',
  title: 'Domina: Introduction',
  subtitle: 'Role, stats, and what makes Domina unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Domina is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Domina\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '100 Health, 400 Shields — 500 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Reconstruction',
      body: 'Dealing ability damage restores Domina\'s shield health, rewarding accurate use of Crystal Charge and Sonic Repulsors.',
    },
    {
      type: 'text',
      body: 'Vaira Singhania is the granddaughter of Vishkar Corporation\'s founder, raised from birth to be its next leader — a cutthroat perfectionist and razor-sharp negotiator who climbed from private equity to a seat on the Vishkar board. She oversaw Vishkar\'',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Domina',
      body: 'Domina works well on: Circuit Royal, Havana, Shambali Monastery. May struggle on: King\'s Row, Lijiang Control Center, Nepal Sanctum.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Domina fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Domina is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Domina\'s total HP?',
        options: [
          { id: 'a', text: '450' },
          { id: 'b', text: '500' },
          { id: 'c', text: '550' },
          { id: 'd', text: '600' },
        ],
        correctId: 'b',
        explanation: 'Domina\'s total HP is 500 (100 Health, 400 Shields — 500 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Domina?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Domina performs best on Circuit Royal and may struggle on King\'s Row.',
      },
    ],
  },
};