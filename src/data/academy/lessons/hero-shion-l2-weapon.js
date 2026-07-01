export default {
  id: 'hero-shion-l2-weapon',
  pathId: 'hero-shion',
  title: 'Shion: Kira Pistols',
  subtitle: 'Mastering Shion\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Kira Pistols — Overview',
      body: 'Type: Dual semi-automatic hitscan pistols · Ammo: Magazine based · Damage: Fast pistol damage with critical hit potential · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Dual pistols that can be fired individually, giving Shion flexible close to mid-range pressure.',
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
      body: 'New Shion players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Shion\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Kira Pistols' },
          { id: 'b', text: 'Execution' },
          { id: 'c', text: 'Satsuriku Spree' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Shion\'s primary weapon is the Kira Pistols.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Kira Pistols?',
        options: [
          { id: 'a', text: 'Fast pistol damage with critical hit potential' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Kira Pistols\'s output is: Fast pistol damage with critical hit potential.',
      },
    ],
  },
};