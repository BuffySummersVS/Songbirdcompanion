export default {
  id: 'hero-ramattra-l2-weapon',
  pathId: 'hero-ramattra',
  title: 'Ramattra: Void Accelerator',
  subtitle: 'Mastering Ramattra\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Void Accelerator — Overview',
      body: 'Type: Projectile staff · Ammo: Magazine based · Damage: Sustained projectile damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires a stream of projectiles from Ramattra\'s staff.',
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
      body: 'New Ramattra players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Ramattra\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Void Accelerator' },
          { id: 'b', text: 'Void Barrier' },
          { id: 'c', text: 'Annihilation' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Ramattra\'s primary weapon is the Void Accelerator.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Void Accelerator?',
        options: [
          { id: 'a', text: 'Sustained projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Void Accelerator\'s output is: Sustained projectile damage.',
      },
    ],
  },
};