export default {
  id: 'hero-pharah-l4-ultimate',
  pathId: 'hero-pharah',
  title: 'Pharah: Barrage',
  subtitle: 'When and how to use Pharah\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Barrage — Overview',
      body: 'Type: Ultimate rocket barrage · Damage/Effect: Very high sustained explosive damage',
    },
    {
      type: 'text',
      body: 'Pharah launches a rapid barrage of rockets while stationary.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Barrage.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Barrage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Barrage with teammates such as Mercy, Echo, Zarya for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Pharah\'s ultimate called?',
        options: [
          { id: 'a', text: 'Barrage' },
          { id: 'b', text: 'Jump Jet' },
          { id: 'c', text: 'Rocket Launcher' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Pharah\'s ultimate is Barrage.',
      },
      {
        id: 'q2',
        text: 'What type is Barrage?',
        options: [
          { id: 'a', text: 'Ultimate rocket barrage' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Barrage is categorised as: Ultimate rocket barrage.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Barrage?',
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