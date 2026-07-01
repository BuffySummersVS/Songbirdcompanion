export default {
  id: 'hero-sombra-l2-weapon',
  pathId: 'hero-sombra',
  title: 'Sombra: Machine Pistol',
  subtitle: 'Mastering Sombra\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Machine Pistol — Overview',
      body: 'Type: Automatic hitscan SMG · Ammo: Magazine based · Damage: Close-range sustained damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A rapid-fire machine pistol best used at close range from off angles.',
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
      body: 'New Sombra players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sombra\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Machine Pistol' },
          { id: 'b', text: 'Hack' },
          { id: 'c', text: 'EMP' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Sombra\'s primary weapon is the Machine Pistol.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Machine Pistol?',
        options: [
          { id: 'a', text: 'Close-range sustained damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Machine Pistol\'s output is: Close-range sustained damage.',
      },
    ],
  },
};