export default {
  id: 'hero-lifeweaver-l2-weapon',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Healing Blossom',
  subtitle: 'Mastering Lifeweaver\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Healing Blossom — Overview',
      body: 'Type: Charged healing burst · Ammo: Energy based · Damage: None — up to 90 healing per charge on a targeted ally · Cooldown: Charge time',
    },
    {
      type: 'text',
      body: 'Hold to charge a healing burst, then release to heal a targeted ally. Higher charge means more healing, up to 90.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Secondary — Thorn Volley',
      body: 'Rapidly fires a spread of projectiles at enemies. (Rapid spread projectile, Ammo: Magazine based, Damage: Sustained spread projectile damage)',
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
      body: 'New Lifeweaver players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Lifeweaver\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Healing Blossom' },
          { id: 'b', text: 'Petal Platform' },
          { id: 'c', text: 'Tree of Life' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Lifeweaver\'s primary weapon is the Healing Blossom.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Healing Blossom?',
        options: [
          { id: 'a', text: 'None — up to 90 healing per charge on a targeted ally' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Healing Blossom\'s output is: None — up to 90 healing per charge on a targeted ally.',
      },
    ],
  },
};