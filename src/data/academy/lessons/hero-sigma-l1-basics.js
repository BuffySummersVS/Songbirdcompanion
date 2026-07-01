export default {
  id: 'hero-sigma-l1-basics',
  pathId: 'hero-sigma',
  title: 'Sigma: Introduction',
  subtitle: 'Role, stats, and what makes Sigma unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Sigma is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Sigma\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '350 Health, 275 Shields — 625 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Tank',
      body: 'Reduces knockback and reduces ultimate charge gained by enemies from damaging or healing the tank.',
    },
    {
      type: 'text',
      body: 'Dr. Siebren de Kuiper was a Dutch astrophysicist on the verge of harnessing the power of a black hole when the experiment catastrophically failed, shattering his mind and granting him control over gravity itself. Talon recovered him from a secret mil',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Sigma',
      body: 'Sigma works well on: Circuit Royal, Havana, Junkertown, Hanaoka, Paraíso, Shambali Monastery, Throne of Anubis. May struggle on: Lijiang Control Center, Nepal Village.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Sigma fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Sigma is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Sigma\'s total HP?',
        options: [
          { id: 'a', text: '575' },
          { id: 'b', text: '625' },
          { id: 'c', text: '675' },
          { id: 'd', text: '725' },
        ],
        correctId: 'b',
        explanation: 'Sigma\'s total HP is 625 (350 Health, 275 Shields — 625 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Sigma?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Sigma performs best on Circuit Royal and may struggle on Lijiang Control Center.',
      },
    ],
  },
};