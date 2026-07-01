export default {
  id: 'hero-orisa-l2-weapon',
  pathId: 'hero-orisa',
  title: 'Orisa: Augmented Fusion Driver',
  subtitle: 'Mastering Orisa\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Augmented Fusion Driver — Overview',
      body: 'Type: Automatic projectile weapon · Ammo: Heat meter · Damage: Sustained projectile damage · Cooldown: Overheat reload',
    },
    {
      type: 'text',
      body: 'Automatic projectile weapon that uses heat instead of traditional ammo.',
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
      body: 'New Orisa players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Orisa\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Augmented Fusion Driver' },
          { id: 'b', text: 'Energy Javelin' },
          { id: 'c', text: 'Terra Surge' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Orisa\'s primary weapon is the Augmented Fusion Driver.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Augmented Fusion Driver?',
        options: [
          { id: 'a', text: 'Sustained projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Augmented Fusion Driver\'s output is: Sustained projectile damage.',
      },
    ],
  },
};