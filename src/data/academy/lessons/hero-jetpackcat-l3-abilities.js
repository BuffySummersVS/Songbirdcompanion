export default {
  id: 'hero-jetpackcat-l3-abilities',
  pathId: 'hero-jetpackcat',
  title: 'Jetpack Cat: Core Abilities',
  subtitle: 'How to use Jetpack Cat\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Jetpack Cat\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Jetpack Cat players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Frenetic Flight (Mobility)',
      body: 'Cooldown: Fuel based · Damage: None · Accelerate rapidly in your movement direction. Fuel recovers more slowly while towing a player with Lifeline.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Lifeline (Ally transport)',
      body: 'Cooldown: Toggle · Damage: None · Toggle into transport mode to tow an ally alongside you. Increases movement speed and heals the ally while they are being carried.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Purr (Area heal / damage)',
      body: 'Cooldown: 8 sec · Damage: 30% of healing output as damage to nearby enemies · Emit a pulsing area heal that increases in frequency over time. Enemies within the pulse take damage equal to 30% of its healing output.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Jetpack Cat\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Frenetic Flight?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Frenetic Flight is a Mobility ability with a cooldown of Fuel based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Frenetic Flight?',
        options: [
          { id: 'a', text: 'Fuel based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Frenetic Flight has a cooldown of Fuel based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Jetpack Cat have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Jetpack Cat has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};