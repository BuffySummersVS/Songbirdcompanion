export default {
  id: 'hero-domina-l3-abilities',
  pathId: 'hero-domina',
  title: 'Domina: Core Abilities',
  subtitle: 'How to use Domina\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Domina\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Domina players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Barrier Array (Segmented barrier)',
      body: 'Cooldown: 14 sec · Damage: None · Constructs a large segmented hard-light barrier. Each panel can be broken separately, allowing Domina to control sightlines and protect her team.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Sonic Repulsors (Crowd control)',
      body: 'Cooldown: 7 sec · Damage: 40 knockback damage, 80 if enemy hits a wall · Pushes enemies away from Domina. If enemies are knocked into terrain, they take increased damage and are briefly stunned.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Crystal Charge (Explosive projectile)',
      body: 'Cooldown: 8 sec · Damage: Damage over time while travelling, then explosive detonation · Projects an explosive hard-light crystal that can be reactivated to detonate. Useful for poking through barriers and pressuring grouped enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Domina\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Barrier Array?',
        options: [
          { id: 'a', text: 'Segmented barrier' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Barrier Array is a Segmented barrier ability with a cooldown of 14 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Barrier Array?',
        options: [
          { id: 'a', text: '14 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Barrier Array has a cooldown of 14 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Domina have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Domina has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};