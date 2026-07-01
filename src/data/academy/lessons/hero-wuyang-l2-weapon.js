export default {
  id: 'hero-wuyang-l2-weapon',
  pathId: 'hero-wuyang',
  title: 'Wuyang: Xuanwu Staff',
  subtitle: 'Mastering Wuyang\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Xuanwu Staff — Overview',
      body: 'Type: Guided water projectile · Ammo: 20 rounds · Damage: 30–100 damage (increases with charge duration) · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fire a water orb that can be steered mid-flight by holding the trigger. The longer it charges and travels, the more powerful the explosion on impact.',
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
      body: 'New Wuyang players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Wuyang\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Xuanwu Staff' },
          { id: 'b', text: 'Restorative Stream' },
          { id: 'c', text: 'Tidal Blast' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Wuyang\'s primary weapon is the Xuanwu Staff.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Xuanwu Staff?',
        options: [
          { id: 'a', text: '30–100 damage (increases with charge duration)' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Xuanwu Staff\'s output is: 30–100 damage (increases with charge duration).',
      },
    ],
  },
};