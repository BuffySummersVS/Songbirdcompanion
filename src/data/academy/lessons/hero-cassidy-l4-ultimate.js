export default {
  id: 'hero-cassidy-l4-ultimate',
  pathId: 'hero-cassidy',
  title: 'Cassidy: Deadeye',
  subtitle: 'When and how to use Cassidy\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Deadeye — Overview',
      body: 'Type: Ultimate precision attack · Damage/Effect: Charged lethal shots',
    },
    {
      type: 'text',
      body: 'Locks onto visible enemies and fires powerful shots after charging.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Deadeye.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Deadeye.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Deadeye with teammates such as Mercy, Ana, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Cassidy\'s ultimate called?',
        options: [
          { id: 'a', text: 'Deadeye' },
          { id: 'b', text: 'Combat Roll' },
          { id: 'c', text: 'Peacekeeper' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Cassidy\'s ultimate is Deadeye.',
      },
      {
        id: 'q2',
        text: 'What type is Deadeye?',
        options: [
          { id: 'a', text: 'Ultimate precision attack' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Deadeye is categorised as: Ultimate precision attack.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Deadeye?',
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