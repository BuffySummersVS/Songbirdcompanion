export default {
  id: 'hero-mizuki-l4-ultimate',
  pathId: 'hero-mizuki',
  title: 'Mizuki: Kekkai Sanctuary',
  subtitle: 'When and how to use Mizuki\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Kekkai Sanctuary — Overview',
      body: 'Type: Ultimate area healing and projectile absorption · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Create a sanctuary around a location that heals all allies inside it and absorbs enemy projectiles fired from outside the area.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Kekkai Sanctuary.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Kekkai Sanctuary.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Kekkai Sanctuary with teammates such as Reinhardt, Genji, Winston for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mizuki\'s ultimate called?',
        options: [
          { id: 'a', text: 'Kekkai Sanctuary' },
          { id: 'b', text: 'Healing Kasa' },
          { id: 'c', text: 'Spirit Glaive' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Mizuki\'s ultimate is Kekkai Sanctuary.',
      },
      {
        id: 'q2',
        text: 'What type is Kekkai Sanctuary?',
        options: [
          { id: 'a', text: 'Ultimate area healing and projectile absorption' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Kekkai Sanctuary is categorised as: Ultimate area healing and projectile absorption.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Kekkai Sanctuary?',
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