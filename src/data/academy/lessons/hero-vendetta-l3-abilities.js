export default {
  id: 'hero-vendetta-l3-abilities',
  pathId: 'hero-vendetta',
  title: 'Vendetta: Core Abilities',
  subtitle: 'How to use Vendetta\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Vendetta\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Vendetta players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Warding Stance (Defensive stance)',
      body: 'Cooldown: Energy based · Damage: Can deflect or punish melee pressure · Reduces frontal damage and can deflect melee attacks, consuming energy.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Whirlwind Dash (Mobility / area slash)',
      body: 'Cooldown: 10 sec · Damage: 360-degree slash damage · Lunges forward and performs a spinning sword attack.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Projected Edge (Ranged sword slash)',
      body: 'Cooldown: Energy based · Damage: Projectile slash damage · Launches a hard-light slice forward when Vendetta has energy.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Soaring Slice (Mobility / engage)',
      body: 'Cooldown: 7 sec · Damage: Slice impact damage · Throws her sword and flies to its location, enabling aggressive engages or escapes.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Vendetta\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Warding Stance?',
        options: [
          { id: 'a', text: 'Defensive stance' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Warding Stance is a Defensive stance ability with a cooldown of Energy based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Warding Stance?',
        options: [
          { id: 'a', text: 'Energy based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Warding Stance has a cooldown of Energy based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Vendetta have (excluding ultimate)?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '6' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Vendetta has 4 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};