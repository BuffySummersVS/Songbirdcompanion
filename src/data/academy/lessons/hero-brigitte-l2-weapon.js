export default {
  id: 'hero-brigitte-l2-weapon',
  pathId: 'hero-brigitte',
  title: 'Brigitte: Rocket Flail',
  subtitle: 'Mastering Brigitte\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Rocket Flail — Overview',
      body: 'Type: Melee weapon · Ammo: Infinite · Damage: 35 damage per swing in a wide arc · Cooldown: Swing recovery',
    },
    {
      type: 'text',
      body: 'A large flail that swings in a wide arc, striking multiple close-range targets.',
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
      body: 'New Brigitte players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Brigitte\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Rocket Flail' },
          { id: 'b', text: 'Repair Pack' },
          { id: 'c', text: 'Rally' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Brigitte\'s primary weapon is the Rocket Flail.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Rocket Flail?',
        options: [
          { id: 'a', text: '35 damage per swing in a wide arc' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Rocket Flail\'s output is: 35 damage per swing in a wide arc.',
      },
    ],
  },
};