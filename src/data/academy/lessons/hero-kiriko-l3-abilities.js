export default {
  id: 'hero-kiriko-l3-abilities',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Core Abilities',
  subtitle: 'How to use Kiriko\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Kiriko\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Kiriko players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Swift Step (Teleport)',
      body: 'Cooldown: 7 sec · Damage: None · Instantly teleport to a targeted ally, passing through barriers and walls.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Protection Suzu (Team cleanse and invulnerability)',
      body: 'Cooldown: 14 sec · Damage: None · Throw a charm that briefly makes nearby allies invulnerable and cleanses most negative effects.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Kiriko\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Swift Step?',
        options: [
          { id: 'a', text: 'Teleport' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Swift Step is a Teleport ability with a cooldown of 7 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Swift Step?',
        options: [
          { id: 'a', text: '7 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Swift Step has a cooldown of 7 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Kiriko have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Kiriko has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};