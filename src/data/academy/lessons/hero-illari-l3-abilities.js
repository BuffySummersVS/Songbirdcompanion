export default {
  id: 'hero-illari-l3-abilities',
  pathId: 'hero-illari',
  title: 'Illari: Core Abilities',
  subtitle: 'How to use Illari\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Illari\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Illari players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Healing Pylon (Deployable healer)',
      body: 'Cooldown: 20 sec after destruction · Damage: None · Deploy a pylon that automatically heals nearby allies. Only one pylon can exist at a time.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Outburst (Mobility / knockback)',
      body: 'Cooldown: 7 sec · Damage: None · Launch yourself in the direction you are moving, knocking back nearby enemies. Enhanced when crouching.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Illari\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Healing Pylon?',
        options: [
          { id: 'a', text: 'Deployable healer' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Healing Pylon is a Deployable healer ability with a cooldown of 20 sec after destruction.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Healing Pylon?',
        options: [
          { id: 'a', text: '20 sec after destruction' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Healing Pylon has a cooldown of 20 sec after destruction.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Illari have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Illari has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};