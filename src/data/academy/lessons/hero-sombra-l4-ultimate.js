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
      body: 'Type: Ultimate disruption · Damage/Effect: 20% of current health, hacks enemies in a large area',
    },
    {
      type: 'text',
      body: 'Releases an electromagnetic pulse that hacks enemies in a large radius, disabling their abilities, dealing damage equal to 20% of their current health, and destroying barriers and shields. EMP\'s cost rose by 67.5% in Season 5, so each one is more valuable.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Conspirator shows you which enemies have ultimates ready — EMP before they can use them.',
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
      body: 'Combine EMP with teammates such as Winston, D.Va, Tracer for maximum impact. With the Life Hack perk, EMP also applies Hotfix to nearby allies.',
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
          { id: 'b', text: 'Hotfix' },
          { id: 'c', text: 'Cyberspace' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Sombra\'s ultimate is EMP.',
      },
      {
        id: 'q2',
        text: 'How much damage does EMP deal?',
        options: [
          { id: 'a', text: '25% of current health' },
          { id: 'b', text: '20% of current health' },
          { id: 'c', text: '50% of maximum health' },
          { id: 'd', text: 'A flat 100 damage' },
        ],
        correctId: 'b',
        explanation: 'EMP deals 20% of each enemy\'s current health since Season 5.',
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