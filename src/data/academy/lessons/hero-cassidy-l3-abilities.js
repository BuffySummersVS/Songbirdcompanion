export default {
  id: 'hero-cassidy-l3-abilities',
  pathId: 'hero-cassidy',
  title: 'Cassidy: Core Abilities',
  subtitle: 'How to use Cassidy\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Cassidy\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Cassidy players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Combat Roll (Mobility / reload)',
      body: 'Cooldown: 5 seconds · Damage: None · Rolls in the chosen direction and reloads Peacekeeper.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Flashbang / Magnetic Grenade (Disruption / burst)',
      body: 'Cooldown: 8 seconds · Damage: Burst explosive damage or hinder effect depending on current patch · Cassidy throws a disruptive explosive used to punish mobile enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Cassidy\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Combat Roll?',
        options: [
          { id: 'a', text: 'Mobility / reload' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Combat Roll is a Mobility / reload ability with a cooldown of 5 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Combat Roll?',
        options: [
          { id: 'a', text: '5 seconds' },
          { id: 'b', text: '3 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Combat Roll has a cooldown of 5 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Cassidy have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Cassidy has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
