export default {
  id: 'hero-wuyang-l4-ultimate',
  pathId: 'hero-wuyang',
  title: 'Wuyang: Tidal Blast',
  subtitle: 'When and how to use Wuyang\'s ultimate',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tidal Blast — Overview',
      body: 'Type: Ultimate protection and burst heal · Damage/Effect: 100 damage / 1 second knockdown on detonation',
    },
    {
      type: 'text',
      body: 'Envelop an ally or yourself in a water barrier granting 300 overhealth. After 3 seconds, the barrier detonates, knocking down nearby enemies and healing the target for 250 HP.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Tidal Blast.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Tidal Blast.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Tidal Blast with teammates such as Orisa, Sigma, Roadhog for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Wuyang\'s ultimate called?',
        options: [
          { id: 'a', text: 'Tidal Blast' },
          { id: 'b', text: 'Restorative Stream' },
          { id: 'c', text: 'Xuanwu Staff' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Wuyang\'s ultimate is Tidal Blast.',
      },
      {
        id: 'q2',
        text: 'What type is Tidal Blast?',
        options: [
          { id: 'a', text: 'Ultimate protection and burst heal' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Tidal Blast is categorised as: Ultimate protection and burst heal.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Tidal Blast?',
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