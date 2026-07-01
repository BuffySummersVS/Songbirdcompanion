export default {
  id: 'hero-moira-l4-ultimate',
  pathId: 'hero-moira',
  title: 'Moira: Coalescence',
  subtitle: 'When and how to use Moira\'s ultimate',
  difficulty: 2,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Coalescence — Overview',
      body: 'Type: Ultimate long-range beam · Damage/Effect: 140 DPS to enemies / 70 HPS to allies simultaneously',
    },
    {
      type: 'text',
      body: 'Fire a long-range beam that passes through barriers, simultaneously healing allies and damaging enemies. Fade can be used during Coalescence.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Coalescence.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Coalescence.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Coalescence with teammates such as Reinhardt, Mei, Zarya for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Moira\'s ultimate called?',
        options: [
          { id: 'a', text: 'Coalescence' },
          { id: 'b', text: 'Biotic Orb' },
          { id: 'c', text: 'Biotic Grasp' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Moira\'s ultimate is Coalescence.',
      },
      {
        id: 'q2',
        text: 'What type is Coalescence?',
        options: [
          { id: 'a', text: 'Ultimate long-range beam' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Coalescence is categorised as: Ultimate long-range beam.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Coalescence?',
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