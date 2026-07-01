export default {
  id: 'hero-hazard-l3-abilities',
  pathId: 'hero-hazard',
  title: 'Hazard: Core Abilities',
  subtitle: 'How to use Hazard\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Hazard\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Hazard players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Jagged Wall (Area control)',
      body: 'Cooldown: 12 seconds · Damage: Wall impact / spike damage · Creates a damaging wall that blocks routes, disrupts movement, and controls space.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Violent Leap (Mobility)',
      body: 'Cooldown: 5.5 seconds · Damage: Leap impact damage · Leap forward to engage, escape, contest high ground, or pressure vulnerable enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Spike Guard (Defensive pressure)',
      body: 'Cooldown: Resource-based · Damage: Return spike damage · Reduces incoming damage from the front while threatening nearby enemies with spikes.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Hazard\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Jagged Wall?',
        options: [
          { id: 'a', text: 'Area control' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Jagged Wall is a Area control ability with a cooldown of 12 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Jagged Wall?',
        options: [
          { id: 'a', text: '12 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Jagged Wall has a cooldown of 12 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Hazard have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Hazard has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
