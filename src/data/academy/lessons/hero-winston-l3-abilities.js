export default {
  id: 'hero-winston-l3-abilities',
  pathId: 'hero-winston',
  title: 'Winston: Core Abilities',
  subtitle: 'How to use Winston\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Winston\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Winston players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Jump Pack (Mobility)',
      body: 'Cooldown: 6 seconds · Damage: Landing damage · Leap to engage, escape, contest high ground, or pressure backline heroes.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Barrier Projector (Barrier)',
      body: 'Cooldown: 13 seconds · Damage: None · Deploy a bubble barrier that blocks enemy fire and creates temporary safe space.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Winston\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Jump Pack?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Jump Pack is a Mobility ability with a cooldown of 6 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Jump Pack?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Jump Pack has a cooldown of 6 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Winston have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Winston has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
