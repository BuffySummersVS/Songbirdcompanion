export default {
  id: 'hero-widowmaker-l2-weapon',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Widow\'s Kiss',
  subtitle: 'Mastering Widowmaker\'s primary combat tool',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Widow\'s Kiss — Overview',
      body: 'Type: Sniper rifle / automatic rifle · Ammo: Magazine based · Damage: High scoped headshot damage; automatic close-range fire · Cooldown: Reload/charge time',
    },
    {
      type: 'text',
      body: 'A scoped sniper rifle capable of lethal precision shots, with automatic fire for close defense.',
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
      body: 'New Widowmaker players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Widowmaker\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Widow\'s Kiss' },
          { id: 'b', text: 'Grappling Hook' },
          { id: 'c', text: 'Infra-Sight' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Widowmaker\'s primary weapon is the Widow\'s Kiss.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Widow\'s Kiss?',
        options: [
          { id: 'a', text: 'High scoped headshot damage; automatic close-range fire' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Widow\'s Kiss\'s output is: High scoped headshot damage; automatic close-range fire.',
      },
    ],
  },
};