export default {
  id: 'hero-junkerqueen-l4-ultimate',
  pathId: 'hero-junkerqueen',
  title: 'Junker Queen: Rampage',
  subtitle: 'When and how to use Junker Queen\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Rampage — Overview',
      body: 'Type: Ultimate · Damage/Effect: Wound damage over time',
    },
    {
      type: 'text',
      body: 'Charge forward, wound enemies, and apply anti-heal.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Rampage.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Rampage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Rampage with teammates such as Lúcio, Kiriko, Reaper for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Junker Queen\'s ultimate called?',
        options: [
          { id: 'a', text: 'Rampage' },
          { id: 'b', text: 'Jagged Blade' },
          { id: 'c', text: 'Scattergun' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Junker Queen\'s ultimate is Rampage.',
      },
      {
        id: 'q2',
        text: 'What type is Rampage?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Rampage is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Rampage?',
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