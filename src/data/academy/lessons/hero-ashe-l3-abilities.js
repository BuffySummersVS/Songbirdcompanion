export default {
  id: 'hero-ashe-l3-abilities',
  pathId: 'hero-ashe',
  title: 'Ashe: Core Abilities',
  subtitle: 'How to use Ashe\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Ashe\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Ashe players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Coach Gun (Mobility / knockback)',
      body: 'Cooldown: 10 seconds · Damage: Close-range blast damage · Blasts enemies away and knocks Ashe backward, useful for escaping dives or reaching high ground.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Dynamite (Area damage over time)',
      body: 'Cooldown: 12 seconds · Damage: Explosion plus burn damage · Throws dynamite that can be shot to explode early, applying burn damage in an area.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Ashe\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Coach Gun?',
        options: [
          { id: 'a', text: 'Mobility / knockback' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Coach Gun is a Mobility / knockback ability with a cooldown of 10 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Coach Gun?',
        options: [
          { id: 'a', text: '10 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Coach Gun has a cooldown of 10 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Ashe have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Ashe has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
