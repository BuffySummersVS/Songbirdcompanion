export default {
  id: 'hero-junkrat-l3-abilities',
  pathId: 'hero-junkrat',
  title: 'Junkrat: Core Abilities',
  subtitle: 'How to use Junkrat\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Junkrat\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Junkrat players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Concussion Mine (Mobility / burst explosive)',
      body: 'Cooldown: Charge based · Damage: Explosion damage · Throws a mine that Junkrat can detonate for damage or mobility.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Steel Trap (Trap / crowd control)',
      body: 'Cooldown: 10 seconds · Damage: Trap damage · Places a trap that roots and damages the first enemy who steps into it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Junkrat\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Concussion Mine?',
        options: [
          { id: 'a', text: 'Mobility / burst explosive' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Concussion Mine is a Mobility / burst explosive ability with a cooldown of Charge based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Concussion Mine?',
        options: [
          { id: 'a', text: 'Charge based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Concussion Mine has a cooldown of Charge based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Junkrat have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Junkrat has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};