export default {
  id: 'hero-wreckingball-l4-ultimate',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Minefield',
  subtitle: 'When and how to use Wrecking Ball\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Minefield — Overview',
      body: 'Type: Ultimate · Damage/Effect: Mine explosion damage',
    },
    {
      type: 'text',
      body: 'Deploy a field of proximity mines that control space and punish movement.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Minefield.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Minefield.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Minefield with teammates such as Tracer, Sombra, Genji for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Wrecking Ball\'s ultimate called?',
        options: [
          { id: 'a', text: 'Minefield' },
          { id: 'b', text: 'Roll' },
          { id: 'c', text: 'Quad Cannons' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball\'s ultimate is Minefield.',
      },
      {
        id: 'q2',
        text: 'What type is Minefield?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Minefield is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Minefield?',
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