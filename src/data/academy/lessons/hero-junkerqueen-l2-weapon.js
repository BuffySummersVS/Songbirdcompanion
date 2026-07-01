export default {
  id: 'hero-junkerqueen-l2-weapon',
  pathId: 'hero-junkerqueen',
  title: 'Junker Queen: Scattergun',
  subtitle: 'Mastering Junker Queen\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Scattergun — Overview',
      body: 'Type: Pump-action shotgun · Ammo: Magazine based · Damage: Close-range shotgun damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A strong close-range shotgun that rewards aggressive brawling.',
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
      body: 'New Junker Queen players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Junker Queen\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Scattergun' },
          { id: 'b', text: 'Jagged Blade' },
          { id: 'c', text: 'Rampage' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Junker Queen\'s primary weapon is the Scattergun.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Scattergun?',
        options: [
          { id: 'a', text: 'Close-range shotgun damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Scattergun\'s output is: Close-range shotgun damage.',
      },
    ],
  },
};