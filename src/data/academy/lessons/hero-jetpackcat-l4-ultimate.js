export default {
  id: 'hero-jetpackcat-l4-ultimate',
  pathId: 'hero-jetpackcat',
  title: 'Jetpack Cat: Catnapper',
  subtitle: 'When and how to use Jetpack Cat\'s ultimate',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Catnapper — Overview',
      body: 'Type: Ultimate crowd control and tether · Damage/Effect: Knockdown on landing',
    },
    {
      type: 'text',
      body: 'Dive toward a ground location, knocking down all nearby enemies. The nearest enemy is tethered to Jetpack Cat after landing.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Your Ultimate',
      body: 'The best ultimates are used when the enemy team is grouped, vulnerable, or when your team is ready to follow up. Coordinate with teammates before activating Catnapper.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ultimate Counters',
      body: 'Enemies with invulnerability, mobility, or barrier tools can reduce the effectiveness of Catnapper.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Synergies with Allies',
      body: 'Combine Catnapper with teammates such as Pharah, Echo, Soldier: 76 for maximum impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Jetpack Cat\'s ultimate called?',
        options: [
          { id: 'a', text: 'Catnapper' },
          { id: 'b', text: 'Frenetic Flight' },
          { id: 'c', text: 'Biotic Pawjectiles' },
          { id: 'd', text: 'Overdrive Mode' },
        ],
        correctId: 'a',
        explanation: 'Jetpack Cat\'s ultimate is Catnapper.',
      },
      {
        id: 'q2',
        text: 'What type is Catnapper?',
        options: [
          { id: 'a', text: 'Ultimate crowd control and tether' },
          { id: 'b', text: 'Teleport' },
          { id: 'c', text: 'Team resurrection' },
          { id: 'd', text: 'Shield generation' },
        ],
        correctId: 'a',
        explanation: 'Catnapper is categorised as: Ultimate crowd control and tether.',
      },
      {
        id: 'q3',
        text: 'When is the best time to use Catnapper?',
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