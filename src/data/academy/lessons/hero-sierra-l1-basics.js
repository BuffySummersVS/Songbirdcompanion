export default {
  id: 'hero-sierra-l1-basics',
  pathId: 'hero-sierra',
  title: 'Sierra: Introduction',
  subtitle: 'Role, stats, and what makes Sierra unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Sierra is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Sierra\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Recon / Damage',
      body: 'Damaging low-health enemies can reveal them through walls. Sierra also applies Damage role healing reduction.',
    },
    {
      type: 'text',
      body: 'Sierra Turner Woods grew up always on the move with her mother Kendra, never told why — until the day Kendra disappeared just before Sierra\'s thirteenth birthday, leaving only an emergency bus ticket and no explanation. That trail led her to the fath',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Sierra',
      body: 'Sierra works well on: Watchpoint: Gibraltar, Dorado, Numbani. May struggle on: Lijiang Control Center, Nepal Sanctum.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Sierra fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Sierra is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Sierra\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Sierra\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Sierra?',
        options: [
          { id: 'a', text: 'Watchpoint: Gibraltar' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Sierra performs best on Watchpoint: Gibraltar and may struggle on Lijiang Control Center.',
      },
    ],
  },
};