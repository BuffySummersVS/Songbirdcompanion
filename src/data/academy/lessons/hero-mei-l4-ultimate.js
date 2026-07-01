export default {
  id: 'hero-mei-l4-ultimate',
  pathId: 'hero-mei',
  title: 'Mei: Blizzard',
  subtitle: 'When and how to use Mei\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Blizzard — Overview',
      body: 'Type: Ultimate area control · Damage/Effect: Area damage and freeze/slow effect',
    },
    {
      type: 'text',
      body: 'Deploys Snowball to create a freezing storm that controls an area.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Blizzard.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Blizzard.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Blizzard with teammates such as Reinhardt, Junker Queen, Lúcio for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mei\'s ultimate called?',
        options: [
          { id: 'a', text: 'Blizzard' },
          { id: 'b', text: 'Cryo-Freeze' },
          { id: 'c', text: 'Endothermic Blaster' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Mei\'s ultimate is Blizzard.',
      },
      {
        id: 'q2',
        text: 'What type is Blizzard?',
        options: [
          { id: 'a', text: 'Ultimate area control' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Blizzard is categorised as: Ultimate area control.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Blizzard?',
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