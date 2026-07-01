export default {
  id: 'hero-orisa-l3-abilities',
  pathId: 'hero-orisa',
  title: 'Orisa: Core Abilities',
  subtitle: 'How to use Orisa\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Orisa\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Orisa players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Energy Javelin (Projectile / crowd control)',
      body: 'Cooldown: 7 seconds · Damage: Projectile and wall impact damage · Throw a javelin that knocks enemies back and can stun if they hit a wall.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Fortify (Defensive)',
      body: 'Cooldown: 15.5 seconds · Damage: None · Reduces damage taken, grants bonus health, and prevents many crowd-control effects.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Javelin Spin (Defensive / mobility)',
      body: 'Cooldown: 8 seconds · Damage: Contact damage · Spin the javelin to destroy projectiles, push enemies, and move forward.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Orisa\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Energy Javelin?',
        options: [
          { id: 'a', text: 'Projectile / crowd control' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Energy Javelin is a Projectile / crowd control ability with a cooldown of 7 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Energy Javelin?',
        options: [
          { id: 'a', text: '7 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Energy Javelin has a cooldown of 7 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Orisa have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Orisa has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
