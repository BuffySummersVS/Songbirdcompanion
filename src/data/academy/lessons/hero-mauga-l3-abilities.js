export default {
  id: 'hero-mauga-l3-abilities',
  pathId: 'hero-mauga',
  title: 'Mauga: Core Abilities',
  subtitle: 'How to use Mauga\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Mauga\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Mauga players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Overrun (Mobility / crowd control)',
      body: 'Cooldown: 5 seconds · Damage: Stomp impact damage · Charge forward unstoppably, then stomp to knock enemies down.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Cardiac Overdrive (Sustain / team utility)',
      body: 'Cooldown: 12 seconds · Damage: None · Reduces incoming damage and lets Mauga and nearby allies heal from damage dealt.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Mauga\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Overrun?',
        options: [
          { id: 'a', text: 'Mobility / crowd control' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Overrun is a Mobility / crowd control ability with a cooldown of 5 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Overrun?',
        options: [
          { id: 'a', text: '5 seconds' },
          { id: 'b', text: '3 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Overrun has a cooldown of 5 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Mauga have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Mauga has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
