export default {
  id: 'hero-juno-l3-abilities',
  pathId: 'hero-juno',
  title: 'Juno: Core Abilities',
  subtitle: 'How to use Juno\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Juno\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Juno players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Pulsar Torpedoes (Homing projectiles)',
      body: 'Cooldown: 8 sec · Damage: Damages enemies / heals allies over time · Lock on to targets, then fire homing torpedoes that heal allies or damage enemies over time.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hyper Ring (Team mobility tool)',
      body: 'Cooldown: 12 sec · Damage: None · Deploy a ring that increases the movement speed of allies who pass through it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Juno\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Pulsar Torpedoes?',
        options: [
          { id: 'a', text: 'Homing projectiles' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Pulsar Torpedoes is a Homing projectiles ability with a cooldown of 8 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Pulsar Torpedoes?',
        options: [
          { id: 'a', text: '8 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Pulsar Torpedoes has a cooldown of 8 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Juno have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Juno has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};