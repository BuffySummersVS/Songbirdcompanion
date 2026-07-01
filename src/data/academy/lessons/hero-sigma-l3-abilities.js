export default {
  id: 'hero-sigma-l3-abilities',
  pathId: 'hero-sigma',
  title: 'Sigma: Core Abilities',
  subtitle: 'How to use Sigma\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Sigma\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Sigma players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Experimental Barrier (Barrier)',
      body: 'Cooldown: Barrier resource / redeploy · Damage: None · Send out and reposition a floating barrier to control sightlines.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Kinetic Grasp (Defensive)',
      body: 'Cooldown: 12 seconds · Damage: None · Absorb incoming projectiles and convert absorbed damage into temporary shields.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Accretion (Projectile / crowd control)',
      body: 'Cooldown: 10 seconds · Damage: Rock impact damage · Gather and throw a mass of debris that knocks enemies down.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Sigma\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Experimental Barrier?',
        options: [
          { id: 'a', text: 'Barrier' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Experimental Barrier is a Barrier ability with a cooldown of Barrier resource / redeploy.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Experimental Barrier?',
        options: [
          { id: 'a', text: 'Barrier resource / redeploy' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Experimental Barrier has a cooldown of Barrier resource / redeploy.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Sigma have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Sigma has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
