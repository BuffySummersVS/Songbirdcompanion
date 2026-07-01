export default {
  id: 'hero-emre-l4-ultimate',
  pathId: 'hero-emre',
  title: 'Emre: Override Protocol',
  subtitle: 'When and how to use Emre\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Override Protocol — Overview',
      body: 'Type: Ultimate weapon override · Damage/Effect: Enhanced offensive output',
    },
    {
      type: 'text',
      body: 'Temporarily alters Emre\'s weapon behaviour and offensive capabilities.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Override Protocol.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Override Protocol.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Override Protocol with teammates such as Mercy, Baptiste, Zenyatta for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Emre\'s ultimate called?',
        options: [
          { id: 'a', text: 'Override Protocol' },
          { id: 'b', text: 'Cyber Frag' },
          { id: 'c', text: 'Synthetic Burst Rifle' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Emre\'s ultimate is Override Protocol.',
      },
      {
        id: 'q2',
        text: 'What type is Override Protocol?',
        options: [
          { id: 'a', text: 'Ultimate weapon override' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Override Protocol is categorised as: Ultimate weapon override.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Override Protocol?',
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