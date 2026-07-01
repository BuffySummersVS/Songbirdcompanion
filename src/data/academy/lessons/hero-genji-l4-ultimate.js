export default {
  id: 'hero-genji-l4-ultimate',
  pathId: 'hero-genji',
  title: 'Genji: Dragonblade',
  subtitle: 'When and how to use Genji\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Dragonblade — Overview',
      body: 'Type: Ultimate melee weapon · Damage/Effect: High melee slash damage',
    },
    {
      type: 'text',
      body: 'Unsheathes a blade for repeated close-range slashes.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Dragonblade.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Dragonblade.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Dragonblade with teammates such as Ana, Kiriko, Winston for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Genji\'s ultimate called?',
        options: [
          { id: 'a', text: 'Dragonblade' },
          { id: 'b', text: 'Deflect' },
          { id: 'c', text: 'Shuriken' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Genji\'s ultimate is Dragonblade.',
      },
      {
        id: 'q2',
        text: 'What type is Dragonblade?',
        options: [
          { id: 'a', text: 'Ultimate melee weapon' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Dragonblade is categorised as: Ultimate melee weapon.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Dragonblade?',
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