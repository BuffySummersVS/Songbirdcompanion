export default {
  id: 'hero-mauga-l2-weapon',
  pathId: 'hero-mauga',
  title: 'Mauga: Incendiary and Volatile Chainguns',
  subtitle: 'Mastering Mauga\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Incendiary and Volatile Chainguns — Overview',
      body: 'Type: Automatic chainguns · Ammo: Large magazine · Damage: Sustained hitscan damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'One chaingun ignites enemies while the other deals critical damage to burning targets.',
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
      body: 'New Mauga players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mauga\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Incendiary and Volatile Chainguns' },
          { id: 'b', text: 'Overrun' },
          { id: 'c', text: 'Cage Fight' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Mauga\'s primary weapon is the Incendiary and Volatile Chainguns.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Incendiary and Volatile Chainguns?',
        options: [
          { id: 'a', text: 'Sustained hitscan damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Incendiary and Volatile Chainguns\'s output is: Sustained hitscan damage.',
      },
    ],
  },
};