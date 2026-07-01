export default {
  id: 'hero-hanzo-l4-ultimate',
  pathId: 'hero-hanzo',
  title: 'Hanzo: Dragonstrike',
  subtitle: 'When and how to use Hanzo\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Dragonstrike — Overview',
      body: 'Type: Ultimate area denial · Damage/Effect: Large damage over time',
    },
    {
      type: 'text',
      body: 'Launches spirit dragons that travel through terrain, damaging enemies in their path.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Dragonstrike.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Dragonstrike.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Dragonstrike with teammates such as Zarya, Ana, Kiriko for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Hanzo\'s ultimate called?',
        options: [
          { id: 'a', text: 'Dragonstrike' },
          { id: 'b', text: 'Sonic Arrow' },
          { id: 'c', text: 'Storm Bow' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Hanzo\'s ultimate is Dragonstrike.',
      },
      {
        id: 'q2',
        text: 'What type is Dragonstrike?',
        options: [
          { id: 'a', text: 'Ultimate area denial' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Dragonstrike is categorised as: Ultimate area denial.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Dragonstrike?',
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