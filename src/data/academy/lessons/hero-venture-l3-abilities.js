export default {
  id: 'hero-venture-l3-abilities',
  pathId: 'hero-venture',
  title: 'Venture: Core Abilities',
  subtitle: 'How to use Venture\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Venture\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Venture players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Drill Dash (Mobility / burst damage)',
      body: 'Cooldown: 8 seconds · Damage: Dash impact damage · Dash forward with the drill, damaging enemies and repositioning.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Burrow (Invulnerability / mobility)',
      body: 'Cooldown: 8 seconds · Damage: Emerge damage · Burrow underground, becoming untargetable before emerging to damage enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Clobber (Enhanced melee)',
      body: 'Cooldown: Melee action · Damage: Melee damage · Venture\'s melee deals additional damage compared with standard quick melee.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Venture\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Drill Dash?',
        options: [
          { id: 'a', text: 'Mobility / burst damage' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Drill Dash is a Mobility / burst damage ability with a cooldown of 8 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Drill Dash?',
        options: [
          { id: 'a', text: '8 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Drill Dash has a cooldown of 8 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Venture have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Venture has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
