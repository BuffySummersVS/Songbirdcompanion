export default {
  id: 'hero-kiriko-l4-ultimate',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Kitsune Rush',
  subtitle: 'When and how to use Kiriko\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Kitsune Rush — Overview',
      body: 'Type: Ultimate team speed and cooldown buff · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Summon a kitsune spirit that rushes forward, boosting the movement speed, attack speed, and cooldown recovery of allies that follow in its path.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Kitsune Rush.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Kitsune Rush.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Kitsune Rush with teammates such as Genji, Winston, Tracer for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Kiriko\'s ultimate called?',
        options: [
          { id: 'a', text: 'Kitsune Rush' },
          { id: 'b', text: 'Swift Step' },
          { id: 'c', text: 'Healing Ofuda' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Kiriko\'s ultimate is Kitsune Rush.',
      },
      {
        id: 'q2',
        text: 'What type is Kitsune Rush?',
        options: [
          { id: 'a', text: 'Ultimate team speed and cooldown buff' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Kitsune Rush is categorised as: Ultimate team speed and cooldown buff.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Kitsune Rush?',
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