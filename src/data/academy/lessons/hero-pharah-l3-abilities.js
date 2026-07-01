export default {
  id: 'hero-pharah-l3-abilities',
  pathId: 'hero-pharah',
  title: 'Pharah: Core Abilities',
  subtitle: 'How to use Pharah\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Pharah\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Pharah players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Jump Jet (Vertical mobility)',
      body: 'Cooldown: 10 seconds · Damage: None · Launches Pharah upward to take aerial angles.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Concussive Blast (Knockback / mobility)',
      body: 'Cooldown: 8 seconds · Damage: Knockback utility · Fires a concussive projectile that knocks enemies or Pharah away.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Pharah\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Jump Jet?',
        options: [
          { id: 'a', text: 'Vertical mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Jump Jet is a Vertical mobility ability with a cooldown of 10 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Jump Jet?',
        options: [
          { id: 'a', text: '10 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Jump Jet has a cooldown of 10 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Pharah have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Pharah has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
