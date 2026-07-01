export default {
  id: 'hero-vendetta-l4-ultimate',
  pathId: 'hero-vendetta',
  title: 'Vendetta: Sundering Blade',
  subtitle: 'When and how to use Vendetta\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Sundering Blade — Overview',
      body: 'Type: Ultimate frontal slash · Damage/Effect: Large frontal damage through armour/barriers/overhealth',
    },
    {
      type: 'text',
      body: 'Unleashes a massive sword attack in front of Vendetta that cuts through defensive layers.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Sundering Blade.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Sundering Blade.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Sundering Blade with teammates such as Kiriko, Lúcio, Junker Queen for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Vendetta\'s ultimate called?',
        options: [
          { id: 'a', text: 'Sundering Blade' },
          { id: 'b', text: 'Warding Stance' },
          { id: 'c', text: 'Palatine Fang' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Vendetta\'s ultimate is Sundering Blade.',
      },
      {
        id: 'q2',
        text: 'What type is Sundering Blade?',
        options: [
          { id: 'a', text: 'Ultimate frontal slash' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Sundering Blade is categorised as: Ultimate frontal slash.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Sundering Blade?',
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