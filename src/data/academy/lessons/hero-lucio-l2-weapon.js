export default {
  id: 'hero-lucio-l2-weapon',
  pathId: 'hero-lucio',
  title: 'Lúcio: Sonic Amplifier',
  subtitle: 'Mastering Lúcio\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Sonic Amplifier — Overview',
      body: 'Type: Projectile burst weapon · Ammo: 20 rounds · Damage: Projectile burst damage / Soundwave knockback on alternate fire · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires bursts of sound projectiles. Alternate fire (Soundwave) pushes back nearby enemies with a blast of sound.',
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
      body: 'New Lúcio players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Lúcio\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Sonic Amplifier' },
          { id: 'b', text: 'Crossfade' },
          { id: 'c', text: 'Sound Barrier' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Lúcio\'s primary weapon is the Sonic Amplifier.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Sonic Amplifier?',
        options: [
          { id: 'a', text: 'Projectile burst damage / Soundwave knockback on alternate fire' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Sonic Amplifier\'s output is: Projectile burst damage / Soundwave knockback on alternate fire.',
      },
    ],
  },
};