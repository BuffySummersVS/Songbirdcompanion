export default {
  id: 'hero-lifeweaver-l4-ultimate',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Tree of Life',
  subtitle: 'When and how to use Lifeweaver\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tree of Life — Overview',
      body: 'Type: Ultimate area healing · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Place a large tree that instantly heals nearby allies when it sprouts, then continues to heal them periodically while it lives.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Tree of Life.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Tree of Life.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Tree of Life with teammates such as Pharah, Sigma, Widowmaker for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Lifeweaver\'s ultimate called?',
        options: [
          { id: 'a', text: 'Tree of Life' },
          { id: 'b', text: 'Petal Platform' },
          { id: 'c', text: 'Healing Blossom' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Lifeweaver\'s ultimate is Tree of Life.',
      },
      {
        id: 'q2',
        text: 'What type is Tree of Life?',
        options: [
          { id: 'a', text: 'Ultimate area healing' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Tree of Life is categorised as: Ultimate area healing.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Tree of Life?',
        options: [
          { id: 'a', text: 'Immediately when charged regardless of situation' },
          { id: 'b', text: 'When enemies are grouped or vulnerable and teammates are ready' },
          { id: 'c', text: 'Only as a finishing move on one low-health enemy' },
          { id: 'd', text: 'Always at the very start of each fight' },
        ],
        correctId: 'b',
        explanation: 'Ultimates have maximum impact when conditions are right — grouped enemies and coordinated follow-up from teammates.',
      },
    ],
  },
};