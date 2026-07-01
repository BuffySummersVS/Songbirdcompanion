export default {
  id: 'hero-junkerqueen-l1-basics',
  pathId: 'hero-junkerqueen',
  title: 'Junker Queen: Introduction',
  subtitle: 'Role, stats, and what makes Junker Queen unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Junker Queen is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Junker Queen\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '525 Health — 525 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Adrenaline Rush',
      body: 'Junker Queen heals from wound damage she deals to enemies.',
    },
    {
      type: 'text',
      body: 'Odessa "Dez" Stone clawed her way to the throne of Junkertown by defeating every challenger in the settlement\'s brutal gladiatorial arena. She rules the Outback\'s largest community with her giant axe "Gracie" and a presence that fills every room she ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Junker Queen',
      body: 'Junker Queen works well on: King\'s Row, Lijiang Control Center, Antarctic Peninsula, Colosseo, New Junk City, Runasapi, Samoa, Esperança, Paraíso. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Junker Queen fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Junker Queen is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Junker Queen\'s total HP?',
        options: [
          { id: 'a', text: '475' },
          { id: 'b', text: '525' },
          { id: 'c', text: '575' },
          { id: 'd', text: '625' },
        ],
        correctId: 'b',
        explanation: 'Junker Queen\'s total HP is 525 (525 Health — 525 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Junker Queen?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Junker Queen performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};