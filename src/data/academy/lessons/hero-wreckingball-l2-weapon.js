export default {
  id: 'hero-wreckingball-l2-weapon',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Quad Cannons',
  subtitle: 'Mastering Wrecking Ball\'s primary combat tool',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Quad Cannons — Overview',
      body: 'Type: Automatic hitscan weapons · Ammo: Magazine based · Damage: Sustained hitscan damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Automatic cannons used to finish targets after disruption combos.',
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
      body: 'New Wrecking Ball players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Wrecking Ball\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Quad Cannons' },
          { id: 'b', text: 'Roll' },
          { id: 'c', text: 'Minefield' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball\'s primary weapon is the Quad Cannons.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Quad Cannons?',
        options: [
          { id: 'a', text: 'Sustained hitscan damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Quad Cannons\'s output is: Sustained hitscan damage.',
      },
    ],
  },
};