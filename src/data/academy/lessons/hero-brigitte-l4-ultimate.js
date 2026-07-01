export default {
  id: 'hero-brigitte-l4-ultimate',
  pathId: 'hero-brigitte',
  title: 'Brigitte: Rally',
  subtitle: 'When and how to use Brigitte\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Rally — Overview',
      body: 'Type: Ultimate team buff · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Move faster and provide lasting overhealth armour to all nearby allies. Also grants Brigitte additional personal armour.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Rally.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Rally.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Rally with teammates such as Reinhardt, Zarya, Ramattra for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Brigitte\'s ultimate called?',
        options: [
          { id: 'a', text: 'Rally' },
          { id: 'b', text: 'Repair Pack' },
          { id: 'c', text: 'Rocket Flail' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Brigitte\'s ultimate is Rally.',
      },
      {
        id: 'q2',
        text: 'What type is Rally?',
        options: [
          { id: 'a', text: 'Ultimate team buff' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Rally is categorised as: Ultimate team buff.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Rally?',
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