export default {
  id: 'hero-torbjorn-l3-abilities',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Core Abilities',
  subtitle: 'How to use Torbjörn\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Torbjörn\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Torbjörn players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Deploy Turret (Deployable damage)',
      body: 'Cooldown: Cooldown after destruction/placement · Damage: Automatic turret fire · Deploys a turret that automatically fires at enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Overload (Self-buff)',
      body: 'Cooldown: 12 seconds · Damage: Improves weapon pressure · Grants temporary health, movement speed, reload speed, and firing speed.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Torbjörn\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Deploy Turret?',
        options: [
          { id: 'a', text: 'Deployable damage' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Deploy Turret is a Deployable damage ability with a cooldown of Cooldown after destruction/placement.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Deploy Turret?',
        options: [
          { id: 'a', text: 'Cooldown after destruction/placement' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Deploy Turret has a cooldown of Cooldown after destruction/placement.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Torbjörn have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Torbjörn has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};