export default {
  id: 'hero-zenyatta-l2-weapon',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Orb of Destruction',
  subtitle: 'Mastering Zenyatta\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Orb of Destruction — Overview',
      body: 'Type: Projectile / charged volley · Ammo: 20 orbs · Damage: 46 per orb; charged volley fires all current orbs in a burst · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Throws damaging orbs at enemies. Alternate fire charges a volley of all current orbs for a burst of simultaneous damage.',
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
      body: 'New Zenyatta players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Zenyatta\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Orb of Destruction' },
          { id: 'b', text: 'Orb of Harmony' },
          { id: 'c', text: 'Transcendence' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Zenyatta\'s primary weapon is the Orb of Destruction.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Orb of Destruction?',
        options: [
          { id: 'a', text: '46 per orb; charged volley fires all current orbs in a burst' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Orb of Destruction\'s output is: 46 per orb; charged volley fires all current orbs in a burst.',
      },
    ],
  },
};