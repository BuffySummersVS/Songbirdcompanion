export default {
  id: 'hero-venture-l2-weapon',
  pathId: 'hero-venture',
  title: 'Venture: Smart Excavator',
  subtitle: 'Mastering Venture\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Smart Excavator — Overview',
      body: 'Type: Short-range explosive projectile · Ammo: Magazine based · Damage: Short-range explosive projectile damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires explosive shots that are strongest at close to mid range.',
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
      body: 'New Venture players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Venture\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Smart Excavator' },
          { id: 'b', text: 'Drill Dash' },
          { id: 'c', text: 'Tectonic Shock' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Venture\'s primary weapon is the Smart Excavator.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Smart Excavator?',
        options: [
          { id: 'a', text: 'Short-range explosive projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Smart Excavator\'s output is: Short-range explosive projectile damage.',
      },
    ],
  },
};