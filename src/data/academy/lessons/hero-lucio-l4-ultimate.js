export default {
  id: 'hero-lucio-l4-ultimate',
  pathId: 'hero-lucio',
  title: 'Lúcio: Sound Barrier',
  subtitle: 'When and how to use Lúcio\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Sound Barrier — Overview',
      body: 'Type: Ultimate team overhealth · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Leap into the air and provide a large burst of temporary overhealth to all nearby allies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Sound Barrier.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Sound Barrier.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Sound Barrier with teammates such as Reinhardt, Zarya, Tracer for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Lúcio\'s ultimate called?',
        options: [
          { id: 'a', text: 'Sound Barrier' },
          { id: 'b', text: 'Crossfade' },
          { id: 'c', text: 'Sonic Amplifier' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Lúcio\'s ultimate is Sound Barrier.',
      },
      {
        id: 'q2',
        text: 'What type is Sound Barrier?',
        options: [
          { id: 'a', text: 'Ultimate team overhealth' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Sound Barrier is categorised as: Ultimate team overhealth.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Sound Barrier?',
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