export default {
  id: 'hero-venture-l4-ultimate',
  pathId: 'hero-venture',
  title: 'Venture: Tectonic Shock',
  subtitle: 'When and how to use Venture\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Tectonic Shock — Overview',
      body: 'Type: Ultimate shockwave · Damage/Effect: Multiple ground shockwaves',
    },
    {
      type: 'text',
      body: 'Sends damaging shockwaves through the ground in front of Venture.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Tectonic Shock.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Tectonic Shock.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Tectonic Shock with teammates such as Winston, Doomfist, Kiriko for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Venture\'s ultimate called?',
        options: [
          { id: 'a', text: 'Tectonic Shock' },
          { id: 'b', text: 'Drill Dash' },
          { id: 'c', text: 'Smart Excavator' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Venture\'s ultimate is Tectonic Shock.',
      },
      {
        id: 'q2',
        text: 'What type is Tectonic Shock?',
        options: [
          { id: 'a', text: 'Ultimate shockwave' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Tectonic Shock is categorised as: Ultimate shockwave.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Tectonic Shock?',
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