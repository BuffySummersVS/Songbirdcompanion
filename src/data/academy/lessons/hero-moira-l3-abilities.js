export default {
  id: 'hero-moira-l3-abilities',
  pathId: 'hero-moira',
  title: 'Moira: Core Abilities',
  subtitle: 'How to use Moira\'s active abilities effectively',
  difficulty: 2,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Moira\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Moira players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Biotic Orb (Bouncing projectile)',
      body: 'Cooldown: 10 sec · Damage: Damages enemies or heals allies depending on mode; bounces off walls · Launch a sphere that bounces around the environment, either healing allies or damaging enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Fade (Invulnerability / escape)',
      body: 'Cooldown: 6 sec · Damage: None · Disappear, move faster, and become invulnerable for a short time. Cannot attack while fading.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Moira\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Biotic Orb?',
        options: [
          { id: 'a', text: 'Bouncing projectile' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Biotic Orb is a Bouncing projectile ability with a cooldown of 10 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Biotic Orb?',
        options: [
          { id: 'a', text: '10 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Biotic Orb has a cooldown of 10 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Moira have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Moira has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};