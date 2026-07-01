export default {
  id: 'hero-mei-l2-weapon',
  pathId: 'hero-mei',
  title: 'Mei: Endothermic Blaster',
  subtitle: 'Mastering Mei\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Endothermic Blaster — Overview',
      body: 'Type: Beam and projectile weapon · Ammo: Magazine based · Damage: Close-range beam and long-range icicle damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fires a slowing frost stream and accurate icicle projectiles.',
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
      body: 'New Mei players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mei\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Endothermic Blaster' },
          { id: 'b', text: 'Cryo-Freeze' },
          { id: 'c', text: 'Blizzard' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Mei\'s primary weapon is the Endothermic Blaster.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Endothermic Blaster?',
        options: [
          { id: 'a', text: 'Close-range beam and long-range icicle damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Endothermic Blaster\'s output is: Close-range beam and long-range icicle damage.',
      },
    ],
  },
};