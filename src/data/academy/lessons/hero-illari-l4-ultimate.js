export default {
  id: 'hero-illari-l4-ultimate',
  pathId: 'hero-illari',
  title: 'Illari: Captive Sun',
  subtitle: 'When and how to use Illari\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Captive Sun — Overview',
      body: 'Type: Ultimate area denial · Damage/Effect: High burst damage to affected enemies',
    },
    {
      type: 'text',
      body: 'Fire an explosive ball of solar energy that slows enemies in a large area and causes them to burst when they take further damage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Captive Sun.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Captive Sun.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Captive Sun with teammates such as Orisa, Sigma, Ashe for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Illari\'s ultimate called?',
        options: [
          { id: 'a', text: 'Captive Sun' },
          { id: 'b', text: 'Healing Pylon' },
          { id: 'c', text: 'Solar Rifle' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Illari\'s ultimate is Captive Sun.',
      },
      {
        id: 'q2',
        text: 'What type is Captive Sun?',
        options: [
          { id: 'a', text: 'Ultimate area denial' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Captive Sun is categorised as: Ultimate area denial.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Captive Sun?',
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