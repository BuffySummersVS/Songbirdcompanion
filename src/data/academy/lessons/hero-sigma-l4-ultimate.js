export default {
  id: 'hero-sigma-l4-ultimate',
  pathId: 'hero-sigma',
  title: 'Sigma: Gravitic Flux',
  subtitle: 'When and how to use Sigma\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Gravitic Flux — Overview',
      body: 'Type: Ultimate · Damage/Effect: Lift and slam damage',
    },
    {
      type: 'text',
      body: 'Lift enemies in a targeted area and slam them back down.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Gravitic Flux.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Gravitic Flux.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Gravitic Flux with teammates such as Baptiste, Zenyatta, Ashe for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sigma\'s ultimate called?',
        options: [
          { id: 'a', text: 'Gravitic Flux' },
          { id: 'b', text: 'Experimental Barrier' },
          { id: 'c', text: 'Hyperspheres' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Sigma\'s ultimate is Gravitic Flux.',
      },
      {
        id: 'q2',
        text: 'What type is Gravitic Flux?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Gravitic Flux is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Gravitic Flux?',
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