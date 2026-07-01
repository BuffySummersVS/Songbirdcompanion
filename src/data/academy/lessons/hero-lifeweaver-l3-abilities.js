export default {
  id: 'hero-lifeweaver-l3-abilities',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Core Abilities',
  subtitle: 'How to use Lifeweaver\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Lifeweaver\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Lifeweaver players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Petal Platform (Terrain tool)',
      body: 'Cooldown: 12 sec · Damage: None · Throw a platform that springs upward when stepped on, boosting allies or enemies to high ground.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Life Grip (Ally repositioning)',
      body: 'Cooldown: 11 sec · Damage: None · Pull a targeted ally to your location, protecting and cleansing them as they travel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Rejuvenating Dash (Mobility / self-sustain)',
      body: 'Cooldown: 5 sec · Damage: None · Dash in the direction of movement and lightly heal yourself.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Lifeweaver\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Petal Platform?',
        options: [
          { id: 'a', text: 'Terrain tool' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Petal Platform is a Terrain tool ability with a cooldown of 12 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Petal Platform?',
        options: [
          { id: 'a', text: '12 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Petal Platform has a cooldown of 12 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Lifeweaver have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Lifeweaver has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};