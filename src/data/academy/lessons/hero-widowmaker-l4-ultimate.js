export default {
  id: 'hero-widowmaker-l4-ultimate',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Infra-Sight',
  subtitle: 'When and how to use Widowmaker\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Infra-Sight — Overview',
      body: 'Type: Ultimate recon · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Reveals enemy locations through walls to Widowmaker and her team.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Infra-Sight.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Infra-Sight.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Infra-Sight with teammates such as Mercy, Sigma, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Widowmaker\'s ultimate called?',
        options: [
          { id: 'a', text: 'Infra-Sight' },
          { id: 'b', text: 'Grappling Hook' },
          { id: 'c', text: 'Widow\'s Kiss' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Widowmaker\'s ultimate is Infra-Sight.',
      },
      {
        id: 'q2',
        text: 'What type is Infra-Sight?',
        options: [
          { id: 'a', text: 'Ultimate recon' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Infra-Sight is categorised as: Ultimate recon.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Infra-Sight?',
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