export default {
  id: 'hero-reaper-l3-abilities',
  pathId: 'hero-reaper',
  title: 'Reaper: Core Abilities',
  subtitle: 'How to use Reaper\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Reaper\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Reaper players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Wraith Form (Invulnerability / escape)',
      body: 'Cooldown: 6 seconds · Damage: None · Reaper becomes invulnerable and faster but cannot shoot.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Shadow Step (Teleport)',
      body: 'Cooldown: 8 seconds · Damage: None · Teleports to a targeted location after a short cast.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Reaper\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Wraith Form?',
        options: [
          { id: 'a', text: 'Invulnerability / escape' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Wraith Form is a Invulnerability / escape ability with a cooldown of 6 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Wraith Form?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Wraith Form has a cooldown of 6 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Reaper have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Reaper has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
