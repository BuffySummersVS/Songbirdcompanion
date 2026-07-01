export default {
  id: 'hero-baptiste-l2-weapon',
  pathId: 'hero-baptiste',
  title: 'Baptiste: Biotic Launcher',
  subtitle: 'Mastering Baptiste\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Biotic Launcher — Overview',
      body: 'Type: Three-round burst rifle / healing grenade launcher · Ammo: 45 rounds · Damage: 25 damage per burst (primary) / 50–65 healing per grenade (secondary) · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Primary fire is a three-round burst for dealing damage. Secondary fire lobs healing grenades that heal allies near the impact.',
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
      body: 'New Baptiste players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Baptiste\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Biotic Launcher' },
          { id: 'b', text: 'Regenerative Burst' },
          { id: 'c', text: 'Amplification Matrix' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Baptiste\'s primary weapon is the Biotic Launcher.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Biotic Launcher?',
        options: [
          { id: 'a', text: '25 damage per burst (primary) / 50–65 healing per grenade (secondary)' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Biotic Launcher\'s output is: 25 damage per burst (primary) / 50–65 healing per grenade (secondary).',
      },
    ],
  },
};