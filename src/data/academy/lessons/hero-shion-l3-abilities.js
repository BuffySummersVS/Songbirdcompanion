export default {
  id: 'hero-shion-l3-abilities',
  pathId: 'hero-shion',
  title: 'Shion: Core Abilities',
  subtitle: 'How to use Shion\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Shion\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Shion players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Execution (Burst volley)',
      body: 'Cooldown: 5 sec · Damage: X-shaped volley damage · Fires multiple X-shaped volleys. Holding the ability tightens the spread for higher single-target pressure.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Evade (Mobility / sustain)',
      body: 'Cooldown: 6 sec · Damage: None · Dashes and briefly grants overhealth, helping Shion survive aggressive flanks.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Joyride (Mobility / projectile vehicle)',
      body: 'Cooldown: 15 sec · Damage: Impact/explosion pressure · Activates a motorbike that can be ridden for mobility or launched at enemies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Shion\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Execution?',
        options: [
          { id: 'a', text: 'Burst volley' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Execution is a Burst volley ability with a cooldown of 5 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Execution?',
        options: [
          { id: 'a', text: '8 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'b',
        explanation: 'Execution has a cooldown of 5 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Shion have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Shion has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};