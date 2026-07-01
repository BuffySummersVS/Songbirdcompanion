export default {
  id: 'hero-ramattra-l3-abilities',
  pathId: 'hero-ramattra',
  title: 'Ramattra: Core Abilities',
  subtitle: 'How to use Ramattra\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Ramattra\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Ramattra players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Void Barrier (Barrier)',
      body: 'Cooldown: 12 seconds · Damage: None · Create a temporary barrier at a targeted location.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Nemesis Form (Transformation)',
      body: 'Cooldown: 8 seconds · Damage: Pummel damage · Transform into Nemesis Form, gaining armour and replacing primary fire with piercing punches.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Ravenous Vortex (Area control)',
      body: 'Cooldown: 11 seconds · Damage: Damage over time · Fire a nanosphere that creates a slowing field and pulls airborne enemies down.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Ramattra\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Void Barrier?',
        options: [
          { id: 'a', text: 'Barrier' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Void Barrier is a Barrier ability with a cooldown of 12 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Void Barrier?',
        options: [
          { id: 'a', text: '12 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Void Barrier has a cooldown of 12 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Ramattra have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Ramattra has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
