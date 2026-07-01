export default {
  id: 'hero-zenyatta-l4-ultimate',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Transcendence',
  subtitle: 'When and how to use Zenyatta\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Transcendence — Overview',
      body: 'Type: Ultimate invulnerability and mass heal · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Enter a state of pure energy, becoming invulnerable and moving faster while healing all nearby allies at 300 HP per second.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Transcendence.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Transcendence.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Transcendence with teammates such as Genji, Reaper, Zarya for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Zenyatta\'s ultimate called?',
        options: [
          { id: 'a', text: 'Transcendence' },
          { id: 'b', text: 'Orb of Harmony' },
          { id: 'c', text: 'Orb of Destruction' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Zenyatta\'s ultimate is Transcendence.',
      },
      {
        id: 'q2',
        text: 'What type is Transcendence?',
        options: [
          { id: 'a', text: 'Ultimate invulnerability and mass heal' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Transcendence is categorised as: Ultimate invulnerability and mass heal.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Transcendence?',
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