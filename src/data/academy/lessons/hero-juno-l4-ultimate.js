export default {
  id: 'hero-juno-l4-ultimate',
  pathId: 'hero-juno',
  title: 'Juno: Orbital Ray',
  subtitle: 'When and how to use Juno\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Orbital Ray — Overview',
      body: 'Type: Ultimate heal and damage beam · Damage/Effect: Damages enemies and heals allies in the beam\'s path',
    },
    {
      type: 'text',
      body: 'Call down an orbital beam that simultaneously damages enemies and heals allies caught in its path.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Orbital Ray.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Orbital Ray.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Orbital Ray with teammates such as Reinhardt, Tracer, Genji for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Juno\'s ultimate called?',
        options: [
          { id: 'a', text: 'Orbital Ray' },
          { id: 'b', text: 'Pulsar Torpedoes' },
          { id: 'c', text: 'Mediblaster' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Juno\'s ultimate is Orbital Ray.',
      },
      {
        id: 'q2',
        text: 'What type is Orbital Ray?',
        options: [
          { id: 'a', text: 'Ultimate heal and damage beam' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Orbital Ray is categorised as: Ultimate heal and damage beam.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Orbital Ray?',
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