export default {
  id: 'hero-doomfist-l2-weapon',
  pathId: 'hero-doomfist',
  title: 'Doomfist: Hand Cannon',
  subtitle: 'Mastering Doomfist\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Hand Cannon — Overview',
      body: 'Type: Short-range projectile shotgun · Ammo: 4 shots, regenerating · Damage: Close-range burst · Cooldown: Ammo regenerates over time',
    },
    {
      type: 'text',
      body: 'Fires short-range bursts from Doomfist\'s knuckles. Best used between ability combos.',
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
      body: 'New Doomfist players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Doomfist\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Hand Cannon' },
          { id: 'b', text: 'Rocket Punch' },
          { id: 'c', text: 'Meteor Strike' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Doomfist\'s primary weapon is the Hand Cannon.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Hand Cannon?',
        options: [
          { id: 'a', text: 'Close-range burst' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Hand Cannon\'s output is: Close-range burst.',
      },
    ],
  },
};