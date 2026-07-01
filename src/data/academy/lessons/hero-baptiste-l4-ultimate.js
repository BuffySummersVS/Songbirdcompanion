export default {
  id: 'hero-baptiste-l4-ultimate',
  pathId: 'hero-baptiste',
  title: 'Baptiste: Amplification Matrix',
  subtitle: 'When and how to use Baptiste\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Amplification Matrix — Overview',
      body: 'Type: Ultimate damage and healing amplifier · Damage/Effect: Doubles allied projectile damage and healing passing through the matrix',
    },
    {
      type: 'text',
      body: 'Projects a large matrix that doubles the damage and healing of allied projectiles that pass through it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Amplification Matrix.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Amplification Matrix.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Amplification Matrix with teammates such as Sigma, Orisa, Bastion for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Baptiste\'s ultimate called?',
        options: [
          { id: 'a', text: 'Amplification Matrix' },
          { id: 'b', text: 'Regenerative Burst' },
          { id: 'c', text: 'Biotic Launcher' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Baptiste\'s ultimate is Amplification Matrix.',
      },
      {
        id: 'q2',
        text: 'What type is Amplification Matrix?',
        options: [
          { id: 'a', text: 'Ultimate damage and healing amplifier' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Amplification Matrix is categorised as: Ultimate damage and healing amplifier.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Amplification Matrix?',
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