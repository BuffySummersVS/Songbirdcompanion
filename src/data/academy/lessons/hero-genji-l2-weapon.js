export default {
  id: 'hero-genji-l2-weapon',
  pathId: 'hero-genji',
  title: 'Genji: Shuriken',
  subtitle: 'Mastering Genji\'s primary combat tool',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Shuriken — Overview',
      body: 'Type: Projectile weapon · Ammo: Magazine based · Damage: Projectile burst damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Throws shuriken in accurate bursts or a close-range fan spread.',
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
      body: 'New Genji players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Genji\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Shuriken' },
          { id: 'b', text: 'Deflect' },
          { id: 'c', text: 'Dragonblade' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Genji\'s primary weapon is the Shuriken.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Shuriken?',
        options: [
          { id: 'a', text: 'Projectile burst damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Shuriken\'s output is: Projectile burst damage.',
      },
    ],
  },
};