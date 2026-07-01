export default {
  id: 'hero-shion-l4-ultimate',
  pathId: 'hero-shion',
  title: 'Shion: Satsuriku Spree',
  subtitle: 'When and how to use Shion\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Satsuriku Spree — Overview',
      body: 'Type: Ultimate rush attack · Damage/Effect: Multiple rapid rushes and gunfire',
    },
    {
      type: 'text',
      body: 'Performs three rapid omnidirectional rushes with gunfire, allowing Shion to tear through scattered enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Satsuriku Spree.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Satsuriku Spree.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Satsuriku Spree with teammates such as Winston, D.Va, Kiriko for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Shion\'s ultimate called?',
        options: [
          { id: 'a', text: 'Satsuriku Spree' },
          { id: 'b', text: 'Execution' },
          { id: 'c', text: 'Kira Pistols' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Shion\'s ultimate is Satsuriku Spree.',
      },
      {
        id: 'q2',
        text: 'What type is Satsuriku Spree?',
        options: [
          { id: 'a', text: 'Ultimate rush attack' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Satsuriku Spree is categorised as: Ultimate rush attack.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Satsuriku Spree?',
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