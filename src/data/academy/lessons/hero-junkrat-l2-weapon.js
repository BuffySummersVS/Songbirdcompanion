export default {
  id: 'hero-junkrat-l2-weapon',
  pathId: 'hero-junkrat',
  title: 'Junkrat: Frag Launcher',
  subtitle: 'Mastering Junkrat\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Frag Launcher — Overview',
      body: 'Type: Bouncing explosive projectile · Ammo: Magazine based · Damage: High explosive projectile damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Launches bouncing grenades that explode on contact with enemies or after bouncing.',
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
      body: 'New Junkrat players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Junkrat\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Frag Launcher' },
          { id: 'b', text: 'Concussion Mine' },
          { id: 'c', text: 'RIP-Tire' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Junkrat\'s primary weapon is the Frag Launcher.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Frag Launcher?',
        options: [
          { id: 'a', text: 'High explosive projectile damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Frag Launcher\'s output is: High explosive projectile damage.',
      },
    ],
  },
};