export default {
  id: 'hero-zarya-l2-weapon',
  pathId: 'hero-zarya',
  title: 'Zarya: Particle Cannon',
  subtitle: 'Mastering Zarya\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Particle Cannon — Overview',
      body: 'Type: Beam and explosive projectile · Ammo: Magazine based · Damage: Beam damage scales with energy · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A beam weapon that becomes much stronger as Zarya gains energy from her barriers.',
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
      body: 'New Zarya players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Zarya\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Particle Cannon' },
          { id: 'b', text: 'Particle Barrier' },
          { id: 'c', text: 'Graviton Surge' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Zarya\'s primary weapon is the Particle Cannon.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Particle Cannon?',
        options: [
          { id: 'a', text: 'Beam damage scales with energy' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Particle Cannon\'s output is: Beam damage scales with energy.',
      },
    ],
  },
};