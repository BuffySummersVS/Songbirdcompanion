export default {
  id: 'hero-bastion-l4-ultimate',
  pathId: 'hero-bastion',
  title: 'Bastion: Configuration: Artillery',
  subtitle: 'When and how to use Bastion\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Configuration: Artillery — Overview',
      body: 'Type: Ultimate artillery strike · Damage/Effect: High area explosive damage',
    },
    {
      type: 'text',
      body: 'Bastion becomes stationary and fires artillery shells at chosen locations.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Configuration: Artillery.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Configuration: Artillery.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Configuration: Artillery with teammates such as Baptiste, Mercy, Sigma for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Bastion\'s ultimate called?',
        options: [
          { id: 'a', text: 'Configuration: Artillery' },
          { id: 'b', text: 'Configuration: Assault' },
          { id: 'c', text: 'Configuration: Recon' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Bastion\'s ultimate is Configuration: Artillery.',
      },
      {
        id: 'q2',
        text: 'What type is Configuration: Artillery?',
        options: [
          { id: 'a', text: 'Ultimate artillery strike' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Configuration: Artillery is categorised as: Ultimate artillery strike.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Configuration: Artillery?',
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