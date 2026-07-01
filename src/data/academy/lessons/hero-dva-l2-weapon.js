export default {
  id: 'hero-dva-l2-weapon',
  pathId: 'hero-dva',
  title: 'D.Va: Fusion Cannons',
  subtitle: 'Mastering D.Va\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Fusion Cannons — Overview',
      body: 'Type: Automatic shotguns · Ammo: Infinite · Damage: Close-range pellet damage · Cooldown: None',
    },
    {
      type: 'text',
      body: 'Twin short-range cannons with infinite ammo. Strong up close but weaker at range.',
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
      body: 'New D.Va players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is D.Va\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Fusion Cannons' },
          { id: 'b', text: 'Boosters' },
          { id: 'c', text: 'Self-Destruct' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'D.Va\'s primary weapon is the Fusion Cannons.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Fusion Cannons?',
        options: [
          { id: 'a', text: 'Close-range pellet damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Fusion Cannons\'s output is: Close-range pellet damage.',
      },
    ],
  },
};