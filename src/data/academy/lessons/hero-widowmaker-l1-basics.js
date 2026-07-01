export default {
  id: 'hero-widowmaker-l1-basics',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Introduction',
  subtitle: 'Role, stats, and what makes Widowmaker unique',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Widowmaker is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Widowmaker\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '200 Health — 200 total HP, Movement speed: 5.5 m/s, Difficulty: 5/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Amélie Lacroix was once a warm, brilliant woman and wife of Overwatch agent Gérard Lacroix — until Talon kidnapped her, spent weeks reprogramming her, and returned her to Gérard as a sleeper agent who killed him in his sleep. They completed the trans',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Widowmaker',
      body: 'Widowmaker works well on: Circuit Royal, Havana, Junkertown. May struggle on: Lijiang Control Center, Nepal Village, Antarctic Peninsula, Colosseo, Hanaoka, New Junk City, Runasapi, Samoa, Suravasa, Throne of Anubis.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Widowmaker fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Widowmaker\'s total HP?',
        options: [
          { id: 'a', text: '150' },
          { id: 'b', text: '200' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker\'s total HP is 200 (200 Health — 200 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Widowmaker?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Widowmaker performs best on Circuit Royal and may struggle on Lijiang Control Center.',
      },
    ],
  },
};