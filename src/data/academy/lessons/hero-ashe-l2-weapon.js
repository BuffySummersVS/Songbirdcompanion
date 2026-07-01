export default {
  id: 'hero-ashe-l2-weapon',
  pathId: 'hero-ashe',
  title: 'Ashe: The Viper',
  subtitle: 'Mastering Ashe\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'The Viper — Overview',
      body: 'Type: Lever-action rifle · Ammo: Magazine based · Damage: High precision hitscan damage; scoped shots hit harder · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A flexible rifle for mid to long range. Ashe can hip-fire quickly or aim down sights for stronger precision shots.',
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
      body: 'New Ashe players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Ashe\'s primary weapon called?',
        options: [
          { id: 'a', text: 'The Viper' },
          { id: 'b', text: 'Coach Gun' },
          { id: 'c', text: 'B.O.B.' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Ashe\'s primary weapon is the The Viper.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the The Viper?',
        options: [
          { id: 'a', text: 'High precision hitscan damage; scoped shots hit harder' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The The Viper\'s output is: High precision hitscan damage; scoped shots hit harder.',
      },
    ],
  },
};