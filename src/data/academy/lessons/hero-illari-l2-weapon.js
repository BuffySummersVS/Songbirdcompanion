export default {
  id: 'hero-illari-l2-weapon',
  pathId: 'hero-illari',
  title: 'Illari: Solar Rifle',
  subtitle: 'Mastering Illari\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Solar Rifle — Overview',
      body: 'Type: Precision scoped rifle / healing beam · Ammo: Energy based · Damage: 75 damage per shot (scoped) / healing beam on secondary fire · Cooldown: Overheat / energy drain',
    },
    {
      type: 'text',
      body: 'Long-range scoped rifle for precise damage. Secondary fire channels a high-output healing beam onto a targeted ally.',
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
      body: 'New Illari players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Illari\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Solar Rifle' },
          { id: 'b', text: 'Healing Pylon' },
          { id: 'c', text: 'Captive Sun' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Illari\'s primary weapon is the Solar Rifle.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Solar Rifle?',
        options: [
          { id: 'a', text: '75 damage per shot (scoped) / healing beam on secondary fire' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Solar Rifle\'s output is: 75 damage per shot (scoped) / healing beam on secondary fire.',
      },
    ],
  },
};