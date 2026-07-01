export default {
  id: 'hero-sombra-l4-ultimate',
  pathId: 'hero-sombra',
  title: 'Sombra: EMP',
  subtitle: 'When and how to use Sombra\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'EMP — Overview',
      body: 'Type: Ultimate disruption · Damage/Effect: Percent health damage and ability disruption',
    },
    {
      type: 'text',
      body: 'Hacks enemies in a large area, damages them, and destroys barriers/shields depending on current patch.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating EMP.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of EMP.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine EMP with teammates such as Winston, D.Va, Tracer for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sombra\'s ultimate called?',
        options: [
          { id: 'a', text: 'EMP' },
          { id: 'b', text: 'Hack' },
          { id: 'c', text: 'Machine Pistol' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Sombra\'s ultimate is EMP.',
      },
      {
        id: 'q2',
        text: 'What type is EMP?',
        options: [
          { id: 'a', text: 'Ultimate disruption' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'EMP is categorised as: Ultimate disruption.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use EMP?',
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