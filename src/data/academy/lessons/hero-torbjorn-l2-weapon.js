export default {
  id: 'hero-torbjorn-l2-weapon',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Rivet Gun',
  subtitle: 'Mastering Torbjörn\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Rivet Gun — Overview',
      body: 'Type: Projectile weapon · Ammo: Magazine based · Damage: Long-range rivets and close-range shotgun burst · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires long-range rivets or a close-range shotgun-style burst.',
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
      body: 'New Torbjörn players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Torbjörn\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Rivet Gun' },
          { id: 'b', text: 'Deploy Turret' },
          { id: 'c', text: 'Molten Core' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Torbjörn\'s primary weapon is the Rivet Gun.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Rivet Gun?',
        options: [
          { id: 'a', text: 'Long-range rivets and close-range shotgun burst' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Rivet Gun\'s output is: Long-range rivets and close-range shotgun burst.',
      },
    ],
  },
};