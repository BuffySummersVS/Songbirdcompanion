export default {
  id: 'hero-orisa-l4-ultimate',
  pathId: 'hero-orisa',
  title: 'Orisa: Terra Surge',
  subtitle: 'When and how to use Orisa\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Terra Surge — Overview',
      body: 'Type: Ultimate · Damage/Effect: Charged area damage',
    },
    {
      type: 'text',
      body: 'Pull enemies in, fortify, then release a charged area attack.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Terra Surge.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Terra Surge.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Terra Surge with teammates such as Baptiste, Illari, Sojourn for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Orisa\'s ultimate called?',
        options: [
          { id: 'a', text: 'Terra Surge' },
          { id: 'b', text: 'Energy Javelin' },
          { id: 'c', text: 'Augmented Fusion Driver' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Orisa\'s ultimate is Terra Surge.',
      },
      {
        id: 'q2',
        text: 'What type is Terra Surge?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Terra Surge is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Terra Surge?',
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