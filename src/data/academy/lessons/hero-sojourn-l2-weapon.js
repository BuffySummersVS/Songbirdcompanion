export default {
  id: 'hero-sojourn-l2-weapon',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Railgun',
  subtitle: 'Mastering Sojourn\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Railgun — Overview',
      body: 'Type: Automatic projectile + charged hitscan rail · Ammo: Magazine based · Damage: Sustained primary fire builds high burst secondary fire · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Primary fire builds energy, then secondary fire releases a powerful rail shot.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Core Usage Tips',
      body: 'Understand when to use your primary weapon versus your abilities. Aim to maximise damage or healing throughput depending on the situation.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Mistake',
      body: 'New Sojourn players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sojourn\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Railgun' },
          { id: 'b', text: 'Power Slide' },
          { id: 'c', text: 'Overclock' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Sojourn\'s primary weapon is the Railgun.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Railgun?',
        options: [
          { id: 'a', text: 'Sustained primary fire builds high burst secondary fire' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Railgun\'s output is: Sustained primary fire builds high burst secondary fire.',
      },
    ],
  },
};