export default {
  id: 'hero-sierra-l3-abilities',
  pathId: 'hero-sierra',
  title: 'Sierra: Core Abilities',
  subtitle: 'How to use Sierra\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Sierra\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Sierra players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Tracking Shot (Target marking)',
      body: 'Cooldown: 10 sec · Damage: Tag shot damage · Tags enemies so Sierra can maintain pressure and improve follow-up accuracy.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Anchor Drone (Mobility tool)',
      body: 'Cooldown: 12 sec · Damage: None · Deploys a drone that Sierra can grapple toward, giving her flexible repositioning.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Tremor Charge (Explosive grenade)',
      body: 'Cooldown: 8.5 seconds · Damage: High center damage with lower edge damage · Throws a charge that creates a damaging shockwave and knockback.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Sierra\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Tracking Shot?',
        options: [
          { id: 'a', text: 'Target marking' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Tracking Shot is a Target marking ability with a cooldown of 10 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Tracking Shot?',
        options: [
          { id: 'a', text: '10 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Tracking Shot has a cooldown of 10 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Sierra have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Sierra has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};