export default {
  id: 'hero-roadhog-l2-weapon',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Scrap Gun',
  subtitle: 'Mastering Roadhog\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Scrap Gun — Overview',
      body: 'Type: Shotgun · Ammo: Magazine based · Damage: Close-range spread damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A shotgun-style weapon that deals heavy damage at close range.',
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
      body: 'New Roadhog players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Roadhog\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Scrap Gun' },
          { id: 'b', text: 'Chain Hook' },
          { id: 'c', text: 'Whole Hog' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Roadhog\'s primary weapon is the Scrap Gun.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Scrap Gun?',
        options: [
          { id: 'a', text: 'Close-range spread damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Scrap Gun\'s output is: Close-range spread damage.',
      },
    ],
  },
};