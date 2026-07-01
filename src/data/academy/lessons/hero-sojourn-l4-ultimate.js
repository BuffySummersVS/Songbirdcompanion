export default {
  id: 'hero-sojourn-l4-ultimate',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Overclock',
  subtitle: 'When and how to use Sojourn\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Overclock — Overview',
      body: 'Type: Ultimate weapon empowerment · Damage/Effect: Repeated high-powered rail shots',
    },
    {
      type: 'text',
      body: 'Automatically charges Sojourn\'s railgun, enabling repeated high-damage shots.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Overclock.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Overclock.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Overclock with teammates such as Mercy, Zenyatta, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sojourn\'s ultimate called?',
        options: [
          { id: 'a', text: 'Overclock' },
          { id: 'b', text: 'Power Slide' },
          { id: 'c', text: 'Railgun' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Sojourn\'s ultimate is Overclock.',
      },
      {
        id: 'q2',
        text: 'What type is Overclock?',
        options: [
          { id: 'a', text: 'Ultimate weapon empowerment' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Overclock is categorised as: Ultimate weapon empowerment.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Overclock?',
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