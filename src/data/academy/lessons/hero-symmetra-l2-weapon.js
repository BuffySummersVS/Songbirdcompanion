export default {
  id: 'hero-symmetra-l2-weapon',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Photon Projector',
  subtitle: 'Mastering Symmetra\'s primary combat tool',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Photon Projector — Overview',
      body: 'Type: Beam and charged projectile weapon · Ammo: Magazine based · Damage: Ramping beam damage and charged orb damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A beam weapon that ramps up with sustained contact and can fire charged orbs.',
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
      body: 'New Symmetra players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Symmetra\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Photon Projector' },
          { id: 'b', text: 'Sentry Turret' },
          { id: 'c', text: 'Photon Barrier' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Symmetra\'s primary weapon is the Photon Projector.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Photon Projector?',
        options: [
          { id: 'a', text: 'Ramping beam damage and charged orb damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Photon Projector\'s output is: Ramping beam damage and charged orb damage.',
      },
    ],
  },
};