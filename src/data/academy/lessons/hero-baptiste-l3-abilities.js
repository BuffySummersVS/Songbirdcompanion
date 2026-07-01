export default {
  id: 'hero-baptiste-l3-abilities',
  pathId: 'hero-baptiste',
  title: 'Baptiste: Core Abilities',
  subtitle: 'How to use Baptiste\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Baptiste\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Baptiste players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Regenerative Burst (Self and team sustain)',
      body: 'Cooldown: 12 sec · Damage: None · Instantly heals Baptiste and nearby allies, then heals again over time. Targets below half health receive double the instant heal.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Immortality Field (Team protection)',
      body: 'Cooldown: 25 sec · Damage: None · Deploy a device that prevents all nearby allies from dying. The device can be destroyed by enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Baptiste\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Regenerative Burst?',
        options: [
          { id: 'a', text: 'Self and team sustain' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Regenerative Burst is a Self and team sustain ability with a cooldown of 12 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Regenerative Burst?',
        options: [
          { id: 'a', text: '12 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Regenerative Burst has a cooldown of 12 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Baptiste have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Baptiste has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};