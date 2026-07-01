export default {
  id: 'hero-cassidy-l2-weapon',
  pathId: 'hero-cassidy',
  title: 'Cassidy: Peacekeeper',
  subtitle: 'Mastering Cassidy\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Peacekeeper — Overview',
      body: 'Type: Revolver hitscan · Ammo: 6 rounds · Damage: High single-shot hitscan damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A powerful revolver rewarding precise aim at close to mid range.',
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
      body: 'New Cassidy players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Cassidy\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Peacekeeper' },
          { id: 'b', text: 'Combat Roll' },
          { id: 'c', text: 'Deadeye' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Cassidy\'s primary weapon is the Peacekeeper.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Peacekeeper?',
        options: [
          { id: 'a', text: 'High single-shot hitscan damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Peacekeeper\'s output is: High single-shot hitscan damage.',
      },
    ],
  },
};