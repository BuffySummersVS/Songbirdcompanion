export default {
  id: 'hero-ramattra-l4-ultimate',
  pathId: 'hero-ramattra',
  title: 'Ramattra: Annihilation',
  subtitle: 'When and how to use Ramattra\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Annihilation — Overview',
      body: 'Type: Ultimate · Damage/Effect: Area damage over time',
    },
    {
      type: 'text',
      body: 'Enter Nemesis Form and create an energy swarm that damages nearby enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Annihilation.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Annihilation.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Annihilation with teammates such as Lúcio, Kiriko, Mei for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Ramattra\'s ultimate called?',
        options: [
          { id: 'a', text: 'Annihilation' },
          { id: 'b', text: 'Void Barrier' },
          { id: 'c', text: 'Void Accelerator' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Ramattra\'s ultimate is Annihilation.',
      },
      {
        id: 'q2',
        text: 'What type is Annihilation?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Annihilation is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Annihilation?',
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