export default {
  id: 'hero-widowmaker-l3-abilities',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Core Abilities',
  subtitle: 'How to use Widowmaker\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Widowmaker\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Widowmaker players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Grappling Hook (Mobility)',
      body: 'Cooldown: 8 seconds · Damage: None · Launches a hook that pulls Widowmaker to a ledge or surface.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Venom Mine (Trap / damage over time)',
      body: 'Cooldown: 15 seconds · Damage: Poison damage over time · Deploys a mine that poisons enemies and reveals them when triggered.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Widowmaker\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Grappling Hook?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Grappling Hook is a Mobility ability with a cooldown of 8 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Grappling Hook?',
        options: [
          { id: 'a', text: '8 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Grappling Hook has a cooldown of 8 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Widowmaker have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
