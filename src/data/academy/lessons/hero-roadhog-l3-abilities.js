export default {
  id: 'hero-roadhog-l3-abilities',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Core Abilities',
  subtitle: 'How to use Roadhog\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Roadhog\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Roadhog players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Chain Hook (Pick tool)',
      body: 'Cooldown: 7 seconds · Damage: Hook impact damage · Throw a hook to pull an enemy toward Roadhog for a follow-up shot.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Take a Breather (Self-sustain)',
      body: 'Cooldown: Resource-based · Damage: None · Heal yourself and reduce incoming damage while inhaling.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Roadhog\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Chain Hook?',
        options: [
          { id: 'a', text: 'Pick tool' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Chain Hook is a Pick tool ability with a cooldown of 7 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Chain Hook?',
        options: [
          { id: 'a', text: '7 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Chain Hook has a cooldown of 7 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Roadhog have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'a',
        explanation: 'Roadhog has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
