export default {
  id: 'hero-emre-l2-weapon',
  pathId: 'hero-emre',
  title: 'Emre: Synthetic Burst Rifle',
  subtitle: 'Mastering Emre\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Synthetic Burst Rifle — Overview',
      body: 'Type: Three-round burst rifle · Ammo: Magazine based · Damage: Consistent mid-range burst damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A reliable three-round burst rifle for close to mid-range pressure.',
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
      body: 'New Emre players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Emre\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Synthetic Burst Rifle' },
          { id: 'b', text: 'Cyber Frag' },
          { id: 'c', text: 'Override Protocol' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Emre\'s primary weapon is the Synthetic Burst Rifle.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Synthetic Burst Rifle?',
        options: [
          { id: 'a', text: 'Consistent mid-range burst damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Synthetic Burst Rifle\'s output is: Consistent mid-range burst damage.',
      },
    ],
  },
};