export default {
  id: 'hero-juno-l2-weapon',
  pathId: 'hero-juno',
  title: 'Juno: Mediblaster',
  subtitle: 'Mastering Juno\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Mediblaster — Overview',
      body: 'Type: Burst-fire heal and damage weapon · Ammo: Magazine based · Damage: Heals allies or damages enemies; falls off beyond 25 metres · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A burst-fire weapon that heals allies and damages enemies in the same shots. Effectiveness reduces at medium to long range.',
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
      body: 'New Juno players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Juno\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Mediblaster' },
          { id: 'b', text: 'Pulsar Torpedoes' },
          { id: 'c', text: 'Orbital Ray' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Juno\'s primary weapon is the Mediblaster.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Mediblaster?',
        options: [
          { id: 'a', text: 'Heals allies or damages enemies; falls off beyond 25 metres' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Mediblaster\'s output is: Heals allies or damages enemies; falls off beyond 25 metres.',
      },
    ],
  },
};