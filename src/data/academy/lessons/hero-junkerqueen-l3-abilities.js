export default {
  id: 'hero-junkerqueen-l3-abilities',
  pathId: 'hero-junkerqueen',
  title: 'Junker Queen: Core Abilities',
  subtitle: 'How to use Junker Queen\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Junker Queen\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Junker Queen players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Jagged Blade (Projectile / wound)',
      body: 'Cooldown: 7 seconds · Damage: Direct hit and wound damage · Throw a magnetic blade. Recalling it can pull enemies and apply wounds.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Commanding Shout (Team utility)',
      body: 'Cooldown: 15 seconds · Damage: None · Grants temporary health and movement speed to Junker Queen and nearby allies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Carnage (Melee / wound)',
      body: 'Cooldown: 6 seconds · Damage: Axe swing and wound damage · Swing a large axe in front of Junker Queen, damaging and wounding enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Junker Queen\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Jagged Blade?',
        options: [
          { id: 'a', text: 'Projectile / wound' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Jagged Blade is a Projectile / wound ability with a cooldown of 7 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Jagged Blade?',
        options: [
          { id: 'a', text: '7 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Jagged Blade has a cooldown of 7 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Junker Queen have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Junker Queen has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
