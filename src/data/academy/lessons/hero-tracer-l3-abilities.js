export default {
  id: 'hero-tracer-l3-abilities',
  pathId: 'hero-tracer',
  title: 'Tracer: Core Abilities',
  subtitle: 'How to use Tracer\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Tracer\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Tracer players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Blink (Mobility)',
      body: 'Cooldown: Charge based · Damage: None · Dash a short distance in the direction Tracer is moving. Has multiple charges.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Recall (Self-cleanse / sustain)',
      body: 'Cooldown: 12 seconds · Damage: None · Returns Tracer to her recent position, restoring previous health and ammo state.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Tracer\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Blink?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Blink is a Mobility ability with a cooldown of Charge based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Blink?',
        options: [
          { id: 'a', text: 'Charge based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Blink has a cooldown of Charge based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Tracer have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Tracer has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};