export default {
  id: 'hero-tracer-l2-weapon',
  pathId: 'hero-tracer',
  title: 'Tracer: Pulse Pistols',
  subtitle: 'Mastering Tracer\'s primary combat tool',
  difficulty: 5,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Pulse Pistols — Overview',
      body: 'Type: Dual automatic hitscan pistols · Ammo: Magazine based · Damage: Very high close-range tracking damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Rapid dual pistols that excel at close range but lose value at distance.',
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
      body: 'New Tracer players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Tracer\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Pulse Pistols' },
          { id: 'b', text: 'Blink' },
          { id: 'c', text: 'Pulse Bomb' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Tracer\'s primary weapon is the Pulse Pistols.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Pulse Pistols?',
        options: [
          { id: 'a', text: 'Very high close-range tracking damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Pulse Pistols\'s output is: Very high close-range tracking damage.',
      },
    ],
  },
};