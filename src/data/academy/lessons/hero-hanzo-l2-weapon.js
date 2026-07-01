export default {
  id: 'hero-hanzo-l2-weapon',
  pathId: 'hero-hanzo',
  title: 'Hanzo: Storm Bow',
  subtitle: 'Mastering Hanzo\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Storm Bow — Overview',
      body: 'Type: Charged projectile bow · Ammo: Infinite · Damage: Charged projectile damage with headshot potential · Cooldown: Draw time',
    },
    {
      type: 'text',
      body: 'Fires arrows that deal more damage the longer they are drawn.',
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
      body: 'New Hanzo players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Hanzo\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Storm Bow' },
          { id: 'b', text: 'Sonic Arrow' },
          { id: 'c', text: 'Dragonstrike' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Hanzo\'s primary weapon is the Storm Bow.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Storm Bow?',
        options: [
          { id: 'a', text: 'Charged projectile damage with headshot potential' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Storm Bow\'s output is: Charged projectile damage with headshot potential.',
      },
    ],
  },
};