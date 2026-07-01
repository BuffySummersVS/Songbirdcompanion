export default {
  id: 'hero-torbjorn-l4-ultimate',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Molten Core',
  subtitle: 'When and how to use Torbjörn\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Molten Core — Overview',
      body: 'Type: Ultimate area denial · Damage/Effect: Lava damage over time',
    },
    {
      type: 'text',
      body: 'Creates pools of molten slag that damage enemies and deny space.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Molten Core.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Molten Core.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Molten Core with teammates such as Sigma, Orisa, Baptiste for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Torbjörn\'s ultimate called?',
        options: [
          { id: 'a', text: 'Molten Core' },
          { id: 'b', text: 'Deploy Turret' },
          { id: 'c', text: 'Rivet Gun' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Torbjörn\'s ultimate is Molten Core.',
      },
      {
        id: 'q2',
        text: 'What type is Molten Core?',
        options: [
          { id: 'a', text: 'Ultimate area denial' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Molten Core is categorised as: Ultimate area denial.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Molten Core?',
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