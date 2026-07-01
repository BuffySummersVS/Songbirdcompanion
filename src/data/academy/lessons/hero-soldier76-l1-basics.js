export default {
  id: 'hero-soldier76-l1-basics',
  pathId: 'hero-soldier76',
  title: 'Soldier: 76: Introduction',
  subtitle: 'Role, stats, and what makes Soldier: 76 unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Soldier: 76 is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Soldier: 76\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Jack Morrison was the face of Overwatch — the idealistic, golden-boy commander who embodied everything the organisation stood for — until internal betrayal, a catastrophic confrontation with Gabriel Reyes, and the fall of Overwatch left him presumed ',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Soldier: 76',
      body: 'Soldier: 76 works well on: Route 66, Midtown, New Queen Street. May struggle on: Lijiang Control Center.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Soldier: 76 fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Soldier: 76 is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Soldier: 76\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Soldier: 76\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Soldier: 76?',
        options: [
          { id: 'a', text: 'Route 66' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Soldier: 76 performs best on Route 66 and may struggle on Lijiang Control Center.',
      },
    ],
  },
};