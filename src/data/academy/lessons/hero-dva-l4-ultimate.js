export default {
  id: 'hero-dva-l4-ultimate',
  pathId: 'hero-dva',
  title: 'D.Va: Self-Destruct',
  subtitle: 'When and how to use D.Va\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Self-Destruct — Overview',
      body: 'Type: Ultimate · Damage/Effect: Massive area damage',
    },
    {
      type: 'text',
      body: 'D.Va ejects and launches her mech, which explodes after a short delay.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Self-Destruct.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Self-Destruct.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Self-Destruct with teammates such as Winston, Tracer, Genji for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is D.Va\'s ultimate called?',
        options: [
          { id: 'a', text: 'Self-Destruct' },
          { id: 'b', text: 'Boosters' },
          { id: 'c', text: 'Fusion Cannons' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'D.Va\'s ultimate is Self-Destruct.',
      },
      {
        id: 'q2',
        text: 'What type is Self-Destruct?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Self-Destruct is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Self-Destruct?',
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