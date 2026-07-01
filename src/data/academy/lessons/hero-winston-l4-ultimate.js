export default {
  id: 'hero-winston-l4-ultimate',
  pathId: 'hero-winston',
  title: 'Winston: Primal Rage',
  subtitle: 'When and how to use Winston\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Primal Rage — Overview',
      body: 'Type: Ultimate · Damage/Effect: Melee knockback damage',
    },
    {
      type: 'text',
      body: 'Gain a large health pool and leap repeatedly, knocking enemies around with melee attacks.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Primal Rage.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Primal Rage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Primal Rage with teammates such as Tracer, Genji, Sombra for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Winston\'s ultimate called?',
        options: [
          { id: 'a', text: 'Primal Rage' },
          { id: 'b', text: 'Jump Pack' },
          { id: 'c', text: 'Tesla Cannon' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Winston\'s ultimate is Primal Rage.',
      },
      {
        id: 'q2',
        text: 'What type is Primal Rage?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Primal Rage is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Primal Rage?',
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