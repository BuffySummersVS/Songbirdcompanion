export default {
  id: 'hero-echo-l2-weapon',
  pathId: 'hero-echo',
  title: 'Echo: Tri-Shot',
  subtitle: 'Mastering Echo\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tri-Shot — Overview',
      body: 'Type: Projectile burst · Ammo: Magazine based · Damage: Three-projectile burst damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires three projectiles in a triangular pattern, rewarding aim and range control.',
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
      body: 'New Echo players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Echo\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Tri-Shot' },
          { id: 'b', text: 'Sticky Bombs' },
          { id: 'c', text: 'Duplicate' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Echo\'s primary weapon is the Tri-Shot.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Tri-Shot?',
        options: [
          { id: 'a', text: 'Three-projectile burst damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Tri-Shot\'s output is: Three-projectile burst damage.',
      },
    ],
  },
};