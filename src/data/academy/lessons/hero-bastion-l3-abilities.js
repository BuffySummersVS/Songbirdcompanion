export default {
  id: 'hero-bastion-l3-abilities',
  pathId: 'hero-bastion',
  title: 'Bastion: Core Abilities',
  subtitle: 'How to use Bastion\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Bastion\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Bastion players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Configuration: Assault (Transformation / burst damage)',
      body: 'Cooldown: 12 seconds · Damage: Very high sustained minigun damage · Transforms Bastion into a slow assault mode with extremely high damage output.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'A-36 Tactical Grenade (Projectile explosive)',
      body: 'Cooldown: 8 seconds · Damage: Explosion damage · Fires a bouncing sticky grenade that detonates after a short delay.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Bastion\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Configuration: Assault?',
        options: [
          { id: 'a', text: 'Transformation / burst damage' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Configuration: Assault is a Transformation / burst damage ability with a cooldown of 12 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Configuration: Assault?',
        options: [
          { id: 'a', text: '12 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Configuration: Assault has a cooldown of 12 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Bastion have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Bastion has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
