export default {
  id: 'hero-doomfist-l3-abilities',
  pathId: 'hero-doomfist',
  title: 'Doomfist: Core Abilities',
  subtitle: 'How to use Doomfist\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Doomfist\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Doomfist players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Rocket Punch (Mobility / crowd control)',
      body: 'Cooldown: 4 seconds · Damage: Impact and wall-slam damage · Charge and punch forward, knocking enemies back. Damage increases if the enemy hits a wall.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Seismic Slam (Mobility / engage)',
      body: 'Cooldown: 7 seconds · Damage: Area impact damage · Leap and slam into enemies, creating space and setting up follow-up pressure.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Power Block (Defensive)',
      body: 'Cooldown: 8 seconds · Damage: None · Block frontal damage. Blocking enough damage empowers Rocket Punch.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Doomfist\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Rocket Punch?',
        options: [
          { id: 'a', text: 'Mobility / crowd control' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Rocket Punch is a Mobility / crowd control ability with a cooldown of 4 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Rocket Punch?',
        options: [
          { id: 'a', text: '4 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Rocket Punch has a cooldown of 4 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Doomfist have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Doomfist has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
