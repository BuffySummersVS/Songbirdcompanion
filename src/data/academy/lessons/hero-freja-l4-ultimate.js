export default {
  id: 'hero-freja-l4-ultimate',
  pathId: 'hero-freja',
  title: 'Freja: Bola Shot',
  subtitle: 'When and how to use Freja\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Bola Shot — Overview',
      body: 'Type: Ultimate crowd control / damage · Damage/Effect: High burst and follow-up damage',
    },
    {
      type: 'text',
      body: 'Fires a bola that can trap and damage enemies, setting up eliminations.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Bola Shot.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Bola Shot.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Bola Shot with teammates such as Mercy, Baptiste, Sigma for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Freja\'s ultimate called?',
        options: [
          { id: 'a', text: 'Bola Shot' },
          { id: 'b', text: 'Take Aim' },
          { id: 'c', text: 'Revdraw Crossbow' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Freja\'s ultimate is Bola Shot.',
      },
      {
        id: 'q2',
        text: 'What type is Bola Shot?',
        options: [
          { id: 'a', text: 'Ultimate crowd control / damage' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Bola Shot is categorised as: Ultimate crowd control / damage.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Bola Shot?',
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