export default {
  id: 'hero-reaper-l4-ultimate',
  pathId: 'hero-reaper',
  title: 'Reaper: Death Blossom',
  subtitle: 'When and how to use Reaper\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Death Blossom — Overview',
      body: 'Type: Ultimate area damage · Damage/Effect: High close-range area damage',
    },
    {
      type: 'text',
      body: 'Reaper spins and fires both shotguns, damaging nearby enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Death Blossom.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Death Blossom.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Death Blossom with teammates such as Kiriko, Lúcio, Reinhardt for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Reaper\'s ultimate called?',
        options: [
          { id: 'a', text: 'Death Blossom' },
          { id: 'b', text: 'Wraith Form' },
          { id: 'c', text: 'Hellfire Shotguns' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Reaper\'s ultimate is Death Blossom.',
      },
      {
        id: 'q2',
        text: 'What type is Death Blossom?',
        options: [
          { id: 'a', text: 'Ultimate area damage' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Death Blossom is categorised as: Ultimate area damage.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Death Blossom?',
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