export default {
  id: 'hero-ashe-l4-ultimate',
  pathId: 'hero-ashe',
  title: 'Ashe: B.O.B.',
  subtitle: 'When and how to use Ashe\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'B.O.B. — Overview',
      body: 'Type: Ultimate summon · Damage/Effect: Charge knock-up and sustained arm-cannon damage',
    },
    {
      type: 'text',
      body: 'Summons B.O.B. He charges forward, knocks enemies up, then fires at targets and can contest objectives.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating B.O.B..',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of B.O.B..',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine B.O.B. with teammates such as Mercy, Zenyatta, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Ashe\'s ultimate called?',
        options: [
          { id: 'a', text: 'B.O.B.' },
          { id: 'b', text: 'Coach Gun' },
          { id: 'c', text: 'The Viper' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Ashe\'s ultimate is B.O.B..',
      },
      {
        id: 'q2',
        text: 'What type is B.O.B.?',
        options: [
          { id: 'a', text: 'Ultimate summon' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'B.O.B. is categorised as: Ultimate summon.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use B.O.B.?',
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