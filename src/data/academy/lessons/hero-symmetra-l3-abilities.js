export default {
  id: 'hero-symmetra-l3-abilities',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Core Abilities',
  subtitle: 'How to use Symmetra\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Symmetra\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Symmetra players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Sentry Turret (Deployable damage/slow)',
      body: 'Cooldown: Charge based · Damage: Beam turret damage · Places small turrets that damage and slow enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Teleporter (Team mobility)',
      body: 'Cooldown: 15 seconds · Damage: None · Creates a two-way teleporter for allies and some deployables.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Symmetra\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Sentry Turret?',
        options: [
          { id: 'a', text: 'Deployable damage/slow' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Sentry Turret is a Deployable damage/slow ability with a cooldown of Charge based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Sentry Turret?',
        options: [
          { id: 'a', text: 'Charge based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Sentry Turret has a cooldown of Charge based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Symmetra have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Symmetra has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};