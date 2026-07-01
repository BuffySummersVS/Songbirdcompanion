export default {
  id: 'hero-juno-l1-basics',
  pathId: 'hero-juno',
  title: 'Juno: Introduction',
  subtitle: 'Role, stats, and what makes Juno unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Juno is a Support hero whose job is to sustain allies, enable combos, and control the battlefield. Understanding the basics of Juno\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '175 Health, 50 Shields — 225 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Glide Boost',
      body: 'While airborne, Juno can double jump and hold jump to hover, giving her strong aerial mobility and positioning.',
    },
    {
      type: 'text',
      body: 'Juno grew up in the low-gravity environment of the Martian colonies and arrived on Earth like someone who had studied the planet extensively and was absolutely not prepared for how loud it actually is. Her support kit revolves around speed and mobili',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Juno',
      body: 'Juno works well on: Dorado, Watchpoint: Gibraltar, Numbani. May struggle on: Lijiang Control Center, Nepal Sanctum.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Juno fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Juno is a Support hero whose main purpose is to sustain allies, enable combos, and control the battlefield.',
      },
      {
        id: 'q2',
        text: 'What is Juno\'s total HP?',
        options: [
          { id: 'a', text: '175' },
          { id: 'b', text: '225' },
          { id: 'c', text: '275' },
          { id: 'd', text: '325' },
        ],
        correctId: 'b',
        explanation: 'Juno\'s total HP is 225 (175 Health, 50 Shields — 225 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Juno?',
        options: [
          { id: 'a', text: 'Dorado' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Juno performs best on Dorado and may struggle on Lijiang Control Center.',
      },
    ],
  },
};