export default {
  id: 'hero-sigma-l2-weapon',
  pathId: 'hero-sigma',
  title: 'Sigma: Hyperspheres',
  subtitle: 'Mastering Sigma\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Hyperspheres — Overview',
      body: 'Type: Bouncing explosive projectiles · Ammo: 2 shots · Damage: Explosive projectile damage · Cooldown: Short reload rhythm',
    },
    {
      type: 'text',
      body: 'Launch two bouncing spheres that explode after a short distance or on contact.',
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
      body: 'New Sigma players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sigma\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Hyperspheres' },
          { id: 'b', text: 'Experimental Barrier' },
          { id: 'c', text: 'Gravitic Flux' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Sigma\'s primary weapon is the Hyperspheres.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Hyperspheres?',
        options: [
          { id: 'a', text: 'Explosive projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Hyperspheres\'s output is: Explosive projectile damage.',
      },
    ],
  },
};