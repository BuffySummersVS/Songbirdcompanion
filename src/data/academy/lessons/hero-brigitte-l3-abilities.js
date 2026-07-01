export default {
  id: 'hero-brigitte-l3-abilities',
  pathId: 'hero-brigitte',
  title: 'Brigitte: Core Abilities',
  subtitle: 'How to use Brigitte\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Brigitte\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Brigitte players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Repair Pack (Single-target heal)',
      body: 'Cooldown: 6 sec per pack (3 charges) · Damage: None · Throw a healing pack to an ally. Excess healing converts into temporary armour.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Whip Shot (Ranged knockback)',
      body: 'Cooldown: 4 sec · Damage: 70 damage · Fling the flail forward to deal damage and knock an enemy back at range.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Barrier Shield (Personal barrier)',
      body: 'Cooldown: 5 sec after break · Damage: None · Raise a frontal energy barrier that absorbs incoming damage and enables Shield Bash.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Shield Bash (Charge / stun)',
      body: 'Cooldown: 0.75 sec cooldown refund on hit · Damage: 50 damage · Dash forward with the barrier, stunning the first enemy hit.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Brigitte\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Repair Pack?',
        options: [
          { id: 'a', text: 'Single-target heal' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Repair Pack is a Single-target heal ability with a cooldown of 6 sec per pack (3 charges).',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Repair Pack?',
        options: [
          { id: 'a', text: '6 sec per pack (3 charges)' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Repair Pack has a cooldown of 6 sec per pack (3 charges).',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Brigitte have (excluding ultimate)?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '6' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Brigitte has 4 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};