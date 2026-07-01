export default {
  id: 'hero-symmetra-l4-ultimate',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Photon Barrier',
  subtitle: 'When and how to use Symmetra\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Photon Barrier — Overview',
      body: 'Type: Ultimate barrier · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Creates a massive map-wide barrier that blocks enemy fire.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Photon Barrier.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Photon Barrier.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Photon Barrier with teammates such as Reinhardt, Mei, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Symmetra\'s ultimate called?',
        options: [
          { id: 'a', text: 'Photon Barrier' },
          { id: 'b', text: 'Sentry Turret' },
          { id: 'c', text: 'Photon Projector' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Symmetra\'s ultimate is Photon Barrier.',
      },
      {
        id: 'q2',
        text: 'What type is Photon Barrier?',
        options: [
          { id: 'a', text: 'Ultimate barrier' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Photon Barrier is categorised as: Ultimate barrier.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Photon Barrier?',
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