export default {
  id: 'hero-pharah-l2-weapon',
  pathId: 'hero-pharah',
  title: 'Pharah: Rocket Launcher',
  subtitle: 'Mastering Pharah\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Rocket Launcher — Overview',
      body: 'Type: Explosive projectile launcher · Ammo: Magazine based · Damage: Direct and splash rocket damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires explosive rockets that deal direct and splash damage.',
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
      body: 'New Pharah players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Pharah\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Rocket Launcher' },
          { id: 'b', text: 'Jump Jet' },
          { id: 'c', text: 'Barrage' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Pharah\'s primary weapon is the Rocket Launcher.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Rocket Launcher?',
        options: [
          { id: 'a', text: 'Direct and splash rocket damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Rocket Launcher\'s output is: Direct and splash rocket damage.',
      },
    ],
  },
};