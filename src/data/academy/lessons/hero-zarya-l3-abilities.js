export default {
  id: 'hero-zarya-l3-abilities',
  pathId: 'hero-zarya',
  title: 'Zarya: Core Abilities',
  subtitle: 'How to use Zarya\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Zarya\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Zarya players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Particle Barrier (Self barrier)',
      body: 'Cooldown: Charge based · Damage: None · Place a barrier on yourself. Damage absorbed increases Zarya\'s energy.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Projected Barrier (Ally barrier)',
      body: 'Cooldown: Charge based · Damage: None · Place a barrier on an ally. Damage absorbed increases Zarya\'s energy.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Zarya\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Particle Barrier?',
        options: [
          { id: 'a', text: 'Self barrier' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Particle Barrier is a Self barrier ability with a cooldown of Charge based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Particle Barrier?',
        options: [
          { id: 'a', text: 'Charge based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Particle Barrier has a cooldown of Charge based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Zarya have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Zarya has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};