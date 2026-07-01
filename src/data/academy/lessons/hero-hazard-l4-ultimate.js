export default {
  id: 'hero-hazard-l4-ultimate',
  pathId: 'hero-hazard',
  title: 'Hazard: Downpour',
  subtitle: 'When and how to use Hazard\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Downpour — Overview',
      body: 'Type: Ultimate · Damage/Effect: Area disruption damage',
    },
    {
      type: 'text',
      body: 'Launches an area-control ultimate that disrupts and pressures grouped enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Downpour.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Downpour.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Downpour with teammates such as Lúcio, Kiriko, Juno for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Hazard\'s ultimate called?',
        options: [
          { id: 'a', text: 'Downpour' },
          { id: 'b', text: 'Jagged Wall' },
          { id: 'c', text: 'Bonespur' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Hazard\'s ultimate is Downpour.',
      },
      {
        id: 'q2',
        text: 'What type is Downpour?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Downpour is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Downpour?',
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