export default {
  id: 'hero-echo-l4-ultimate',
  pathId: 'hero-echo',
  title: 'Echo: Duplicate',
  subtitle: 'When and how to use Echo\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Duplicate — Overview',
      body: 'Type: Ultimate transformation · Damage/Effect: Depends on duplicated hero',
    },
    {
      type: 'text',
      body: 'Echo copies an enemy hero and can use their abilities for a limited time.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Duplicate.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Duplicate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Duplicate with teammates such as Mercy, Winston, D.Va for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Echo\'s ultimate called?',
        options: [
          { id: 'a', text: 'Duplicate' },
          { id: 'b', text: 'Sticky Bombs' },
          { id: 'c', text: 'Tri-Shot' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Echo\'s ultimate is Duplicate.',
      },
      {
        id: 'q2',
        text: 'What type is Duplicate?',
        options: [
          { id: 'a', text: 'Ultimate transformation' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Duplicate is categorised as: Ultimate transformation.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Duplicate?',
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