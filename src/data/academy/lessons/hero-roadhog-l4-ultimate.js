export default {
  id: 'hero-roadhog-l4-ultimate',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Whole Hog',
  subtitle: 'When and how to use Roadhog\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Whole Hog — Overview',
      body: 'Type: Ultimate · Damage/Effect: High knockback spread damage',
    },
    {
      type: 'text',
      body: 'Fire a continuous stream of scrap that knocks enemies back.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Whole Hog.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Whole Hog.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Whole Hog with teammates such as Kiriko, Mei, Cassidy for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Roadhog\'s ultimate called?',
        options: [
          { id: 'a', text: 'Whole Hog' },
          { id: 'b', text: 'Chain Hook' },
          { id: 'c', text: 'Scrap Gun' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Roadhog\'s ultimate is Whole Hog.',
      },
      {
        id: 'q2',
        text: 'What type is Whole Hog?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Whole Hog is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Whole Hog?',
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