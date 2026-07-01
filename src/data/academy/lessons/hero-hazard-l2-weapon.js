export default {
  id: 'hero-hazard-l2-weapon',
  pathId: 'hero-hazard',
  title: 'Hazard: Bonespur',
  subtitle: 'Mastering Hazard\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Bonespur — Overview',
      body: 'Type: Close-range shotgun · Ammo: Magazine based · Damage: Close-range spread damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A close-range shotgun used to pressure enemies while Hazard brawls for space.',
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
      body: 'New Hazard players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Hazard\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Bonespur' },
          { id: 'b', text: 'Jagged Wall' },
          { id: 'c', text: 'Downpour' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Hazard\'s primary weapon is the Bonespur.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Bonespur?',
        options: [
          { id: 'a', text: 'Close-range spread damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Bonespur\'s output is: Close-range spread damage.',
      },
    ],
  },
};