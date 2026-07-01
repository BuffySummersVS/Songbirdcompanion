export default {
  id: 'hero-sierra-l2-weapon',
  pathId: 'hero-sierra',
  title: 'Sierra: Helix Rifle',
  subtitle: 'Mastering Sierra\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Helix Rifle — Overview',
      body: 'Type: Automatic rifle · Ammo: Magazine based · Damage: Sustained rifle damage; accuracy improves with sustained fire · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'An automatic rifle that becomes more accurate the longer it is fired.',
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
      body: 'New Sierra players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sierra\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Helix Rifle' },
          { id: 'b', text: 'Tracking Shot' },
          { id: 'c', text: 'Trailblazer' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Sierra\'s primary weapon is the Helix Rifle.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Helix Rifle?',
        options: [
          { id: 'a', text: 'Sustained rifle damage; accuracy improves with sustained fire' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Helix Rifle\'s output is: Sustained rifle damage; accuracy improves with sustained fire.',
      },
    ],
  },
};