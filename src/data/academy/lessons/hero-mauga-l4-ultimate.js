export default {
  id: 'hero-mauga-l4-ultimate',
  pathId: 'hero-mauga',
  title: 'Mauga: Cage Fight',
  subtitle: 'When and how to use Mauga\'s ultimate',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Cage Fight — Overview',
      body: 'Type: Ultimate · Damage/Effect: None',
    },
    {
      type: 'text',
      body: 'Creates a barrier arena that traps nearby enemies and gives Mauga unlimited ammo.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Cage Fight.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Cage Fight.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Cage Fight with teammates such as Bastion, Reaper, Kiriko for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Mauga\'s ultimate called?',
        options: [
          { id: 'a', text: 'Cage Fight' },
          { id: 'b', text: 'Overrun' },
          { id: 'c', text: 'Incendiary and Volatile Chainguns' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Mauga\'s ultimate is Cage Fight.',
      },
      {
        id: 'q2',
        text: 'What type is Cage Fight?',
        options: [
          { id: 'a', text: 'Ultimate' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Cage Fight is categorised as: Ultimate.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Cage Fight?',
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