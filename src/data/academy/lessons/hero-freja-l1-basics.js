export default {
  id: 'hero-freja-l1-basics',
  pathId: 'hero-freja',
  title: 'Freja: Introduction',
  subtitle: 'Role, stats, and what makes Freja unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Freja is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Freja\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Damage',
      body: 'Damaging enemies temporarily reduces their received healing.',
    },
    {
      type: 'text',
      body: 'A Danish bounty hunter of minimal words and exceptional precision, Freja tracks the most dangerous quarry across Europe with her signature crossbow and her loyal wolf companion. She operates outside any organisation\'s jurisdiction, accepting contract',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Freja',
      body: 'Freja works well on: Circuit Royal, Havana, Watchpoint: Gibraltar. May struggle on: Lijiang Control Center, Nepal Village, Antarctic Peninsula, Hanaoka, Runasapi, Suravasa, Throne of Anubis, New Junk City, Esperança, Colosseo, Samoa.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Freja fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Freja is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Freja\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Freja\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Freja?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Freja performs best on Circuit Royal and may struggle on Lijiang Control Center.',
      },
    ],
  },
};