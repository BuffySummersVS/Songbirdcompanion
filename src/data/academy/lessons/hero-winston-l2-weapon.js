export default {
  id: 'hero-winston-l2-weapon',
  pathId: 'hero-winston',
  title: 'Winston: Tesla Cannon',
  subtitle: 'Mastering Winston\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tesla Cannon — Overview',
      body: 'Type: Short-range beam / cleave · Ammo: Magazine based · Damage: Short-range cleave damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Automatically damages enemies in a short cone, making it strong into mobile or hard-to-aim targets.',
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
      body: 'New Winston players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Winston\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Tesla Cannon' },
          { id: 'b', text: 'Jump Pack' },
          { id: 'c', text: 'Primal Rage' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Winston\'s primary weapon is the Tesla Cannon.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Tesla Cannon?',
        options: [
          { id: 'a', text: 'Short-range cleave damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Tesla Cannon\'s output is: Short-range cleave damage.',
      },
    ],
  },
};