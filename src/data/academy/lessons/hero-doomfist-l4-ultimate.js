export default {
  id: 'hero-doomfist-l4-ultimate',
  pathId: 'hero-doomfist',
  title: 'Doomfist: Meteor Strike',
  subtitle: 'When and how to use Doomfist\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Meteor Strike — Overview',
      body: 'Type: Ultimate · Damage/Effect: Area impact damage',
    },
    {
      type: 'text',
      body: 'Leap into the sky, then crash down onto a targeted area.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Meteor Strike.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Meteor Strike.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Meteor Strike with teammates such as Tracer, Sombra, Kiriko for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Doomfist\'s ultimate called?',
        options: [
          { id: 'a', text: 'Meteor Strike' },
          { id: 'b', text: 'Rocket Punch' },
          { id: 'c', text: 'Hand Cannon' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Doomfist\'s ultimate is Meteor Strike.',
      },
      {
        id: 'q2',
        text: 'What type is Meteor Strike?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Meteor Strike is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Meteor Strike?',
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