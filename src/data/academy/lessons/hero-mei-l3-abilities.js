export default {
  id: 'hero-mei-l3-abilities',
  pathId: 'hero-mei',
  title: 'Mei: Core Abilities',
  subtitle: 'How to use Mei\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Mei\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Mei players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Cryo-Freeze (Self-sustain)',
      body: 'Cooldown: 12 seconds · Damage: None · Mei encases herself in ice, becoming invulnerable and healing.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Ice Wall (Terrain / area control)',
      body: 'Cooldown: 12 seconds · Damage: None · Creates a wall of ice pillars to block sightlines, split teams, or lift allies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Mei\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Cryo-Freeze?',
        options: [
          { id: 'a', text: 'Self-sustain' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Cryo-Freeze is a Self-sustain ability with a cooldown of 12 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Cryo-Freeze?',
        options: [
          { id: 'a', text: '12 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Cryo-Freeze has a cooldown of 12 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Mei have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Mei has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};