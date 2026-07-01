export default {
  id: 'hero-soldier76-l4-ultimate',
  pathId: 'hero-soldier76',
  title: 'Soldier: 76: Tactical Visor',
  subtitle: 'When and how to use Soldier: 76\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tactical Visor — Overview',
      body: 'Type: Ultimate aim assist · Damage/Effect: Enhanced automatic target tracking',
    },
    {
      type: 'text',
      body: 'Automatically aims at visible enemies within line of sight.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Tactical Visor.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Tactical Visor.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Tactical Visor with teammates such as Mercy, Baptiste, Zenyatta for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Soldier: 76\'s ultimate called?',
        options: [
          { id: 'a', text: 'Tactical Visor' },
          { id: 'b', text: 'Helix Rockets' },
          { id: 'c', text: 'Heavy Pulse Rifle' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Soldier: 76\'s ultimate is Tactical Visor.',
      },
      {
        id: 'q2',
        text: 'What type is Tactical Visor?',
        options: [
          { id: 'a', text: 'Ultimate aim assist' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Tactical Visor is categorised as: Ultimate aim assist.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Tactical Visor?',
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