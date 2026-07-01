export default {
  id: 'hero-anran-l2-weapon',
  pathId: 'hero-anran',
  title: 'Anran: Zhuque Fans',
  subtitle: 'Mastering Anran\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Zhuque Fans — Overview',
      body: 'Type: Projectile fire weapon · Ammo: Magazine based · Damage: Fiery projectile damage; applies Ignition burn pressure · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Throws fiery fan projectiles that pressure enemies at mid range and help build Ignition burn pressure.',
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
      body: 'New Anran players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Anran\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Zhuque Fans' },
          { id: 'b', text: 'Fan the Flames' },
          { id: 'c', text: 'Vermillion Ascent / Vermillion Revival' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Anran\'s primary weapon is the Zhuque Fans.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Zhuque Fans?',
        options: [
          { id: 'a', text: 'Fiery projectile damage; applies Ignition burn pressure' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Zhuque Fans\'s output is: Fiery projectile damage; applies Ignition burn pressure.',
      },
    ],
  },
};