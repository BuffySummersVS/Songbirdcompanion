export default {
  id: 'hero-ramattra-l1-basics',
  pathId: 'hero-ramattra',
  title: 'Ramattra: Introduction',
  subtitle: 'Role, stats, and what makes Ramattra unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Ramattra is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Ramattra\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health, 225 Armour — 475 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Once a gentle Shambali monk who sought peace between humans and omnics through harmony and patience, Ramattra\'s faith was slowly destroyed by decades of persecution, broken promises, and violence against his kind. He founded Null Sector after conclud',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Ramattra',
      body: 'Ramattra works well on: King\'s Row, Nepal, Lijiang Tower. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Ramattra fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Ramattra is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Ramattra\'s total HP?',
        options: [
          { id: 'a', text: '425' },
          { id: 'b', text: '475' },
          { id: 'c', text: '525' },
          { id: 'd', text: '575' },
        ],
        correctId: 'b',
        explanation: 'Ramattra\'s total HP is 475 (250 Health, 225 Armour — 475 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Ramattra?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Ramattra performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};