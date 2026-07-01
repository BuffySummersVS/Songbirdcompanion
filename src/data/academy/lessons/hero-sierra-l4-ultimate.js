export default {
  id: 'hero-sierra-l4-ultimate',
  pathId: 'hero-sierra',
  title: 'Sierra: Trailblazer',
  subtitle: 'When and how to use Sierra\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Trailblazer — Overview',
      body: 'Type: Ultimate bombing run · Damage/Effect: Carpet-bombing explosive damage',
    },
    {
      type: 'text',
      body: 'Calls in a bombing run across an area, heavily punishing grouped or trapped enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Trailblazer.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Trailblazer.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Trailblazer with teammates such as Zenyatta, Mercy, Sigma for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sierra\'s ultimate called?',
        options: [
          { id: 'a', text: 'Trailblazer' },
          { id: 'b', text: 'Tracking Shot' },
          { id: 'c', text: 'Helix Rifle' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Sierra\'s ultimate is Trailblazer.',
      },
      {
        id: 'q2',
        text: 'What type is Trailblazer?',
        options: [
          { id: 'a', text: 'Ultimate bombing run' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Trailblazer is categorised as: Ultimate bombing run.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Trailblazer?',
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