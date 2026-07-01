export default {
  id: 'hero-freja-l2-weapon',
  pathId: 'hero-freja',
  title: 'Freja: Revdraw Crossbow',
  subtitle: 'Mastering Freja\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Revdraw Crossbow — Overview',
      body: 'Type: Precision projectile weapon · Ammo: Magazine based · Damage: Precision projectile damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A precision crossbow that rewards timing, positioning, and accurate shots.',
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
      body: 'New Freja players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Freja\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Revdraw Crossbow' },
          { id: 'b', text: 'Take Aim' },
          { id: 'c', text: 'Bola Shot' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Freja\'s primary weapon is the Revdraw Crossbow.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Revdraw Crossbow?',
        options: [
          { id: 'a', text: 'Precision projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Revdraw Crossbow\'s output is: Precision projectile damage.',
      },
    ],
  },
};