export default {
  id: 'hero-ashe-l1-basics',
  pathId: 'hero-ashe',
  title: 'Ashe: Introduction',
  subtitle: 'Role, stats, and what makes Ashe unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Ashe is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Ashe\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'Elizabeth Caledonia Ashe grew up in extraordinary wealth but craved the freedom of the outlaw life, eventually founding the Deadlock Gang and building it into the most feared criminal organisation in the American Southwest. Her history with Overwatch',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Ashe',
      body: 'Ashe works well on: Circuit Royal, Havana, Dorado, Blizzard World, Hollywood, Paraíso. May struggle on: Lijiang Control Center, Nepal Sanctum.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Ashe fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Ashe is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Ashe\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Ashe\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Ashe?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Ashe performs best on Circuit Royal and may struggle on Lijiang Control Center.',
      },
    ],
  },
};