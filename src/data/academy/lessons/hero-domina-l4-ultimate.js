export default {
  id: 'hero-domina-l4-ultimate',
  pathId: 'hero-domina',
  title: 'Domina: Panopticon',
  subtitle: 'When and how to use Domina\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Panopticon — Overview',
      body: 'Type: Ultimate / containment · Damage/Effect: Up to 300 explosion damage on expiration',
    },
    {
      type: 'text',
      body: 'Fires a hard-light barrier that imprisons enemies, blocks outside support and projectiles, then detonates when it expires.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Panopticon.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Panopticon.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Panopticon with teammates such as Widowmaker, Baptiste, Sojourn for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Domina\'s ultimate called?',
        options: [
          { id: 'a', text: 'Panopticon' },
          { id: 'b', text: 'Barrier Array' },
          { id: 'c', text: 'Photon Magnum' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Domina\'s ultimate is Panopticon.',
      },
      {
        id: 'q2',
        text: 'What type is Panopticon?',
        options: [
          { id: 'a', text: 'Ultimate / containment' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Panopticon is categorised as: Ultimate / containment.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Panopticon?',
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