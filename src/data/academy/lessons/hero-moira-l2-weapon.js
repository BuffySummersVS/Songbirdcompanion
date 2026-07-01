export default {
  id: 'hero-moira-l2-weapon',
  pathId: 'hero-moira',
  title: 'Moira: Biotic Grasp',
  subtitle: 'Mastering Moira\'s primary combat tool',
  difficulty: 1,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Biotic Grasp — Overview',
      body: 'Type: Short-range heal and damage beam · Ammo: Biotic energy resource · Damage: 50 DPS to enemies (right hand) / 70 HPS to allies (left hand) · Cooldown: Biotic energy regenerates at 16% per second',
    },
    {
      type: 'text',
      body: 'Left-click heals a nearby ally with a short-range beam. Right-click damages enemies and restores Moira\'s biotic energy.',
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
      body: 'New Moira players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Moira\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Biotic Grasp' },
          { id: 'b', text: 'Biotic Orb' },
          { id: 'c', text: 'Coalescence' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Moira\'s primary weapon is the Biotic Grasp.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Biotic Grasp?',
        options: [
          { id: 'a', text: '50 DPS to enemies (right hand) / 70 HPS to allies (left hand)' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Biotic Grasp\'s output is: 50 DPS to enemies (right hand) / 70 HPS to allies (left hand).',
      },
    ],
  },
};