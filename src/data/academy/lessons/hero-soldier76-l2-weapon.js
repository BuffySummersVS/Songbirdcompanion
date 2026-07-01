export default {
  id: 'hero-soldier76-l2-weapon',
  pathId: 'hero-soldier76',
  title: 'Soldier: 76: Heavy Pulse Rifle',
  subtitle: 'Mastering Soldier: 76\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Heavy Pulse Rifle — Overview',
      body: 'Type: Automatic hitscan rifle · Ammo: Magazine based · Damage: Consistent mid-range hitscan damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A reliable automatic rifle with strong tracking damage at mid range.',
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
      body: 'New Soldier: 76 players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Soldier: 76\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Heavy Pulse Rifle' },
          { id: 'b', text: 'Helix Rockets' },
          { id: 'c', text: 'Tactical Visor' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Soldier: 76\'s primary weapon is the Heavy Pulse Rifle.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Heavy Pulse Rifle?',
        options: [
          { id: 'a', text: 'Consistent mid-range hitscan damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Heavy Pulse Rifle\'s output is: Consistent mid-range hitscan damage.',
      },
    ],
  },
};