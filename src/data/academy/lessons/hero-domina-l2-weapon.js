export default {
  id: 'hero-domina-l2-weapon',
  pathId: 'hero-domina',
  title: 'Domina: Photon Magnum',
  subtitle: 'Mastering Domina\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Photon Magnum — Overview',
      body: 'Type: Medium-range beam weapon · Ammo: Magazine based · Damage: 60 DPS beam, culminating in a high-impact shot · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A medium-range hard-light beam that builds into a high-impact shot. Best used for controlled poke and sustained pressure.',
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
      body: 'New Domina players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Domina\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Photon Magnum' },
          { id: 'b', text: 'Barrier Array' },
          { id: 'c', text: 'Panopticon' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Domina\'s primary weapon is the Photon Magnum.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Photon Magnum?',
        options: [
          { id: 'a', text: '60 DPS beam, culminating in a high-impact shot' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Photon Magnum\'s output is: 60 DPS beam, culminating in a high-impact shot.',
      },
    ],
  },
};