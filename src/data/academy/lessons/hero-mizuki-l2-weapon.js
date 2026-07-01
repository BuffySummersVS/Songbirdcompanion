export default {
  id: 'hero-mizuki-l2-weapon',
  pathId: 'hero-mizuki',
  title: 'Mizuki: Spirit Glaive',
  subtitle: 'Mastering Mizuki\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Spirit Glaive — Overview',
      body: 'Type: Bouncing projectile · Ammo: Magazine based · Damage: 30 impact + 30 damage over time; headshots double the impact damage to 60 · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Throw a spinning glaive that bounces off walls and surfaces, dealing impact damage plus damage over time on hit. Headshots double the impact portion only.',
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
      body: 'New Mizuki players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mizuki\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Spirit Glaive' },
          { id: 'b', text: 'Healing Kasa' },
          { id: 'c', text: 'Kekkai Sanctuary' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Mizuki\'s primary weapon is the Spirit Glaive.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Spirit Glaive?',
        options: [
          { id: 'a', text: '30 impact + 30 damage over time; headshots double the impact damage to 60' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Spirit Glaive\'s output is: 30 impact + 30 damage over time; headshots double the impact damage to 60.',
      },
    ],
  },
};