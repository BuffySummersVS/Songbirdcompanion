export default {
  id: 'hero-junkrat-l4-ultimate',
  pathId: 'hero-junkrat',
  title: 'Junkrat: RIP-Tire',
  subtitle: 'When and how to use Junkrat\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'RIP-Tire — Overview',
      body: 'Type: Ultimate explosive tire · Damage/Effect: Very high area explosion damage',
    },
    {
      type: 'text',
      body: 'Controls a motorized tire that climbs walls and explodes on command.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating RIP-Tire.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of RIP-Tire.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine RIP-Tire with teammates such as Orisa, Mei, Ana for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Junkrat\'s ultimate called?',
        options: [
          { id: 'a', text: 'RIP-Tire' },
          { id: 'b', text: 'Concussion Mine' },
          { id: 'c', text: 'Frag Launcher' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Junkrat\'s ultimate is RIP-Tire.',
      },
      {
        id: 'q2',
        text: 'What type is RIP-Tire?',
        options: [
          { id: 'a', text: 'Ultimate explosive tire' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'RIP-Tire is categorised as: Ultimate explosive tire.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use RIP-Tire?',
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