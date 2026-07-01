export default {
  id: 'hero-vendetta-l2-weapon',
  pathId: 'hero-vendetta',
  title: 'Vendetta: Palatine Fang',
  subtitle: 'Mastering Vendetta\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Palatine Fang — Overview',
      body: 'Type: Melee sword weapon · Ammo: Energy/attack rhythm · Damage: Melee slash damage · Cooldown: Attack recovery',
    },
    {
      type: 'text',
      body: 'A melee-focused hard-light sword with strong close-range dueling pressure.',
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
      body: 'New Vendetta players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Vendetta\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Palatine Fang' },
          { id: 'b', text: 'Warding Stance' },
          { id: 'c', text: 'Sundering Blade' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Vendetta\'s primary weapon is the Palatine Fang.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Palatine Fang?',
        options: [
          { id: 'a', text: 'Melee slash damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Palatine Fang\'s output is: Melee slash damage.',
      },
    ],
  },
};