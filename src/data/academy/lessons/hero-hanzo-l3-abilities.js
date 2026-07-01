export default {
  id: 'hero-hanzo-l3-abilities',
  pathId: 'hero-hanzo',
  title: 'Hanzo: Core Abilities',
  subtitle: 'How to use Hanzo\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Hanzo\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Hanzo players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Sonic Arrow (Recon projectile)',
      body: 'Cooldown: 12 seconds · Damage: Arrow impact damage · Reveals enemies near the arrow\'s landing point.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Storm Arrows (Rapid projectile burst)',
      body: 'Cooldown: 10 seconds · Damage: Multiple rapid arrows · Allows Hanzo to rapidly fire several arrows at reduced draw time.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Lunge (Mobility)',
      body: 'Cooldown: 5 seconds · Damage: None · A horizontal air dash used for repositioning.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Hanzo\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Sonic Arrow?',
        options: [
          { id: 'a', text: 'Recon projectile' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Sonic Arrow is a Recon projectile ability with a cooldown of 12 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Sonic Arrow?',
        options: [
          { id: 'a', text: '12 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Sonic Arrow has a cooldown of 12 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Hanzo have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Hanzo has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
